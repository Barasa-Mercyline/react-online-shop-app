import "./App.css";
import ProductTile from "./components/ProductTile";
import Navbar from "./components/Navbar";
import products from "./components/product";

function App() {
  return (
    <>
    <Navbar />
    <ProductTile products={products} />
  </>
  );
 
}

export default App;
