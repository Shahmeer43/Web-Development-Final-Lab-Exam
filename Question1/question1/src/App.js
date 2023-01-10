import React from "react";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  const [pswd, setPswd] = useState();
  const [token, setToken] = useState(null);

  const submitHandler = (e) => {
    const sendReq = async () => {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user,
          password: pswd,
        }),
      });
      const data = await response.json();

      setToken(data.token);
      localStorage.setItem("token", data.token);
      console.log(data);
    };
    sendReq();
    e.preventDefault();
  };
  return (
    <>
      <div>
        <h2>Username and Password</h2>
        <ul>
          <li>"username":"hbingley1","password":"CQutx25i8r"</li>
        </ul>
      </div>
      <form action="" method="post" onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUser(e.target.value)}
            style={{
              backgroundColor: "black",
              color: "white",
              marginLeft: "5%",
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPswd(e.target.value)}
            style={{
              backgroundColor: "black",
              color: "white",
              marginLeft: "5%",
            }}
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: "black", color: "white", marginLeft: "5%" }}
        >
          signup
        </button>
      </form>
      {token && (
        <div>
          <b>Token: </b>
          {token}
        </div>
      )}
    </>
  );
}

export default App;
