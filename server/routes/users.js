import express from "express";
import { getUser, getUserFriends, addRemoveFriend } from "../controllers/users.js";
import autheticate from "../middleware/authenticate.js";

const router = express.Router();

/* READ */
router.get("/:id", autheticate, getUser);
router.get("/:id/friends", autheticate, getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", autheticate, addRemoveFriend);

export default router;
