import PropTypes from "prop-types";
import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { PostList } from "../store/post-list-store";
import { FaRegHeart } from "react-icons/fa";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post">
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle  delete-container"
          onClick={() => deletePost(post.id)}>
          <TiDelete className="delete-button" />
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary hashtag" key={tag}>
            {tag}
          </span>
        ))}
        <div
          className="alert alert-success reactions"
          role="alert"
          style={{ marginTop: "2rem" }}>
          <FaRegHeart className="like-icon" />
          {post.reactions} Reactions
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    reactions: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Post;
