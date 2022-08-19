import getOneComment from "../../../services/getOneCommentService";
import deleteComment from "../../../services/deleteCommentService";
import { useEffect, useState } from "react";
import styles from "./FullComment.module.css";

const FullComment = ({ match, history }) => {
  const [comment, setComment] = useState(null);
  const commentId = match.params.id;

  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const deleteCommentHandler = async () => {
    try {
      await deleteComment(commentId);
      history.push("/");
      setComment(null);
    } catch (error) {}
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
