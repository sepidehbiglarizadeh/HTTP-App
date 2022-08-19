import FullComment from "./components/pages/Full-Comment/FullComment";
import HomePage from "./components/pages/HomePage";
import NotFound from "./components/pages/NotFound";
import NewComment from "./components/pages/New-Comment/NewComment";

const routes = [
  { path: "/comment/:id", component: FullComment },
  { path: "/new-comment", component:  NewComment},
  { path: "/", component: HomePage, exact: true },
  { path: "*", component: NotFound },
];

export default routes;
