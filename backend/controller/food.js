import { foodModel } from "../model/food.js";

export const createFood = async (req, res) => {
  const { foodName, price, image, ingredients, category } = req.body;
  try {
    const Food = await foodModel.create({
      foodName: foodName,
      price: price,
      image: image,
      ingredients: ingredients,
      category: category,
    });
    return res
      .status(200)
      .send({
        success: true,
        Food: Food,
      })
      .end();
  } catch (error) {
    console.log(error, "error");
    return res
      .status(400)
      .send({
        success: false,
        error: error,
      })
      .end();
  }
};

export const getFood = async (_, res) => {
  try {
    const Food = await foodModel.find().populate("category");
    return res
      .status(200)
      .send({
        success: true,
        Food: Food,
      })
      .end();
  } catch (error) {
    console.log(error, "error");
    return res
      .status(400)
      .send({
        success: false,
        error: error,
      })
      .end();
  }
};

export const getFoodById = async (req, res) => {
  const { id } = req.params;
  try {
    const Food = await foodModel
      .find({
        category: id,
      })
      .populate("category");
    return res
      .status(200)
      .send({
        success: true,
        Food: Food,
      })
      .end();
  } catch (error) {
    console.log(error, "error");
    return res
      .status(400)
      .send({
        success: false,
        error: error,
      })
      .end();
  }
};
