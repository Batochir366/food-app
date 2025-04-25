import { UserModel } from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();
const secret_key = process.env.SECRET_KEY;
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }

    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).send({
        success: false,
        message: "email or password wrong",
      });
    }

    console.log(user, "user");

    const token = jwt.sign({ ...user }, secret_key, { expiresIn: 3600 });
    res.status(200).send({
      success: true,
      token,
    });
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
