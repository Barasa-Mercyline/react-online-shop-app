import "./App.css";
import Body from "./components/Body";
import ProductTile from "./components/ProductTile";

import products from "./components/product";

function App() {
  return <ProductTile products={products} />;
}

export default App;
