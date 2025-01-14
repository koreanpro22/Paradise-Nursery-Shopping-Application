import { NavLink } from "react-router";
import { useSelector }from "react-redux";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Navigation() {
  const products = useSelector((state) => state.products);
  const total = products.map((product) => product.quantity).reduce((el,acc) => el + acc, 0)
  console.log("PRODUCTS", products)
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: 10,
        width: "100vw",
        height: "100px",
        fontSize: "24px",
        // border: "solid 1px black",
        // padding: "10px"
      }}
    >
      <NavLink to="/" style={{textDecoration: "none", color: "black"}}>Home</NavLink>
      <NavLink to="products" style={{textDecoration: "none", color: "black"}}>Products</NavLink>
      <NavLink to="checkout" style={{textDecoration: "none", color: "black"}}><i className="fas fa-shopping-cart"></i> {total}</NavLink>
    </nav>
  );
}