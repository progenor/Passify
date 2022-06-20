import React from "react";
import "./Login.scss";

const Login = () => {
  const log_login = (e) => {};

  const log_cont = (e) => {};

  const sw = () => {
    const switchers = [...document.querySelectorAll(".switcher")];

    switchers.forEach((item) => {
      item.addEventListener("click", function () {
        switchers.forEach((item) =>
          item.parentElement.classList.remove("is-active")
        );
        this.parentElement.classList.add("is-active");
      });
    });
  };

  return (
    <div className="login_main">
      <section className="forms-section">
        <h1 className="section-title">Passify</h1>
        <div className="forms">
          <div className="form-wrapper is-active">
            <button type="button" className="switcher switcher-login">
              Login
              <span className="underline"></span>
            </button>
            <form className="form form-login" onSubmit={log_login}>
              <fieldset>
                <legend>
                  Please, enter your username and password for login.
                </legend>
                <div className="input-block">
                  <label for="login-email">Username</label>
                  <input
                    id="login-email"
                    type="text"
                    name="username"
                    required
                  />
                </div>
                <div className="input-block">
                  <label for="login-password">Password</label>
                  <input
                    id="login-password"
                    type="password"
                    name="password"
                    required
                  />
                </div>
              </fieldset>
              <button type="submit" className="btn-login">
                Login
              </button>
            </form>
          </div>
          <div className="form-wrapper">
            <button type="button" className="switcher switcher-signup">
              Sign Up
              <span className="underline"></span>
            </button>
            <form className="form form-signup">
              <fieldset>
                <legend>
                  Please, enter your username, password and password
                  confirmation for sign up.
                </legend>
                <div className="input-block">
                  <label for="signup-email">Username</label>
                  <input
                    id="signup-email"
                    type="text"
                    name="signup-username"
                    required
                  />
                </div>
                <div className="input-block">
                  <label for="signup-password">Password</label>
                  <input
                    id="signup-password"
                    type="password"
                    name="password1"
                    required
                  />
                </div>
                <div className="input-block">
                  <label for="signup-password-confirm">Confirm password</label>
                  <input
                    id="signup-password-confirm"
                    type="password"
                    name="password2"
                    required
                  />
                </div>
              </fieldset>
              <button type="submit" className="btn-signup">
                Continue
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
