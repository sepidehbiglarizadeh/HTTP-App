import http from "../../services/httpServices";
import { useEffect, useState } from "react";
import styles from "./FullComment.module.css";

const FullComment = ({ commentId, setComemnts, setSelectedId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      http
        .get(`/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const deleteCommentHandler = async () => {
    try {
      await http.delete(`/comments/${commentId}`);
      const { data } = await http.get("/comments");
      setComemnts(data);
      setComment(null);
      setSelectedId(null);
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
