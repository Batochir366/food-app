import { UserModel } from "../model/user.js";

export const createUser = async (req, res) => {
  const { email, password, phoneNumber, address, isVerified } = req.body;
  try {
    const User = await UserModel.create({
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: address,
      isVerified: isVerified,
    });
    return res
      .status(200)
      .send({
        success: true,
        user: User,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const getUsers = async (_, res) => {
  try {
    const users = await UserModel.find();
    return res
      .status(200)
      .send({
        success: true,
        users: users,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        users: user,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
