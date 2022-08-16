import axios from "axios";
import { useState } from "react";
import styles from "./NewComment.module.css";

const NewComment = ({ setComemnts }) => {
  const [comment, setComemnt] = useState({
    name: "",
    email: "",
    body: "",
  });

  const changeHandler = (e) => {
    setComemnt({ ...comment, [e.target.name]: e.target.value });
  };

  const addNewCommentHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/comments", comment);
      const { data } = await axios.get("http://localhost:3001/comments");
      setComemnts(data);
    } catch (error) {}
  };

  return (
    <form className={styles.newComment} onSubmit={addNewCommentHandler}>
      <div>
        <label>Name :</label>
        <input type="text" name="name" onChange={changeHandler} />
      </div>
      <div>
        <label>Email :</label>
        <input type="email" name="email" onChange={changeHandler} />
      </div>
      <div>
        <label>NewComment :</label>
        <textarea name="body" onChange={changeHandler}></textarea>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewComment;
