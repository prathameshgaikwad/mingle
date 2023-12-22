import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";
import NoPostsAvailable from "./NoPostsAvailable";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <LoadingSpinner />}
      <div className="post-list">
        {!fetching && postList.length === 0 && <NoPostsAvailable />}
        {!fetching &&
          postList.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
};

export default PostList;
