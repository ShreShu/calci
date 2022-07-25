import React, { useEffect } from "react";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import { useSelector, useDispatch } from "react-redux";
import { fetchInbox } from "../features/MailAction";

const EmailList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInbox());
  }, []);

  const inbox = useSelector((state) => state.user.inbox);
  console.log(inbox);
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft"></div>
        <div className="emailList__settingsRight"></div>
        <div className="emailList__section"></div>
        <div className="emailList__list">
          {inbox.map((email) => (
            <EmailRow
              type="inbox"
              title={email.subject}
              subject={email.subject}
              description={email.message}
              time="3:06"
              id={email.key}
              key={email.key}
              read={email.read}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailList;
