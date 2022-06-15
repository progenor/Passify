import React from "react";
import "./Login.scss";
import "./Login_anim";
import { useRef } from "react";

const Login = () => {
  const ref = useRef();

  log_login = (e) => {
    alert(e);
  };

  log_cont = (e) => {};

  return (
    <div className="login_main">
      <section class="forms-section">
        <h1 class="section-title">Passify</h1>
        <div class="forms">
          <div class="form-wrapper is-active">
            <button type="button" class="switcher switcher-login">
              Login
              <span class="underline"></span>
            </button>
            <form class="form form-login" ref={ref} onSubmit={log_login()}>
              <fieldset>
                <legend>
                  Please, enter your username and password for login.
                </legend>
                <div class="input-block">
                  <label for="login-email">Username</label>
                  <input id="login-email" type="text" required />
                </div>
                <div class="input-block">
                  <label for="login-password">Password</label>
                  <input id="login-password" type="password" required />
                </div>
              </fieldset>
              <button type="submit" class="btn-login">
                Login
              </button>
            </form>
          </div>
          <div class="form-wrapper">
            <button type="button" class="switcher switcher-signup">
              Sign Up
              <span class="underline"></span>
            </button>
            <form class="form form-signup" ref={ref} onSubmit={log_cont()}>
              <fieldset>
                <legend>
                  Please, enter your username, password and password
                  confirmation for sign up.
                </legend>
                <div class="input-block">
                  <label for="signup-email">Username</label>
                  <input id="signup-email" type="text" required />
                </div>
                <div class="input-block">
                  <label for="signup-password">Password</label>
                  <input id="signup-password" type="password" required />
                </div>
                <div class="input-block">
                  <label for="signup-password-confirm">Confirm password</label>
                  <input
                    id="signup-password-confirm"
                    type="password"
                    required
                  />
                </div>
              </fieldset>
              <button type="submit" class="btn-signup">
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
