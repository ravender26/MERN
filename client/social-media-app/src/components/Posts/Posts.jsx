import Post from "./Post/Post";
import { useSelector } from "react-redux";

// import useStyles from "./styles";

function Posts() {
  // const classes = useStyles()
  const posts = useSelector((state) => state.posts)

  console.log(posts, "postspostsposts");
  return (
    <div>
      Posts
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
