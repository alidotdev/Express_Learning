import PostMessage from "../models/postMessage.js";
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
    res.send("hey there")
  } catch(error) {
    res.status(404).json({message: error.message});
  }
}
export const createPosts = (req, res) => {
  res.send("Create Posts");
};
