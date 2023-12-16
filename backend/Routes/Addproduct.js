import express from "express";
import multer from "multer";
import { addProdct, deleteProduct, getProduct, getProductByCategory, updateProduct } from "../conrollers/product.js";

const router = express.Router();

const Storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './images/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: Storage }); // Fix the case here

router.post('/', upload.single('pic'), addProdct);
router.get('/', getProduct);
router.delete("/:productId", deleteProduct);
router.put("/:productId",updateProduct );
router.post('/category', getProductByCategory)
export default router;
