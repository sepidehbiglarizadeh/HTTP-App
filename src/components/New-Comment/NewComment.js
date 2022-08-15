import styles from "./NewComment.module.css";

const NewComment = () => {
  return (
      <form className={styles.newComment}>
        <div>
          <label>Name :</label>
          <input type="text" />
        </div>
        <div>
          <label>Email :</label>
          <input type="email" />
        </div>
        <div>
          <label>NewComment :</label>
          <textarea></textarea>
        </div>
        <button>Add</button>
      </form>
  );
};

export default NewComment;
