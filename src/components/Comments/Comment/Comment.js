import styles from "./Comment.module.css"

const Comment = ({name,email,onClick}) => {
    return ( 
        <div className={styles.comment} onClick={onClick}>
            <p>Name : {name}</p>
            <p>email : {email}</p>
        </div>
     );
}
 
export default Comment;