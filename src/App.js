import { BrowserRouter} from "react-router-dom";
import ProductList from "./components/ProductList";


function App() {

return (
    <div className="App">
      <div  className="product-page">
        <BrowserRouter>
          {/* <FilterProducts filterProductSelected={onFilterProductSelected}> </FilterProducts> */}
          <ProductList />
          
        </BrowserRouter>
      </div>
  </div>
  );
}

export default App;
