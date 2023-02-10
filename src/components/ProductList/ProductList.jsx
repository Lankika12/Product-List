import React, { useEffect, useState } from 'react';
import './productList.css';
import logo from '../../assets/images/pearson-logo.png';
import Products from '../Product/Products';



function ProductList(props) {

    const [productDetails, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [sortType, setSortType] = useState("title");

   

    useEffect(() => {
        sortArray(sortType);
    }, [sortType] );


    const handleclick = async(e)=> {
        const deleteditem = e.target.value;
        console.log(e.target.value)
        const api = await fetch('https://dummyjson.com/products/'+ deleteditem, {
        method: 'DELETE',
        }).then(res => res.json());
        
        console.log(api);
        };

    const sortArray = async (type) => {
    const api = await fetch('https://dummyjson.com/products').then(res => res.json());

    const types = {
        category:"category",
        title:"title",
        description:"description",
        price:"price",
        stock:"stock",
    };

    const sortProperty = types[type];
    if (sortProperty==="price" || sortProperty==="stock") {
        const sorted = [...api.products].sort((a,b) => a[sortProperty] - b[sortProperty]);
        setProducts(sorted);
        
    }else{
        const sorted = [...api.products].sort((a,b) => {return a[sortProperty].localeCompare(b[sortProperty], 'en' , {sensitivity: 'base'})});
        setProducts(sorted);
    }
 };


       
      return (
        <div>
            <div className="product-header">
                <div className="product-header-inner">
                    <div className="product-logo">
                        <img src={logo} />
                    </div>
                    <div className="search-products">
                        <div className="search-bar-wrapper">
                                <input type="search" className="search-bar" placeholder="Search by Product Category....." onChange={(e) =>setSearch(e.target.value)}/>
                        </div>
                    </div>

                    <div className="sort-products">
                        <select defaultValue={'DEFAULT'} onChange={(e) =>setSortType(e.target.value)}>
                            <option value="DEFAULT" disabled>Sort items</option>
                            <option value="category">Category</option>
                            <option value="title">Title</option>
                            <option value="description">Description</option>
                            <option value="price">Price</option>
                            <option value="stock">Stock</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="product-wrap">
            {productDetails.filter((productData) => {
            return search.toString().toLowerCase()===''
            ? productData
            : productData.title.toString().toLowerCase().includes(search);
            }).map(productData => {
                   return (
                    <div className='product-wrap-box' key={productData.id}>
                        <Products
                        thumbnail={productData.thumbnail}
                        title={productData.title}
                        description={productData.description}
                        category={productData.category} 
                        price={productData.price}
                        stock={productData.stock}
                        >
                            
                        </Products>
                        <button onClick={handleclick} value={productData.id}> Delete</button>

                    </div>
                   )

                })}
                
            </div>
            
        </div>
     )
    }



export default ProductList;









