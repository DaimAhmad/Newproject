import "../../Assessts/updateform.css";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { deleteCustomerbyid, getlogin, updateloginById } from '../../Services/api';
function Update() {
    const [logindata, setlogindata] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedlogin, setSelectedlogin] = useState({});
    const [updatedlogin, setUpdatedlogin] = useState({
      name: "",
      price: "",
      category: "",
    
    });
  
    useEffect(() => {
      getCustomerDetail();
    },[]);
  
    const getCustomerDetail = async () => {
      try {
        const result = await getlogin();
        console.log(result.data);
        setlogindata(result.data);
      } catch (error) {
        console.log("Error ", error);
      }
    };
  
    const handleDeleteCustomer = async (id) => {
      try {
        await deleteCustomerbyid(id);
        const updated = logindata.filter((product) => product._id !== id);
        setlogindata(updated);
      } catch (error) {
        console.log("Error in deleting login", error);
      }
    };
  
    const handleShow = (product) => {
      setSelectedlogin(product);
      setUpdatedlogin({
        name: product.name,
        price: product.price,
        category: product.category,

        // Set other fields as needed
      });
      setShowModal(true);
    };
  
    const handleClose = () => {
      setShowModal(false);
    };
  
    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
        const id = selectedlogin._id;
        const updatedProduct = await updateloginById(id, updatedlogin);
        console.log("Product updated:", updatedProduct);
        setShowModal(false);
        // Optionally, you can fetch updated data after a successful update
        getCustomerDetail();
      } catch (error) {
        console.log("Error in updating product", error);
      }
    };
    return (

        <>
      <Table striped bordered hover>
        <thead>
          <th>Name</th>
          
         
        </thead>
        <tbody>
          {logindata.map((details, index) => (
            <tr key={index}>
              <td>{details.Name}</td>
             
              <td>
                 <button style={{marginLeft:"20px"}} onClick={() => handleDeleteCustomer(details._id)} >Delete</button>
                <button onClick={()=>handleShow(details)}>Update</button> 
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={updatedlogin.name}
                onChange={(e) => setUpdatedlogin({ ...updatedlogin, name: e.target.value })}
              />
            </Form.Group>
           
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
    );
}
export default Update;