import React from 'react';
import './products.css';
import styled from 'styled-components';

function Products(props) {
  return (
    <Wrapper key={props.id} className="box">
        <div className="product-wrapper-inner">            
            <div className="product-img-wrap">
            <picture>
                <img src={props.thumbnail} />
            </picture>
            </div>
            <div className="product-details">
            
            <a href="#" alt="">
                {props.title}
            </a>
            <p className="description">{props.description.substring(0, 40)}...</p>

            <span>
                <p>Category: </p>
                {props.category.substring(0, 10)}
            </span>

            <span>
                <p>Price: </p>
                {props.price}
            </span>

            <span>
                <p>Stock: </p>
                {props.stock}
            </span>

            </div>
           </div>
         
      
    </Wrapper>
  )
}

    /*--can creat style component like below --*/
    const Wrapper = styled.div`
    min-height: 470px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    `;

export default Products
