// import { useContext } from "react";
// import { userNameContext } from "../../App";
import { useUserName } from "../context/UserContext";
// const FooterLinks = ({ userName }) => {
const FooterLinks = () => {
  const userName = useUserName();
  // const userName = useContext(userNameContext);
  return (
    <div className="nav col-md-4 justify-content-end">
      <a href="/">Ask us a question {userName}</a>
    </div>
  );
};

export default FooterLinks;
