import { useState } from "react";
import Searchbar from "./components/Searchbar";
import { HandleSetProductsType } from "./components/Searchbar";
import SearchResult from "./components/SearchResult";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const handleSetProducts:HandleSetProductsType=(products:Product[])=>{
    setProducts(products)
  }
  return (
    <div className="main-layer">
      <div className="container">
        <h1 className="container-title">Recipe Finder</h1>
        <Searchbar handleSetProducts={handleSetProducts}/>
        <SearchResult products={products}/>
      </div>
    </div>
  );
};

export default App;
