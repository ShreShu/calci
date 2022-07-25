import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatEmail } from "../Util/UserNameFormat";
import "./SignUpForm.css";
const SignUpForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formattedMail = formatEmail(email).toLowerCase();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const createInbox = async () => {
    const inbox = await axios.post(
      `https://mail-box-client-948c9-default-rtdb.firebaseio.com/${formattedMail}/inbox.json`,
      {
        from: "google.com",
        subject: "Welcome to the family",
        message: `Hi ${email} ,Welcome to the gmail`,
      }
    );
  };

  const createSent = async () => {
    const inbox = await axios.post(
      `https://mail-box-client-948c9-default-rtdb.firebaseio.com/${formattedMail}/sent.json`,
      {
        to: "google.com",
        subject: "Hi",
        message: `Hi gmail ,I am ${email}`,
      }
    );
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // TODO: add Email validation
    if (email === "") {
      setEmailError("Email can't be empty");
      return;
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPasswordError("Password  can't be empty");
      return;
    } else {
      setPasswordError("");
    }

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCetIgqZRXEmeSpTpeg5TOcygd-XW-h2oU",
        { email: email, password: password, returnSecureToken: true }
      )
      .then((res) => {
        try {
          const inbox = createInbox();
          const sent = createSent();
        } catch (e) {
          console.log(e);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.error.message);
        //   {FIXME: Fix this alert box, alertbox is not getting diplayed  }
      });
  };
  const showAlert = (event) => {
    event.preventDefault();
    navigate("/login");
  };
  return (
    <div>
      <form className="sign-up-form">
        <h3 className="signup-heading">Sign Up</h3>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={emailChange}
          />
        </div>
        <span>{emailError}</span>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={passwordChange}
          />
        </div>
        <span>{passwordError}</span>
        <button onClick={formSubmitHandler} className="btn btn-primary ">
          Submit
        </button>
        <button onClick={showAlert} className="btn btn-outline-primary ">
          Have an account? login
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
