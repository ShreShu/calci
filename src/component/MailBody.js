import React, { useEffect, useState } from "react";
import "./MailBody.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formatEmail } from "../Util/UserNameFormat";
const Mail = () => {
  const param = useParams();
  const mailUniqId = param.mailid;
  const type = param.type;

  const [mailContent, setEmailContent] = useState({});
  const [read, setread] = useState(false);
  const mail = formatEmail(localStorage.getItem("userMail"));

  const markAsRead = async (id) => {
    const response = await axios.patch(
      `https://mail-box-client-948c9-default-rtdb.firebaseio.com/${mail}/${type}/${id}.json`,
      {
        read: true,
      }
    );
  };
  const getMail = async (id) => {
    const response = await axios.get(
      `https://mail-box-client-948c9-default-rtdb.firebaseio.com/${mail}/${type}/${id}.json`
    );
    setEmailContent({
      from: response.data?.from,
      to: response.data?.to,
      message: response.data?.message,
      subject: response.data?.subject,
    });
    setread(response.data.read);
    console.log(response.data);
  };

  useEffect(() => {
    try {
      getMail(mailUniqId);
      if (!read) {
        markAsRead(mailUniqId);
      }
    } catch (e) {
      console.log("canit fetch id");
    }
  }, []);

  return (
    <div className="mail">
      <div className="mail__body">
        <div className="mail__subject">
          <h3>{mailContent.subject}</h3>
        </div>
        <div className="mail__sender">
          <p>
            <AccountCircleIcon fontSize="large" />
            <span>{type === "inbox" ? mailContent.from : mailContent.to}</span>
          </p>
        </div>
        <div className="mail__content">
          <div className="mail__content__main">{mailContent.message}</div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
