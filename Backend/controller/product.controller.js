import Product from "../models/product.model.js";
import mongoose from "mongoose";
export const getProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.log("error in fetching products:", error.message);
    res.status(500).json({ success: false, massage: "Server Error" });
  }
};
export const postProduct = async (req, res) => {
  const product = req.body;
  if (!product || !product.name || !product.price) {
    return res.status(400).json({ message: "Please provide all project" });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("error in creating products:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product Deleted" });
  } catch (error) {
    console.log("error in deleting products:", error.message);
    res.status(404).json({ success: false, message: "Product not fount" });
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, massage: "Server Error" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: product },
      {
        new: true,
        runValidators: false,
      }
    );
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.log("error in updating  products:", error.message);
    res.status(404).json({ success: false, message: "Server Error" });
  }
};
