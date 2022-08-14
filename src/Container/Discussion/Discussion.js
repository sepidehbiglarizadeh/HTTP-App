import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/Full-Comment/FullComment";
import NewComment from "../../components/New-Comment/NewComment";
import "./Discussion.css"
import axios from "axios";

const Discussion = () => {
    const [comments,setComemnts]=useState(null);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments').then((res)=>{
            setComemnts(res.data.slice(0,4));
        }).catch((err)=>{
            console.log(err);
        })
    },[])

  return (
    <main>
      <section>
        {comments ? comments.map((c)=> <Comment name={c.name} email={c.email} />) : "Loading..."}
      </section>
      <section>
        <FullComment/>
      </section>
      <section>
        <NewComment/>
      </section>
    </main>
  );
};

export default Discussion;
