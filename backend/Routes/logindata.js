import express from "express";
import { createlogindata, deletelogin, getUserLogin, getlogin, updatelogin } from "../conrollers/logindata.js";



const router = express.Router();

router.post('/', createlogindata);
router.get('/',getlogin);

router.delete("/:id",deletelogin);

router.put("/:id", updatelogin);





export default router;