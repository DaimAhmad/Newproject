 import Carousel from 'react-bootstrap/Carousel';
import img6 from '../Images/sl2.webp';
import img7 from '../Images/sl1.jpg';
import img8 from '../Images/sl4.webp';
import Card from 'react-bootstrap/Card';
import { useContext, useEffect, useState } from 'react';
import { Context } from './Context';
import Footer from './footer';
import Navigation from './navbar';
import { getdetails } from '../Services/api';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

function Home(){
  
  const images = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1601295452898-78a8dd904ab3?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'MENS PERFUME',
    },

    {
        imageUrl: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D',
        title: 'WOMENS PERFUME',
    },

    {
        imageUrl: 'https://images.pexels.com/photos/13875784/pexels-photo-13875784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'UNISEX PERFUME',
    },
    {
        imageUrl: 'https://images.pexels.com/photos/11711807/pexels-photo-11711807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'NEW ARRIVALS',
    },

];

  const { data2,data3,data4,handleAddtocart} = useContext(Context);

  const [productsData, setProductsData]= useState([]);

  useEffect(()=>{
    getProductsData();
  },[]);

  const getProductsData = async() =>{
    const result = await getdetails();
    setProductsData(result.data);
  }


return(
<>
<Navigation />
 <div>

 <Carousel  style={{height:"65vh"}}>
      <Carousel.Item>
        <img src={img6} style={{width:"100%" , height:"65vh"}} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img7} style={{width:"100%" , height:"65vh"}} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img8} style={{width:"100%" , height:"65vh"}}/>
      </Carousel.Item>
    </Carousel>
 </div>



<div style={{display:"flex",justifyContent:"center",marginTop:"2rem"}}> <h3> PRODUCTS CATALOG</h3>    </div>

<div>
                <Container className="cont">
                    <Row xs={1} md={4}>
                        {images.map((image, idx) => (
                            <Col key={idx}>
                                {image.title === "MENS PERFUME" ? (
                                    <Link to="/Men" style={{ textDecoration: 'none', color: 'black' }}>
                                        <Card className="hover-card" style={{ width: '80%', margin: '40px' }}>
                                            <Card.Img variant="top" src={image.imageUrl} style={{ height: '300px' }} />
                                            <Card.Body>
                                                <Card.Title style={{ textAlign: 'center', fontWeight: 'bold' }} >{image.title}</Card.Title>
                                                <Card.Text>{image.description}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                ) : image.title === "WOMENS PERFUME" ?  (
                                    
                                    <Link to='/Women' style={{ textDecoration: 'none', color: 'black' }}>
                                    <Card className="hover-card" style={{ width: '80%', margin: '40px' }}>
                                        <Card.Img variant="top" src={image.imageUrl} style={{ height: '300px' }} />
                                        <Card.Body>
                                            <Card.Title>{image.title}</Card.Title>
                                            <Card.Text>{image.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Link>
                                ): (

                                    <Link to='/unisex' style={{ textDecoration: 'none', color: 'black' }}>
                                    <Card className="hover-card" style={{ width: '80%', margin: '40px' }}>
                                        <Card.Img variant="top" src={image.imageUrl} style={{ height: '300px' }} />
                                        <Card.Body>
                                            <Card.Title>{image.title}</Card.Title>
                                            <Card.Text>{image.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Link>
                                )
                                
                                
                                
                                }
                            </Col>
                        ))}
                    </Row>
                </Container>



            </div>





<Footer />

</>
);

} export default Home;