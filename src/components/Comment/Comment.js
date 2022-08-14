import styles from "./Comment.module.css"

const Comment = ({name,email}) => {
    return ( 
        <div className={styles.comment}>
            <p>Name : {name}</p>
            <p>email : {email}</p>
        </div>
     );
}
 
export default Comment;