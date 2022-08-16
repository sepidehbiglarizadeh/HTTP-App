import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/Full-Comment/FullComment";
import NewComment from "../../components/New-Comment/NewComment";
import "./Discussion.css";
import { toast } from "react-toastify";
import getAllComments from "../../services/getAllcommentsService";

const Discussion = () => {
  const [comments, setComemnts] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
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

    if (error) {
      renderValue = <p>fetching dtata failed</p>;
      toast.error("There is an error!!");
    }

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
        <FullComment
          commentId={selectedId}
          setComemnts={setComemnts}
          setSelectedId={setSelectedId}
        />
      </section>
      <section>
        <NewComment setComemnts={setComemnts} />
      </section>
    </main>
  );
};

export default Discussion;
