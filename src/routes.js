import FullComment from "./components/Full-Comment/FullComment";
import HomePage from "./components/pages/HomePage";
import NewCommentPage from "./components/pages/NewCommentPage";
import NotFound from "./components/pages/NotFound";

const routes = [
  { path: "/comment/:id", component: FullComment },
  { path: "/new-comment", component: NewCommentPage },
  { path: "/", component: HomePage, exact: true },
  { path: "*", component: NotFound },
];

export default routes;
