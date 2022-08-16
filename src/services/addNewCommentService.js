import http from "./httpServices";

const addNewComment = (data) => {
    const token='SECURE TOKEN';
    const header= {
        headers:{
            Authorization:`Bearer ${token}`,
        },
    };

    return http.post("/comments", data,header);
}
 
export default addNewComment;