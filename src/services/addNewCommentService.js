import http from "./httpServices";

const addNewComment = (data) => {
    return http.post("/comments", data);
}
 
export default addNewComment;