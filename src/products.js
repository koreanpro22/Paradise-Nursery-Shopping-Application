import { useSelector, useDispatch } from "react-redux";
import { addQuantity } from "./productsSlice";

export default function Products() {
  
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

    const handleAddToCart = (index) => {
        dispatch(addQuantity(index));
    }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>All Products</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          justifyContent: "center",
          alignContent: "center",
          alignSelf: "center",
          marginBottom: "20px",
        }}
      >
        {products.map((product, idx) => {
          return (
            <div
              key={idx}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "200px",
                height: "200px",
                border: "solid 1px black",
                backgroundColor: "white",
                padding: "10px",
                margin: "20px",
                gap: 25,
              }}
            >
              {product.name}: ${product.cost} each
              <img
                src={product.img}
                style={{ width: "100px", height: "100px" }}
              ></img>
              {
                product.quantity ? 
              <button disabled>Already in Cart</button> :
              <button onClick={() => handleAddToCart(idx)}>Add to Cart</button>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}
