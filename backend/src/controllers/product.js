import { data } from "../utils/data.js";


export const getproducts = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      products: data,
    });
  } catch (error) {
    console.error("Get Products Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};