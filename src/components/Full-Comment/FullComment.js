import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./FullComment.module.css";

const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const deleteCommentHandler = () => {
    axios
      .delete(`http://localhost:3001/comments/${commentId}`)
      .then((res) => console.log(res.data))
      .catch(err=> console.log(err));
  };

  let commentDetail = <p>select a comment</p>;

  if (commentId) commentDetail = <p>loading...</p>;

  if (comment) {
    commentDetail = (
      <div className={styles.fullComment}>
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button onClick={deleteCommentHandler}>Delete</button>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;
