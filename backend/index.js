import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from "body-parser"
import product from './Routes/Addproduct.js';
import loginData from './Routes/logindata.js';
import getlog from './Routes/Getlogin.js';


const app = express();
const url ="mongodb+srv://daim:123@cluster0.8headnn.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true} )
.then (() => console.log ("connected to database")) ;

const PORT = 4999; 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/Form/Addform',product);
app.use('/Form/Veiwform',product);
app.use('/images', express.static('images'));
 

//login
app.use('/regestrationform',loginData);
app.use('/Login',getlog);

app.use('/Form/updateform',loginData);
app.use('/Men', product)














