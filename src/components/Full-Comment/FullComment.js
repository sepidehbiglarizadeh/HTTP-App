import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./FullComment.module.css";

const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  let commentDetail= <p>select a comment</p>

  if(commentId) commentDetail= <p>loading...</p>

  if(comment) {
    commentDetail= (
    <div className={styles.fullComment}>
    <p>{comment.name}</p>
    <p>{comment.email}</p>
    <p>{comment.body}</p>
  </div>
  );
  }

  return commentDetail;
};

export default FullComment;
