import React, { useEffect } from "react";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import { useSelector, useDispatch } from "react-redux";
import { fetchInbox, fetchSent } from "../features/MailAction";

const SentItems = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSent());
  }, []);

  const sent = useSelector((state) => state.user.sent);
  console.log(sent);
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft"></div>
        <div className="emailList__settingsRight"></div>
        <div className="emailList__section"></div>
        <div className="emailList__list">
          {sent.map((email) => (
            <EmailRow
              type="sent"
              title={email.subject}
              subject={email.subject}
              description={email.message}
              time="3:06"
              id={email.key}
              key={email.key}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SentItems;
