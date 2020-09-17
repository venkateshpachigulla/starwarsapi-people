import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const login = (event) => {
    event.preventDefault();
    setErrMsg("");
    axios
      .get(`https://swapi.dev/api/people/?search=${username}`)
      .then(({ data }) => {
        if (data.results.length > 0) {
          if (
            username.toLowerCase() === data.results[0].name.toLowerCase() &&
            password === data.results[0].birth_year
          ) {
            props.setUserName(data.results[0].name);
            history.push("/search");
          } else {
            setErrMsg("Enter valid DOB.");
          }
        } else {
          setErrMsg("Enter valid Name.");
        }
      });
  };

  return (
    <div className="login">
      <h1>Login Page</h1>
      <form>
        <h5>Username</h5>
        <input
          type="text"
          placeholder="Enter character name"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <h5>DOB</h5>
        <input
          type="password"
          placeholder="Enter character DOB"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={login} type="submit" className="login_signInButton">
          Sign In
        </button>
        <p>{errMsg}</p>
      </form>
    </div>
  );
}

export default Login;
