import { foodModel } from "../model/food.js";

export const createFood = async (req, res) => {
  const { foodName, price, image, ingredients } = req.body;
  try {
    const Food = await foodModel.create({
      foodName: foodName,
      price: price,
      image: image,
      ingredients: ingredients,
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
    const Food = await foodModel.find();
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
