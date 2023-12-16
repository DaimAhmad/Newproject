import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Footer from './footer';
import Navigation from './navbar';
import { getDataByCategory } from "../Services/api";
import img23 from '../Images/uni1.avif';

const Unisex = () => {
  const [UnisexData, setUnisexData] = useState([]);

  useEffect(() => {
    getUnisexdata();
  }, []);

  const getUnisexdata = async () => {
    try {
      const response = await getDataByCategory({ category: 'unisex' });
      setUnisexData(response.data);
    } catch (error) {
      console.log('Unisex data did not exist...', error);
    }
  };

  return (
    <div>
      <Navigation />
      <div>
        <img src={img23} style={{ width: "100%" }} alt="Unisex Perfume" />
      </div>

      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {UnisexData.map((product, index) => (
            <Card key={index} className="mb-3" style={{ width: '18rem', marginTop: '2rem', textAlign: 'center' }}>
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
      </div>

      <Footer />
    </div>
  );
}

export default Unisex;
