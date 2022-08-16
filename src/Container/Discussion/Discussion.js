import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/Full-Comment/FullComment";
import NewComment from "../../components/New-Comment/NewComment";
import "./Discussion.css";
import axios from "axios";

const Discussion = () => {
  const [comments, setComemnts] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/comments");
        setComemnts(data);
      } catch (err) {
        setError(true);
      }
    };
    getComments();
  }, []);

  const selectedCommentHandler = (id) => {
    setSelectedId(id);
  };

  const renderComment = () => {
    let renderValue = <p>Loading...</p>;

    if (error) renderValue = <p>fetching dtata failed</p>;

    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          onClick={() => selectedCommentHandler(c.id)}
        />
      ));
    }
    return renderValue;
  };

  return (
    <main>
      <section>{renderComment()}</section>
      <section>
        <FullComment commentId={selectedId} />
      </section>
      <section>
        <NewComment setComemnts={setComemnts} />
      </section>
    </main>
  );
};

export default Discussion;
