import img14 from "../Images/women.webp";
import img15 from "../Images/Men.webp";
import img16 from "../Images/uni.webp";
import { Link } from "react-router-dom";
import Navigation from "./navbar";

function Product() {
  return (
    <>
    <Navigation />
      <div style={{ justifyContent: "center", display: "flex", alignItems: "center", flexDirection: "column" }}>
        <h1 style={{ textAlign: "center", marginTop: "30px", fontFamily: "Didot", textDecoration: "underline" }}>
          PRODUCTS
        </h1>

        <div class="male" style={{ display: "flex", height: "25rem", width: "60%", border: "2px solid black", marginTop: "70px", cursor: "pointer", justifyContent: "center"  }}>
        <Link to ='/Men'>
          <img src={img15} style={{ width: "100%" }} alt="Male Product Image"  />
          </Link>
        </div>

     
          <div className="female" style={{ display: "flex", height: "25rem", width: "60%", border: "2px solid black", marginTop: "50px", cursor: "pointer" }}>
            <Link to= '/Women'>
            <img src={img14} style={{ width: "100%" }} alt="Female Product Image" />
            </Link>
          </div>
        

        <div class="unisex" style={{ display: "flex", height: "25rem", width: "60%", border: "2px solid black", marginTop: "50px", cursor: "pointer" }}>
        <Link to= '/Unisex'>
          <img src={img16} style={{ width: "100%" }} alt="Unisex Product Image" />
           </Link>
        </div>
      </div>
    </>
  );
}

export default Product;
