import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { getdetails, deletproductById, updateProduct } from "../../Services/api";

function ViewForm() {
  const [productdetail, setproductdetails] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    brand: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    getProductdetail();
  }, []);

  const getProductdetail = async () => {
    try {
      const result = await getdetails();
      setproductdetails(result.data);
    } catch (error) {
      console.log("Error ", error);
    }
  };

  const deletProduct = async (id) => {
    try {
      await deletproductById(id);
      const updatedProducts = productdetail.filter((product) => product._id !== id);
      setproductdetails(updatedProducts);
    } catch (error) {
      console.log("Error deleting product", error);
    }
  };

  const handleUpdateClick = (id) => {
    setSelectedProductId(id);
    const selectedProduct = productdetail.find((product) => product._id === id);
    setUpdatedProduct({
      name: selectedProduct.name,
      brand: selectedProduct.brand,
      price: selectedProduct.price,
      category:selectedProduct.category,
    });
  };

  const handleUpdateProduct = async () => {
    try {
      await updateProduct(selectedProductId, updatedProduct);
      getProductdetail(); // Refresh the product details after the update
      setSelectedProductId(null); // Reset selectedProductId after updating
      setUpdatedProduct({ name: "", brand: "", price: "",category:"" }); // Reset updatedProduct
    } catch (error) {
      console.log("Error updating product", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
     
          <th>Image</th>
          <th>Perfume Name</th>
          <th>Perfume Description</th>
          <th>Price</th>
          
          <th>category</th>
        </tr>
      </thead>
      <tbody>
        {productdetail.map((details, index) => (
          <tr key={index}>
            <td>
              <img style={{ width: "4rem", height: "5rem" }} src={`http://localhost:4999/${details.pic}`} alt="" />
            </td>
            <td>{details.name}</td>
            <td>{details.brand}</td>
            <td>{details.price}</td>
            <td>{details.category}</td>
            <td>
              <button onClick={() => deletProduct(details._id)} style={{marginLeft:"10px"}}>Delete</button>
              <button onClick={() => handleUpdateClick(details._id) }>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
      {selectedProductId && (
        <tfoot>
          <tr>
            <td colSpan="5">
              <h2>Update Product</h2>
              <form>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={updatedProduct.name}
                  onChange={handleInputChange}
                />
                <br />

                <label>Brand:</label>
                <input
                  type="text"
                  name="brand"
                  value={updatedProduct.brand}
                  onChange={handleInputChange}
                />
                <br />

                <label>Price:</label>
                <input
                  type="text"
                  name="price"
                  value={updatedProduct.price}
                  onChange={handleInputChange}
                />
                <br />
                <label>category:</label>
                <input
                  type="text"
                  name="category"
                  value={updatedProduct.category}
                  onChange={handleInputChange}
                />

                <button type="button" onClick={handleUpdateProduct}>
                  Update Product
                </button>
              </form>
            </td>
          </tr>
        </tfoot>
      )}
    </Table>
  );
}

export default ViewForm;
