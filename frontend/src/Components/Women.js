import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Footer from './footer';
import Navigation from './navbar';
import { getDataByCategory } from "../Services/api";
import img20 from "../Images/Women1.avif";

function Women() {
  const [womenData, setWomenData] = useState([]);

  useEffect(() => {
    getWomendata();
  }, []);

  const getWomendata = async () => {
    try {
      const response = await getDataByCategory({ category: 'Women' });
      setWomenData(response.data);
    } catch (error) {
      console.log('Women data did not exist...', error);
    }
  };

  return (
    <div>
      <Navigation />
      <div style={{ display: "flex", width: "100%", margin: "60px 0" }}>
        <div style={{ margin: "0 50px 0 0", width: "35%" }}>
          <h1 style={{
            fontWeight: "500", fontSize: "48px", lineHeight: "54px",
            textTransform: "uppercase", padding: "0 30px", marginBottom: "-80px"
          }}>
            Women's perfume</h1>
        </div>
        <div style={{ margin: "0", width: "60%" }}>
          <p style={{ textAlign: "left", marginBottom: "10px", fontSize: "14px", lineHeight: "18px" }}>
            When you wear a fragrance, you reveal part of your personality to the world.
            The eternally sensual facets of rose (which play the starring role in Portrait of a Lady and Lipstick Rose),
            the paradoxical and tantalizing power of white flowers (Carnal Flower, Eau de Magnolia),
            or the hypnotic finery of musk (Musc Ravageur, En Passant)…
            There is a perfect fragrance for each character trait and each intention
          </p>
        </div>
      </div>

      <div style={{ marginTop: "90px" }}>
        <img src={img20} style={{ width: "90%", marginLeft: "90px", height: "600px" }} alt="Women Perfume" />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center',marginTop:"30px" }}>
        {womenData.map((product, index) => (
          <Card key={index} className="mb-3" style={{ width: '22%', textAlign: 'center' }}>
            <img src={product.pic} alt={product.name} style={{ height: '100%' }} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <p>Price: ${product.price}</p>
                <p>Brand: {product.brand}</p>
              </Card.Text>
              <button style={{ backgroundColor: '#6CB4EE', borderRadius: '20px' }}>Buy</button>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default Women;
