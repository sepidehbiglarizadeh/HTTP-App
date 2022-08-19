import { useEffect, useState } from "react";
import Comment from "./Comment/Comment";
import "./Comments.css";
import { toast } from "react-toastify";
import getAllComments from "../../services/getAllcommentsService";
import { Link } from "react-router-dom";

const CommnetsList = () => {
  const [comments, setComemnts] = useState(null);
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

  const renderComment = () => {
    let renderValue = <p>Loading...</p>;

    if (error) {
      renderValue = <p>fetching dtata failed</p>;
      toast.error("There is an error!!");
    }

    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Link to={`/comment/${c.id}`} key={c.id}>
          <Comment
            name={c.name}
            email={c.email}
          />
        </Link>
      ));
    }
    return renderValue;
  };

  return <section>{renderComment()}</section>;
};

export default CommnetsList;
