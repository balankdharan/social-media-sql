import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getLikes = (req, res) => {
  const likeQuery = "SELECT userId FROM likes WHERE postId = ?";

  db.query(likeQuery, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json({ err });
    return res.status(200).json(data.map((like) => like.userId));
  });
};

export const deleteLike = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in ! ");

  jwt.verify(token, "secretKey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const deleteQuery = "DELETE FROM likes WHERE `userId` = ? AND `postId`= ? ";

    db.query(deleteQuery, [userInfo.id, req.query.postId], (err, data) => {
      if (err) return res.status(500).json({ err });
      return res.status(200).json("like has been deleted");
    });
  });
};

export const addLike = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in ! ");

  jwt.verify(token, "secretKey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const likeQuery = "INSERT INTO likes (`userId`,`postId`) VALUES (?)";
    const values = [userInfo.id, req.body.postId];
    db.query(likeQuery, [values], (err, data) => {
      if (err) return res.status(500).json({ err });
      return res.status(200).json("Likes has created");
    });
  });
};
