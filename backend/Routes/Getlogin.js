import express from "express";
import { getUserLogin } from "../conrollers/logindata.js";

const router = express.Router();



 router.post("/", getUserLogin);


export default router;
