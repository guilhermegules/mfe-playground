import React from "react";

import { useLoggedIn } from "../hooks/useLoggedIn";
import { login } from "../services/cart";

const Login = () => {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = React.useState(false);
  const [username, setUsername] = React.useState("sally");
  const [password, setPassword] = React.useState("123");

  if (loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="show-login"></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
          style={{
            width: 300,
            top: "2rem",
            left: -250,
          }}
        >
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full text-black"
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full mt-3 text-black"
          />
          <button
            className="bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5"
            onClick={() => login(username, password)}
            id="login-btn"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
