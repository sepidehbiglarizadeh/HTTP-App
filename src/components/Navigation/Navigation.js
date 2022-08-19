
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";


const items = [
  { name: "Home", to: "/" },
  { name: "New-Comment", to: "/new-comment" },


];

const Navigation = (props) => {
  return (
    <nav>
      {items.map((item) => {
        return (
          <li key={item.to}>
            <NavLink to={item.to} activeClassName="activeClass">
              {item.name}
            </NavLink>
          </li>
        );
      })}
    </nav>
  );
};

export default withRouter(Navigation);