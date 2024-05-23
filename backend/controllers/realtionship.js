import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const getRelationShips = (req, res) => {
  const relationShipQuery =
    "SELECT followerUserId FROM relationships WHERE followedUserId = ?";

  db.query(relationShipQuery, [req.query.followedUserId], (err, data) => {
    if (err) return res.status(500).json({ err });
    return res
      .status(200)
      .json(data.map((relationship) => relationship.followerUserId));
  });
};
export const addRelationship = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in ! ");

  jwt.verify(token, "secretKey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const relationshipQuery =
      "INSERT INTO relationships (`followerUserId`,`followedUserId`) VALUES (?)";
    const values = [userInfo.id, req.body.userId];
    db.query(relationshipQuery, [values], (err, data) => {
      if (err) return res.status(500).json({ err });
      return res.status(200).json("Following");
    });
  });
};
export const deleteRelationship = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in ! ");

  jwt.verify(token, "secretKey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const deleteQuery =
      "DELETE FROM relationships WHERE `followerUserId` = ? AND `followedUserId`= ? ";

    db.query(deleteQuery, [userInfo.id, req.query.userId], (err, data) => {
      if (err) return res.status(500).json({ err });
      return res.status(200).json("unfollow");
    });
  });
};
