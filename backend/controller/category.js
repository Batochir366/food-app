import { categoryModel } from "../model/category.js";

export const createCategory = async (req, res) => {
  const { Name } = req.body;
  try {
    const category = await categoryModel.create({
      Name: Name,
    });
    return res
      .status(200)
      .send({
        success: true,
        category: category,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        error: error,
      })
      .end();
  }
};

export const getCategory = async (_, res) => {
  try {
    const category = await categoryModel.find();
    return res
      .status(200)
      .send({
        success: true,
        category: category,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        error: error,
      })
      .end();
  }
};
