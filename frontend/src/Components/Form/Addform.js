import '../../Assessts/addform.css';
import { adddetails } from '../../Services/api';
import { useRef, useEffect, useState } from 'react';
import Admin from '../admin';


function Addform(){
const [detail, setdetails] = useState({
  category:"",
  name:"",
  price:"",
  brand:"",
  pic: null,
})
const {name , price, category, brand, pic} =detail;

const handleChange =(event) =>{
  setdetails({...detail,[event.target.name]: event.target.value});
};

const handleImagechange =(event)=>
{
  setdetails({...detail,[event.target.name]: event.target.files[0]});
}

const handleSubmit = async(event)=>{
  event.preventDefault();
try{
  const formdata= new FormData();
  formdata.append('category',category);
  formdata.append('name',name);
  formdata.append('price',price);
  formdata.append('brand',brand);
  formdata.append('pic',pic);

  await  adddetails(formdata);
  alert("data is saved");
}
catch (error){
console.log("error")
}

}
    return(
<div>
{/* <Admin/> */}
<div id ="Mn01"/>
<h2>Add Product</h2>
<form>
  <div>
    
    <label htmlFor="category">category </label>
     <input     
    name="category"
    type='text'
    id='category'
    value={category}
    onChange={handleChange}
    required
  
    /> 
  </div>
  <div>
  <label htmlFor="name">Name </label>
    <textarea
    name="name"
    type='text'
    id='name'
    value={name}
    onChange={handleChange}
    required
    ></textarea>     
  </div>

<div>
  
<label htmlFor="price">Price </label>
    <input     
    name="price"
    type='number'
    id='price'
    value={price}
    onChange={handleChange}
    required
  
    /> 
</div>

<div>
    
<label htmlFor="brand">Brand </label>
    <input     
    name="brand"
    type='text'
    id='brand'
    value={brand}
    onChange={handleChange}
    required
  
    /> 
</div>


<div>
    
<label htmlFor="pic">Picture </label>
    <input     
    name="pic"
    type='file'
id='image'
    onChange={handleImagechange}
    multiple
    required
    /> 
</div>
    <button className='btnadd' type='submit' onClick={handleSubmit}>submit</button>
</form>
</div>
    );
}
export default Addform;