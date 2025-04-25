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

export const getFoodByCatId = async (req, res) => {
  const { id } = req.params;
  // const result = categoryModal.find({})
  // resut.map((category) => {
  //  await category._id
  //  return { category.name, foods}
  // })
  try {
    const Food = await foodModel.find({ category: id });
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

export const updateFood = async (req, res) => {
  const Food = req.body;
  const { FoodId } = req.params;
  try {
    const updatedFood = await foodModel.findByIdAndUpdate(FoodId, Food, {
      new: true,
    });
    return res
      .status(200)
      .send({
        success: true,
        Food: updatedFood,
        message: "food updated successfully",
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

export const deleteFood = async (req, res) => {
  const { FoodId } = req.params;
  try {
    const deleteFood = await foodModel.findByIdAndDelete(FoodId);
    return res
      .status(200)
      .send({
        success: true,
        Food: deleteFood,
        message: "food deleted successfully",
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
