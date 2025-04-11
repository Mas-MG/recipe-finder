import { ReactElement, useEffect, useState } from "react";
import { Product } from "../App";
import ProductCard from "./ProductCard";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const SearchResult = ({ products }: { products: Product[] }) => {
  const limit = 6;
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [items, setItems] = useState<ReactElement[]>([]);

  useEffect(() => {
    if (page != 0) {
      const totalPages = Math.ceil(products?.length / limit);
      setTotalPages(totalPages);
      const itemsToDisplay = products
        ?.slice(page * limit - limit, page * limit)
        ?.map((product) => <ProductCard key={product?.id} product={product} />);
      setItems(itemsToDisplay);
    }
  }, [products, page]);


  const arrayOfTotalPages = [];
  for (let i = 1; i <= totalPages; i++) {
    arrayOfTotalPages.push(i);
  }

  return (
    products?.length >0 && 
    <div className="products-container">
      <div className="products">{items}</div>
      <div className="pagination">
        <button
          disabled={page == 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="prev paginagte-btn"
        >
          <IoIosArrowBack />
          Prev
        </button>
        {arrayOfTotalPages?.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            className={`page-number paginagte-btn ${pageNumber===page ? "active-page" : ""}`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          disabled={page == totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className="next paginagte-btn"
        >
          Next
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default SearchResult;
