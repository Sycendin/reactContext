// import { useContext } from "react";
// import { userNameContext } from "../../App";
import { useUserName } from "../context/UserContext";
// const Menu = ({ userName }) => {
const Menu = () => {
  // const userName = useContext(userNameContext);
  const userName = useUserName();
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a href="/" className="nav-link " aria-current="page">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          Pricing
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          FAQs
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link active">
          {userName}'s Profile
        </a>
      </li>
    </ul>
  );
};

export default Menu;
