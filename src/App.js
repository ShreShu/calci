import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import EmailList from "./component/EmailList";
import Header from "./component/Header";
import Mail from "./component/MailBody";
import SendMail from "./component/SendMail";
import SideBar from "./component/SideBar";

function App() {
  const sendMessageIsOpen = useSelector(
    (state) => state.mail.sendMessageIsOpen
  );

  return (
    <React.Fragment>
      <Header />

      <div className="app__body">
        <SideBar />
        <Routes>
          <Route path="/mail" element={<Mail />} />
          <Route path="/" element={<EmailList />} />
        </Routes>
      </div>
      {sendMessageIsOpen && <SendMail />}
    </React.Fragment>
  );
}

export default App;
