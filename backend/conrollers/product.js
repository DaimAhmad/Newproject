import MystiscentsModel from "../models/data.js";


export const addProdct = async(req , res) =>{
    const{name,price,category,brand}= req.body;
    try{
        const newProduct = new MystiscentsModel({
            name,
            category,
            price,
            brand,
            pic:req.file.path,
        });
        const savedProduct = await newProduct.save();
        console.log(savedProduct);
        res.json({Response:true, message:'Product Added Successfully'});
        console.log("Product Added Succesfully");
    }
    catch (error){
console.error(error);
    }
};

export const getProduct = async (req , res) =>{
    try{
        const productData = await MystiscentsModel.find();
        res.json(productData);
        console.log(productData);
    }catch(error){
        console.log("Not found any data");
}
}


// Controller
export const deleteProduct = async (req, res) => {
    try {
      const { productId } = req.params;
      console.log("Deleting product with ID:", productId);
      await MystiscentsModel.findByIdAndDelete(productId);
      res.json({ message: 'Delete Successfully' });
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
// Controller
export const updateProduct = async (req, res) => {
  console.log("Request Body:", req.body); 
    const { productId } = req.params;
    const { name, category, price, brand } = req.body;
    try {
      const updatedProduct = await MystiscentsModel.findByIdAndUpdate(
        productId,
        { name, category, price, brand },
        { new: true }
      );
      if (updatedProduct) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  export const getProductByCategory = async (req, res) => {
    const { category } = req.body;

    console.log(category);

    try {
      const productCategory = await MystiscentsModel.find({category});
      console.log(productCategory);
      res.json(productCategory);
    } catch (error) {
      console.log("Not found any data", error);
    }
  };