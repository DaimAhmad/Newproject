import { useContext } from "react";
import { Context } from "./Context";
import Card from 'react-bootstrap/Card';
import Navigation from "./navbar";


function Cart(){
    const { cartItems }=useContext(Context);
    return(
<> 
      <Navigation />
      <div style={{ display: 'flex', gap: '4rem', justifyContent: 'center' }}>
          {cartItems.map((product) => (
            <Card  className="mb-3" style={{ width: '18rem', marginTop: '5rem', textAlign: 'center' }}>
              <img src={product.Image} alt={product.Name} style={{ height: '100%' }} />
              <Card.Body>
                <Card.Title>{product.Name}</Card.Title>
                <Card.Text>
                  <p>Price: ${product.Price}</p>
                  <p>Brand: {product.Brand}</p>
                </Card.Text>
                <button style={{ backgroundColor: '#6CB4EE', borderRadius: '20px' }}>BUY</button>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* <div style={{display:"flex",justifyContent:"center",marginTop:"2rem"}}> <h3> NEW ARRIVEL</h3>    </div>

<div style={{ display: "flex", gap: "4rem", justifyContent: "center" }}>
  {Addtocart.map((Top, index) => (
    <Card key={index} className="mb-3" style={{ width: "18rem", marginTop: "5rem", textAlign: "center" }}>
      <img src={Top.Image} style={{ height: "100%" }} />
      <Card.Body>
        <Card.Title>{Top.Name}</Card.Title>
        <Card.Text>
          <p>Price: ${Top.Price}</p>
          <p>Brand: {Top.Brand}</p>
        </Card.Text>
        <button style={{backgroundColor:"#6CB4EE",borderRadius:"20px" }}>Buy</button>
        </Card.Body>
    </Card>
  ))}
</div>

<div style={{display:"flex",justifyContent:"center",marginTop:"3rem"}}> <h3> FOR MEN</h3>    </div>

<div style={{ display: "flex", gap: "4rem", justifyContent: "center" }}>
  {Addtocart.map((Men, index) => (
    <Card key={index} className="mb-3" style={{ width: "18rem", marginTop: "5rem", textAlign: "center" }}>
      <img src={Men.Image} style={{ height: "100%" }} />
      <Card.Body>
        <Card.Title>{Men.Name}</Card.Title>
        <Card.Text>
          <p>Price: ${Men.Price}</p>
          <p>Brand: {Men.Brand}</p>
        </Card.Text>
        <button style={{backgroundColor:"#6CB4EE", borderRadius:"20px"}}>Buy</button>
        </Card.Body>
    </Card>
  ))}
</div>

<div style={{display:"flex",justifyContent:"center",marginTop:"2rem"}}> <h3> FOR WOMEN</h3>    </div>

<div style={{ display: "flex", gap: "4rem", justifyContent: "center" }}>
  {Addtocart.map((women, index) => (
    <Card key={index} className="mb-3" style={{ width: "18rem", marginTop: "5rem", textAlign: "center" }}>
      <img src={women.Image} style={{ height: "100%" }} />
      <Card.Body>
        <Card.Title>{women.Name}</Card.Title>
        <Card.Text>
          <p>Price: ${women.Price}</p>
          <p>Brand: {women.Brand}</p>
        </Card.Text>
        <button style={{backgroundColor:"#6CB4EE", borderRadius:"20px"}}>Buy</button>
        </Card.Body>
    </Card>
  ))} */}
{/* </div> */}
</>
    );
}
export default Cart;