import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    // console.log(postMessages, "postMessagespostMessages");
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Post Found with this ID");

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Post Found with this ID");

  await PostMessage.findByIdAndRemove(_id);

  res.json({ message: "Post Deleted successfully" });
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!req?.userId) return res.json({ message: "unAuthenticated" });

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Post Found with this ID");

  const post = await PostMessage.findById(_id);
  const index = post.likes.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    // { likeCount: +post.likeCount + 1 },
    post,
    {
      new: true,
    }
  );

  res.json(updatedPost);
};
