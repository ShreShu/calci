import React from "react";
import "./EmailList.css";
import EmailRow from "./EmailRow";

const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft"></div>
        <div className="emailList__settingsRight"></div>
        <div className="emailList__section"></div>
        <div className="emailList__list">
          <EmailRow
            title="IndiGo"
            subject="Your Indgio Itinerary"
            description="-Your job alert for java software engineer"
            time="3:06 PM"
            id="e1"
          />
          <EmailRow
            title="IndiGo"
            subject="Your Indgio Itinerary"
            description="-Your job alert for java software engineer"
            time="3:06 PM"
            id="e1"
          />
          <EmailRow
            title="IndiGo"
            subject="Your Indgio Itinerary"
            description="-Your job alert for java software engineer"
            time="3:06 PM"
            id="e1"
          />
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
