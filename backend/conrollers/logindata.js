import loginStructureModel from "../models/logindata.js";
import jwt from 'jsonwebtoken';


export const createlogindata= async(req, res)=>{
    const {Name, Email,Password, Confirmpass }=req.body;
    console.log(Email, Name);
     const newLogin = new loginStructureModel({
        Name,
        Email,
        Password,
        Confirmpass,

     });

try {
         await newLogin.save();
         res.json(newLogin);
     } catch (error) {
         console.log("Not Saved...");
}
};

export const getlogin=async(req , res)=>{

    try{
        const productdata=await loginStructureModel.find();
         res.json(productdata);
         console.log(productdata)
    }
    catch (error){
    console.log("Not found in Data")
    
    }
    }





    export const deletelogin=async(req , res)=>{
        try{
            const {id} = req.params;
            console.log("delete products with id",id);
            await loginStructureModel.findByIdAndDelete(id);
            res.json({message:"delete successfully"});
            res.status(500).json({error:"internal server error"})
    
        }
        catch (error){
            console.error("error delete products",error);
        }
    }
    



    export const updatelogin = async (req, res) => {
        const { id } = req.params;
        const { Name } = req.body;
        try {
          const updatedlogin = await loginStructureModel.findByIdAndUpdate(
            id,
            { Name },
            { new: true }
          );
          if (updatedlogin) {
            res.sendStatus(204);
          } else {
            res.status(404).json({ error: 'login not found' });
          }
        } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
        }
      };

  

      export const getUserLogin = async (req, res) => {
        const { Email, Password } = req.body;
        console.log(Password);
        try {
          const response = await loginStructureModel.findOne({ Email });
          console.log(response);
          if (response && response.Password === Password) {
            const { Name, Email } = response;
      
            // Generate JWT token
            const token = jwt.sign({ Email }, 'iamdaimahmadandiamwebdeveloper', { expiresIn: '1h' });
            console.log(token);

            if(response.Email === 'admin@gmail.com' || response.Email === 'daimahmad58@gmail.com') {
              const email = response.Email;
              res.json({ message: true, email, token });  
            } else {
              res.json({ message: true, user: { Name, Email }, token });
            }
          } else {
            console.log('Cannot find customer data');
            res.json({ message: false, error: 'Invalid credentials' });
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: false, error: 'Internal server error' });
        }
      }