import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/Full-Comment/FullComment";
import NewComment from "../../components/New-Comment/NewComment";
import "./Discussion.css";
import axios from "axios";

const Discussion = () => {
  const [comments, setComemnts] = useState(null);
  const [selectedId,setSelectedId]= useState(null);

  useEffect(() => {
    const getComments = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComemnts(data.slice(0, 4));
    };
    getComments();
  }, []);

  const selectedCommentHandler=(id)=>{
    setSelectedId(id);
  }

  return (
    <main>
      <section>
        {comments
          ? comments.map((c) => (
              <Comment key={c.id} name={c.name} email={c.email} onClick={()=>selectedCommentHandler(c.id)}/>
            ))
          : "Loading..."}
      </section>
      <section>
        <FullComment commentId={selectedId}/>
      </section>
      <section>
        <NewComment />
      </section>
    </main>
  );
};

export default Discussion;
