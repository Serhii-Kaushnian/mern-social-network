import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import autheticate from "../middleware/authenticate.js";

const router = express.Router();

/* READ */
router.get("/", autheticate, getFeedPosts);
router.get("/:userId/posts", autheticate, getUserPosts);

/* UPDATE */
router.patch("/:id/like", autheticate, likePost);

export default router;
