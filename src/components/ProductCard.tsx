import { Product } from "../App"

const ProductCard = ({product}:{product:Product}) => {
  return (
    <div className="product-card">
      <img className="product-img" src={product?.image} alt={product?.title} />
      <h3 className="product-title">{product?.title?.split(" ")?.slice(0, 3)?.join(" ")}</h3>
      <p className="product-details">{product?.description?.split(" ")?.slice(0, 10)?.join(" ")}</p>
    </div>
  )
}

export default ProductCard