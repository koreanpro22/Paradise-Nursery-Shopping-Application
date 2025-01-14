// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router";
import { useState } from "react";

export default function Landing() {
  // const navigate = useNavigate();
  // const handleRedirect = () => {
  //     navigate('/products')
  // }
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // width: "80%",
        margin: "20px 175px",
      }}
    >
      <h1 style={{ fontSize: "48px" }}>Green Haven</h1>
      <p style={{ fontSize: "24px" }}>
        Welcome to Green Haven, your one-stop online shop for all things plants!
        Whether you're a seasoned plant enthusiast or just starting your green
        journey, we offer a carefully curated selection of lush indoor plants,
        vibrant outdoor greenery, and stylish planters to bring life to any
        space. Our mission is to make plant care simple and rewarding, with
        expert tips, detailed guides, and high-quality products delivered
        straight to your door. Explore our collection and let us help you create
        a greener, more beautiful world—one plant at a time!
      </p>
      {/* <button onClick={handleRedirect} style={{width: "140px", height: "50px", fontSize: "20px", cursor: "pointer"}}>Get Started</button> */}
      <Link
        to="/products"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "140px",
          height: "50px",
          fontSize: "20px",
          background: hover ? "black" : "transparent",
          color: hover ? "white" : "black",
          textDecoration: "none",
          border: "1px solid black",
          borderRadius: "4px",
          transition: "all .3s ease",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Get Started
      </Link>
    </div>
  );
}
