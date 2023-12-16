import img18 from "../Images/about.avif";
import img19 from "../Images/about1.jpg";
import Navigation from "./navbar";
function About() {
    return (
        <div>
            <Navigation />
            <div className="container-fluid" style={{ justifyContent: "center", display: "flex", alignItems: "center", flexDirection: "column" }}>
                <div style={{ width: "80%", height: "400px", position: "relative", marginTop: "10vh" }}>
                    <img src={img18} style={{ width: "100%", height: "25rem", borderRadius: "2%" }}>
                    </img>
                    <div style={{ position: "absolute", left: "0", bottom: "0" }}>
                        <h2 id="1" style={{
                            color: "black", background: "white", padding: "20px", marginLeft: "-4px", marginBottom: "-4px",
                            borderRadius: "0% 7% 0% 0%", fontWeight: "bold", fontSize: "50px"
                        }}>
                            ABOUT US
                        </h2>
                    </div>
                    <div style={{ marginTop: "40px", width: "50%", marginLeft: "350px", textAlign: "center", }}>

                        <p>
                            MystiScents is a leading fragrance and beauty retailer based in Pakistan. We are dedicated to providing an exquisite range of fragrances and beauty products to our valued customers.

                            As part of our commitment to quality and excellence, MystiScents is proud to be a member of AS Watson Group, one of the world's largest international health and beauty retailers. AS Watson Group operates a vast network of over 16,000 stores across 28 markets, with more than 130,000 employees worldwide.
                        </p>
                        <p>
                            In the fiscal year 2022, AS Watson Group achieved an impressive revenue of US$22 billion. Our dedication to serving our customers is further strengthened by our O+O (Offline plus Online) technology-enabled platforms, which connect us to over 5.5 billion shoppers annually.

                        </p>
                    </div>

                </div>
            </div>
            <div className="container" style={{ width: "100vw", marginTop: "470px", display: "flex" }}>
                <div style={{ width: "50%", padding: "30px", height: "60vh", borderRadius: "5px", border: "2px solid #f8f7f5" }}>
                    <h2> OUR HISTORY</h2>
                    Founded in 1992, The Perfume Shop set out with the simple idea of making luxury perfume brands accessible to everyone at an affordable price. With the first store openings in Birmingham, Belfast & Milton Keynes, The Perfume Shop developed a genuine passion for delighting customers with expert perfume knowledge and the highest customer service standards which remain at the forefront of everything the brand stands for today. In 2005 The Perfume Shop was acquired by the world's largest international health and beauty retailer AS Watson - operating over 16,300 stores in 28 markets. Find out more about our parent company.
                </div>
                <div style={{ width: "50%", marginLeft: "10px", height: "60vh",  }}>
                    <img src={img19} style={{ height: "60vh" }}>
                    </img>

                </div>
            </div>
            <div style={{  marginTop: "100px", width: "100vw",  height:"30vh" }}>
                <h2 style={{ marginLeft: "40%" }}>
                    OUR MISSION
                </h2>
                <h2 id="4" style={{ fontSize: "25px", textAlign: "center", fontWeight: "lighter", }}>
                    “To share our genuine passion for perfume  & people and offer the most knowledgeable <br></br> fragrance expertise on the high street.”
                </h2>
            </div>
            <div style={{backgroundColor:"rgb(59 130 246 / 0.5)"}}>
            <h2 style={{ marginLeft: "40%" , marginTop:"25px"}}>
                    WHY SHOP WITH US?
                </h2>
             <ul style={{marginLeft:"30px", textDecoration:"none"}}>
                <li>
                We offer 100% genuine and authentic fragrances and beauty products. You can shop with confidence, knowing that you're getting the real deal.
                </li>
                <li>
                Explore our vast collection of designer fragrances, classic scents, and beauty essentials. We offer a wide range of options to cater to your unique preferences and needs.
                </li>
                <li>
                Our offerings are curated to embrace and celebrate the diverse and rich cultural heritage of Pakistan. We bring you products that resonate with the essence of our nation.
                </li>
                <li>
                Our knowledgeable team is here to assist you. Whether you're looking for your signature scent or need skincare advice, we provide expert guidance to ensure you make the right choice
                </li>
                <li>
                We believe in giving back to the local communities. By shopping with us, you contribute to supporting local artisans and fostering economic growth.
                </li>
             </ul>

            </div>




        </div>
    );
}
export default About;