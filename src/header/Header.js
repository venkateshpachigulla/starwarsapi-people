import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const history = useHistory();
  const logoutHandler = () => {
    props.setUserName("");
    history.push("/");
  };
  return (
    <div className="header">
      <div className="header__nav">
        Hello {props.userName}
        <button onClick={logoutHandler}> Logout</button>
      </div>
    </div>
  );
}

export default Header;
