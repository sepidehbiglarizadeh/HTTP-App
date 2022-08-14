import styles from "./Comment.module.css"

const Comment = () => {
    return ( 
        <div className={styles.comment}>
            <p>Name</p>
            <p>email</p>
        </div>
     );
}
 
export default Comment;