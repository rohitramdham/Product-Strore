import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
import {
  deleteProduct,
  getProducts,
  postProduct,
  updateProduct,
} from "../controller/product.controller.js";
const router = express.Router();

router.post("/", postProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.get("/", getProducts);

export default router;
