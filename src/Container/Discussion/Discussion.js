import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/Full-Comment/FullComment";
import NewComment from "../../components/New-Comment/NewComment";
import "./Discussion.css"

const Discussion = () => {
  return (
    <main>
      <section>
        <Comment/>
        <Comment/>
        <Comment/>
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
