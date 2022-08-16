import instance from "../axiosInstance";

const deleteComment = (id) => {
    return instance.delete(`/comments/${id}`);
}
 
export default deleteComment;