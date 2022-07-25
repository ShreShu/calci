import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import EmailList from "./component/EmailList";
import Header from "./component/Header";
import LoginForm from "./component/LoginForm";
import Mail from "./component/MailBody";
import SendMail from "./component/SendMail";
import SideBar from "./component/SideBar";
import { BrowserRouter } from "react-router-dom";
import SignUpForm from "./component/SignUpForm";
import { userActions } from "./features/userSlice";
import { fetchInbox } from "./features/MailAction";
import SentItems from "./component/SentItems";
function App() {
  const dispatch = useDispatch();
  const sendMessageIsOpen = useSelector(
    (state) => state.mail.sendMessageIsOpen
  );

  const user = localStorage.getItem("userMail");
  console.log(user);
  if (user === "" || user === null) {
    dispatch(userActions.logout());
  } else {
    dispatch(userActions.login(localStorage.getItem("token")));
  }

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  setInterval(() => {
    console.log("calling api");
    dispatch(fetchInbox());
  }, 2000);

  return (
    <React.Fragment>
      {isLoggedIn && <Header />}
      <Routes>
        <Route path="*" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        {isLoggedIn && (
          <Route path="" element={<SideBar />}>
            <Route path="/inbox" element={<EmailList />} />
            <Route path="mail/:type/:mailid" element={<Mail />} />
            <Route path="/sentItems" element={<SentItems />} />
          </Route>
        )}
      </Routes>

      {isLoggedIn && sendMessageIsOpen && <SendMail />}
    </React.Fragment>
  );
}

export default App;
