import { BrowserRouter} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";



function App() {

return (
    <div className="App">
      <div  className="product-page">
        <BrowserRouter>
          <ProductList />
        </BrowserRouter>
      </div>
  </div>
  );
}

export default App;
