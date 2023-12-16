
import img22 from "../Images/Men1.avif";
import Card from 'react-bootstrap/Card';
import img23 from '../Images/Men2.avif';
import Footer from "./footer";
import Navigation from "./navbar";
import { useEffect, useState } from "react";
import { getDataByCategory } from "../Services/api";

function Men() {
  const [mendata, setmendata] = useState([]);

  useEffect(() => {
    getMendetails();
  }, []);

  const getMendetails = async () => {
    const Mendetails = await getDataByCategory({ category: 'Men' });
    setmendata(Mendetails.data);
  };

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  return (
    <div>
      <Navigation />

      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ margin: '60px 50px 0px 0px', width: '35%' }}>
          <h1
            style={{
              fontWeight: '500px',
              fontSize: '48px',
              lineHeight: '54px',
              textTransform: 'uppercase',
              padding: '0px 30px',
              marginBottom: '-80px',
            }}
          >
            PERFUMES FOR MEN
          </h1>
        </div>
        <div style={{ margin: '60px 0px 0px 0px', width: '60%' }}>
          <p style={{ textAlign: 'left', marginBottom: '10px' }}>
            <span style={{ fontSize: '14px', lineHeight: '18px' }}>
              Like an accessory or fashion piece, each fragrance allows you to emphasize your personality or reveal a hidden facet of it. Perfect examples: the magnetic notes of Musc Ravageur or the striking impact of Uncut Gem, creations that guarantee a unique fragrant trail, an olfactory je ne sais quoi that makes you irresistible … and unforgettable.
            </span>
          </p>
        </div>
      </div>
      <div style={{ marginTop: '120px' }}>
        <img src={img22} style={{ width: '90%', marginLeft: '90px', height: '600px' }} alt="Men Perfumes" />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {chunkArray(mendata, 4).map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', gap: '4rem', justifyContent: 'center' }}>
            {row.map((product, index) => (
              <Card key={index} className="mb-3" style={{ width: '18rem', marginTop: '5rem', textAlign: 'center' }}>
                <img src={product.pic} style={{ height: '100%' }} alt={`Product ${index + 1}`} />
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
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Men;
