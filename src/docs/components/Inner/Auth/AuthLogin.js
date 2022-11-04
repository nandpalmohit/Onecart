import React, { useState, useEffect } from "react";
import TopNavbar from "../../Navbar/TopNavbar";
import style from "./AuthLogin.module.css";
import { Link } from "react-router-dom";
import AuthBanner from "../../../../assets/section/auth/login.jpg";
import logo from "../../../../assets/logo/logo-black.png";
import loading from "../../../../assets/gif/loading_2.gif";
import { useDispatch, useSelector } from "react-redux";

const AuthLogin = (props) => {
  const [dataIsLoading, setDataIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState(null);
  const [Success, setSuccess] = useState(null);

  const authData = JSON.parse(localStorage.getItem("loginCredentials"));

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const loadPopupHandler = () => {
    if (state.authToken.token) {
      setSuccess("You are login as " + state.authToken.userEmail);
    }
  };

  // handle on form submit
  const formLoginHandler = (event) => {
    event.preventDefault();

    // check weather email or password is exxist or not
    if (!email && !password) {
      setError("Email and password is empty!");
    } else if (!email) {
      setError("Email is empty!");
    } else if (!password) {
      setError("Password is empty!");
    } else {
      setDataIsLoading(true);
    }

    // filter data from using email
    const auth = authData.filter((auth) => {
      return auth.email === email;
    });

    // check filtered data is available or not
    if (auth.length === 0) {
      setError("Email is not registered with us!");
      setTimeout(() => {
        setDataIsLoading(false);
      }, 1000);
    } else {
      // if user is exist check authentication using email and password
      if (auth[0].email == email && auth[0].password == password) {
        setSuccess("You are login as " + email);
        // dispatch login
        dispatch({
          type: "login",
          authToken: {
            token: Math.random(),
            userName: auth[0].name,
            userEmail: email,
            userPassword: password,
          },
        });

        setTimeout(() => {
          setDataIsLoading(false);
        }, 1000);
      } else {
        setError("Your password is incorrect");
        setTimeout(() => {
          setDataIsLoading(false);
        }, 1000);
      }
    }
  };

  props.authCallback(state.authToken);

  // console.log(state);

  return (
    <div
      className={`${style.auth_container} container-fluid`}
      onLoad={loadPopupHandler}
    >
      <div className="row justify-content-center">
        <div className="col-sm-9 col-md-8 col-lg-6">
          <div className={`${style.auth_wrapper}`}>
            <div className="row">
              <div className={`${style.auth_banner} col-md-6 col-sm-4`}>
                <img src={AuthBanner} width="100%" alt="" />
                <div className={`${style.auth_banner_content}`}>
                  <h4 className={`${style.banner_title}`}>
                    Welcome to OneCart
                  </h4>
                  <p className={`${style.banner_subtitle}`}>
                    To keep connected with us please login with your account
                  </p>
                </div>
              </div>
              {dataIsLoading ? (
                <div className={`${style.auth_login} col-md-6 col-sm-4`}>
                  <div className="mx-auto my-auto d-block text-center mt-5  ">
                    <img src={loading} alt="" width="200px" />
                  </div>
                </div>
              ) : (
                <div className={`${style.auth_login} col-md-6 col-sm-4`}>
                  <div className={`${style.auth_title}`}>
                    <h5 className="bold-600 mt-3 mb-0 pb-0">
                      Login Your Account
                    </h5>
                    <small className="txt-muted">
                      Your data is secure with us!
                    </small>
                  </div>
                  {Success ? (
                    <div className="text-center mb-3 overflow-hidden">
                      <small className="text-success bold-500">{Success}</small>
                    </div>
                  ) : (
                    <div className={`${style.auth_form_wrapper}`}>
                      <form
                        className={`${style.auth_form}`}
                        onSubmit={formLoginHandler}
                      >
                        {Error && (
                          <div className="text-center mb-3 overflow-hidden">
                            <small className="text-danger bold-500">
                              {Error}
                            </small>
                          </div>
                        )}
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className={`${style.input_form} form-control`}
                            id="floatingInput"
                            placeholder="name@example.com"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                          />
                          <label
                            htmlFor="floatingInput"
                            className={`${style.input_form_label}`}
                          >
                            Email address
                          </label>
                        </div>
                        <div className="form-floating">
                          <input
                            type="password"
                            className={`${style.input_form} form-control`}
                            id="floatingPassword"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(event) =>
                              setPassword(event.target.value)
                            }
                          />
                          <label
                            htmlFor="floatingPassword"
                            className={`${style.input_form_label}`}
                          >
                            Password
                          </label>
                        </div>
                        <div className={`${style.auth_policy}`}>
                          By continuing, you agree to OneCart's{" "}
                          <b>Terms of Use </b>
                          and <b>Privacy Policy</b>.
                        </div>
                        <div className="d-grid mt-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block bold-600 shadow"
                          >
                            Login Now
                          </button>
                          <p className={`${style.banner_actionbtn}`}>
                            New to OneCart?
                            <Link to="/Register" className="ps-1">
                              Create an account.
                            </Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div
              className={`${style.close_modal}`}
              onClick={() => props.setIsLoginActive(false)}
            >
              <i className="fas fa-times"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
