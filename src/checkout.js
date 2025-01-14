import { useSelector, useDispatch } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { addQuantity, deleteQuantity, subtractQuantity } from "./productsSlice";
import { Link } from "react-router";
import { useState } from "react";

export default function Checkout() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [hoverContinueShopping, setHoverContinueShopping] = useState(false);
  const [hoverCheckout, setHoverCheckout] = useState(false);

  const handleAddToCart = (index) => {
    dispatch(addQuantity(index));
  };
  const handleSubtractFromCart = (index) => {
    dispatch(subtractQuantity(index));
  };
  const handleDeleteItemFromCart = (index) => {
    dispatch(deleteQuantity(index));
  };

  const total = products
    .map((product) => product.quantity * product.cost)
    .reduce((el, acc) => el + acc, 0);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Checkout Total: ${total}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          paddingBottom: "40px",
        }}
      >
        {products.map((product, idx) => {
          return product.quantity ? (
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
                // margin: "20px",
                gap: 10,
              }}
            >
              {product.name}: ${product.cost * product.quantity}
              <img
                src={product.img}
                style={{ width: "100px", height: "100px" }}
              ></img>
              <div style={{ display: "flex", gap: 10 }}>
                <div
                  style={{
                    border: "1px solid black",
                    borderRadius: "4px",
                    padding: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSubtractFromCart(idx)}
                >
                  <i class="fas fa-minus"></i>
                </div>
                <div
                  style={{
                    padding: "4px",
                  }}
                >
                  {product.quantity}
                </div>
                <div
                  style={{
                    border: "1px solid black",
                    borderRadius: "4px",
                    padding: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleAddToCart(idx)}
                >
                  <i class="fas fa-plus"></i>
                </div>
              </div>
              <button onClick={() => handleDeleteItemFromCart(idx)}>
                Delete
              </button>
            </div>
          ) : null;
        })}
      </div>
      <Link
        to="/products"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          width: "100px",
          height: "30px",
          fontSize: "10px",
          background: hoverContinueShopping ? "black" : "transparent",
          color: hoverContinueShopping ? "white" : "black",
          textDecoration: "none",
          border: "1px solid black",
          borderRadius: "4px",
          transition: "all .3s ease",
        }}
        onMouseEnter={() => setHoverContinueShopping(true)}
        onMouseLeave={() => setHoverContinueShopping(false)}
      >
        Continue Shopping
      </Link>
      <div>
        {total > 0 && (
          <button
            onClick={() => {
              alert("Feature Comming Soon!");
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              width: "100px",
              height: "30px",
              fontSize: "10px",
              background: hoverCheckout ? "black" : "transparent",
              color: hoverCheckout ? "white" : "black",
              textDecoration: "none",
              border: "1px solid black",
              borderRadius: "4px",
              transition: "all .3s ease",
              marginTop: "20px",
            }}
            onMouseEnter={() => setHoverCheckout(true)}
            onMouseLeave={() => setHoverCheckout(false)}
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}
