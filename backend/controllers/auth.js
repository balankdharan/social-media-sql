import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
  const userQuery = "SELECT * FROM users WHERE username= ?";
  db.query(userQuery, [req.body.username], (err, data) => {
    if (err) return res.status(500).json({ err });
    if (data.length === 0) return res.status(404).json("User not found");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword) return res.status(400).json("Wrong credentials");

    const token = jwt.sign({ id: data[0].id }, "secretKey", {
      expiresIn: "30d",
    });
    const { password, ...others } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json(others);
  });
};

//register
export const register = (req, res) => {
  const userQuery = "SELECT * FROM users WHERE username = ?";

  db.query(userQuery, [req.body.username], (err, data) => {
    if (err) return res.status(500).json({ err });

    if (data.length) return res.status(409).json("User Already exists");
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO users (`username`, `email`, `password` ,`name`) VALUE (?)";
    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json({ err });
      return res.status(200).json("User has been created");
    });
  });
};
export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User logout");
};
