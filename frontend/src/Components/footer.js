import "../Assessts/Footer.css";
import img7 from "../Images/paypal.png";
import img8 from "..//Images/mastercard.jpg";
import img9 from "../Images/easypasa.jpg";
import img10 from "../Images/facebook.png";
import img11 from "../Images/github.png";
import img12 from "..//Images/insta.jpeg";
import img13 from "..//Images/linkdin.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div class="body ">
      <div class="shop">
        <ul>
          <h4>shop</h4>
          <div> Best Seller</div>
          <div> For Women</div>
          <div> For Men</div>
          <div> New Arrivel</div>
          <div> celebrity Perfume</div>
          <div> Testers</div>
          <div> Travel Size Mini's</div>
          <div> Perfume Samples</div>
        </ul>
      </div>
      <div class="Moreways">
        <ul>
          <h4>More</h4>
          <div>Deodorant</div>
          <div>After Shave</div>
          <div>Shower Gel</div>
          <div>Body Cream</div>
          <div>Pure Perfume</div>
          <div>Body Lotions</div>
          <div>Gift Sets</div>
          <div>Top 100 Fragrances</div>
        </ul>
      </div>
      <div class="help">
        <ul>
          <h4>Help</h4>
          <div>Order Status</div>
          <div>Shipping Info</div>
          <div>Return Info</div>
          <div>Contact Info</div>
          <div>Wholesale Information</div>
          <div>Privacy</div>
          <div>Earn Rewards</div>
          <div>Join Coupon List</div>
        </ul>
      </div>
      <div class="company">
        <ul>
          <h4>Company</h4>
        <div>Contact Info</div>
          <div>About Us</div>
          <Link to="/Faqs" style={{ color: 'inherit', textDecoration: 'none' }}>
        FAQS
      </Link>

          <div>Blog</div>
          <Link to="/Contact" style={{ color: 'inherit', textDecoration: 'none' }}>
        ContactUs
      </Link>
          <div>Careers</div>
        </ul>
      </div>
      <div class="intouch">
        <ul>
          <h4>Get In Touch</h4>
          <div> &#9742; +923366917472</div>
          <div>&#9993; Email</div>
        </ul>
      </div>
      <div class="cards">
        <ul>
          <h4>We Accepts</h4>
          <div>
            {" "}
            <img
              src={img7}
              style={{
                width: "10%",
                height: "5vh",
                borderRadius: "50%",
                marginTop: "-10px",
                margin: "5px",
              }}
            ></img>{" "}
            paypal
          </div>
          <div>
            {" "}
            <img
              src={img8}
              style={{
                width: "9%",
                height: "5vh",
                borderRadius: "50%",
                margin: "5px",
              }}
            ></img>{" "}
            master card
          </div>
          <div>
            {" "}
            <img
              src={img9}
              style={{
                width: "9%",
                height: "5vh",
                borderRadius: "50%",
                margin: "5px",
              }}
            ></img>{" "}
            easypasa
          </div>
        </ul>
      </div>

      <div class="follow">
        <ul>
          <h4>Follow Us</h4>
          <a
            href="https://www.facebook.com/daim.ahmad.7967"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div>
              {" "}
              <img
                src={img10}
                style={{
                  width: "9%",
                  height: "4vh",
                  borderRadius: "50%",
                  margin: "7px",
                }}
              ></img>{" "}
              Facebook
            </div>
          </a>

          <a
            href="https://github.com/DaimAhmad"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div>
              {" "}
              <img
                src={img11}
                style={{
                  width: "9%",
                  height: "4vh",
                  borderRadius: "50%",
                  margin: "7px",
                }}
              ></img>{" "}
              GitHub
            </div>
          </a>
          <a
            href="https://www.instagram.com/daimahmad1/?igshid=NzZlODBkYWE4Ng%3D%3D"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div>
              {" "}
              <img
                src={img12}
                style={{
                  width: "9%",
                  height: "4vh",
                  borderRadius: "50%",
                  margin: "7px",
                }}
              ></img>{" "}
              instagram
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/status-box-3b042a236/"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div>
              {" "}
              <img
                src={img13}
                style={{
                  width: "9%",
                  height: "4vh",
                  borderRadius: "50%",
                  margin: "7px",
                 
                }}
              ></img>{" "}
              linkdin
            </div>
          </a>
        </ul>
      </div>
      <div class="discount">
    
        <div><h3>First to know
          about our sales and discounts</h3></div>
        <br></br>
        <div>Our email subscribers get early access to new
          launches, promotions and more</div>
        <div style={{ width:"100%",height:"30vh", display:"flex", flexDirection:"column"}}>
          <input type ="text" style = {{width:"40%", marginLeft:"48vh", marginTop:"20px"}} placeholder="Email"></input>
          <button style={{ backgroundColor: ' lightblue', color: 'white',  width:"10%" ,marginLeft:"72vh",}}>Submit</button>

        </div>
      </div>








    </div>
  );
}
export default Footer;
