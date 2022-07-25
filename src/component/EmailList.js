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
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft"></div>
        <div className="emailList__settingsRight"></div>
        <div className="emailList__section"></div>
        <div className="emailList__list">
          {inbox.map((email) => (
            <EmailRow
              title={email.subject}
              subject={email.subject}
              description={email.message}
              time="3:06"
              id={email.id}
              key={email.id}
            />
          ))}

          <EmailRow
            title="IndiGo"
            subject="Your Indgio Itinerary"
            description="-Your job alert for java software engineer"
            time="3:06 PM"
            id="e1"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailList;
