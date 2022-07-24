import React from "react";
import "./MailBody.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Mail = () => {
  return (
    <div className="mail">
      <div className="mail__body">
        <div className="mail__subject">
          <h3>2 new jobs for 'java software engineer'</h3>
        </div>
        <div className="mail__sender">
          <p>
            <AccountCircleIcon fontSize="large" />
            <span>Manoj B manoj.b@bridgelabz.com Unsubscribe</span>
          </p>
        </div>
        <div className="mail__content">
          <div className="mail__content__main">
            Hi Shubham , I am Manoj - one of the co-founders of BridgeLabz,
            India’s 1st job skilling and placement marketplace to skill
            engineers for niche deep tech roles.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
