import mongoose from "mongoose";
const ProductsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 200,
  },
  desc: {
    type: String,
    required: true,
   
  },
  productImg: {
    type: [String],
    required: true,
  },
  prices: {
    type: [
      {
        text: { type: String, required: true },
        amount: { type: Number, required: true }
      }
    ],
    required: true,
  },

}, { timestamps:true });
export default mongoose.models.Product || mongoose.model("Product", ProductsSchema);
