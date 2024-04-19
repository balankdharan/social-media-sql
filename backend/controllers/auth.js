import { db } from "../connect.js";
import bcrypt from "bcrypt";
export const login = (req, res) => {};

//register
export const register = (req, res) => {
  const userQuery = "SELECT FROM users WHERE username = ?";

  db.query(userQuery, [req.body.username], (err, data) => {
    if (err) return res.status(500).json({ err });

    if (data.length) return res.status(409).json("User Already exists");
  });
};
export const logout = (req, res) => {};
