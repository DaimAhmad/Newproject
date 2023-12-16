import axios from "axios";

const url = "http://localhost:4999";

export const adddetails = async (formdata) => {
   return await axios.post(`${url}/Form/Addform`,formdata);
}

export const getdetails = async () =>{
   return await axios.get(`${url}/Form/Veiwform`);
}

export const deletproductById = async (productId) => {
   return await axios.delete(`${url}/Form/Veiwform/${productId}`);
 }
 
 export const updateProduct = async (productId ,updatedProduct) => {
   return  await axios.put(`${url}/Form/Veiwform/${productId}`, updatedProduct);
 }

// login form
 
export const addLogindata = async (login) => {
   console.log(login);
   return await axios.post(`${url}/regestrationform`, login);
 }
 export const getlogin=async ()=>{
   return await  axios.get(`${url}/Form/updateform`);
 }
 
 export const deleteCustomerbyid=async (id)=>{
   return await  axios.delete(`${url}/Form/updateform/${id}`);
 }
 
 
 export const updateloginById = async (id, updatedProduct) => {
    return await axios.put(`${url}/Form/updateform/${id}`, updatedProduct);
 }

 export const login = async (details) =>{
  return await axios.post(`${url}/Login`,details );
 }

 export const getDataByCategory = async (category) =>{
     return await axios.post(`${url}/Men/category`, category);
 }
