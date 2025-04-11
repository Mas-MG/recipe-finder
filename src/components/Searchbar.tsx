import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { Product } from "../App";

export type HandleSetProductsType = (products: Product[]) => void;

const fetchProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

const Searchbar = ({
  handleSetProducts,
}: {
  handleSetProducts: HandleSetProductsType;
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <div className="searchbar">
      <div className="searchbar-search">
        <input
          className="searchbar-input"
          placeholder="Search recipes..."
          type="text"
        />
      </div>
      <button onClick={() => handleSetProducts(data)} className="searchbar-btn">
        Search
      </button>
    </div>
  );
};

export default Searchbar;
