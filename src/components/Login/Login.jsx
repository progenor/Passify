import React from "react";

const Login = () => {
  return (
    <div className="login_main">
      <div className="login_main_2">
        <h1>Login</h1>
        <form action="login">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="" />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
