import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";
import "./SendMail.css";
import { useDispatch } from "react-redux/es/exports";
import { mailActions } from "../features/mailSlice";
import { useForm } from "react-hook-form";
import axios from "axios";
import { formatEmail } from "../Util/UserNameFormat";
const SendMail = () => {
  const dispatch = useDispatch();

  const sendingMail = async (mail) => {
    const senderEmail = localStorage.getItem("userMail");
    const sender = formatEmail(senderEmail);
    const reciever = formatEmail(mail.to);
    const recieverMail = axios.post(
      `https://mail-box-client-948c9-default-rtdb.firebaseio.com/${reciever}/inbox.json`,
      {
        from: senderEmail,
        subject: mail.subject,
        message: mail.message,
      }
    );

    const sendererMail = axios.post(
      `https://mail-box-client-948c9-default-rtdb.firebaseio.com/${sender}/sent.json`,
      {
        to: mail.to,
        subject: mail.subject,
        message: mail.message,
      }
    );
  };
  const onSubmit = (data) => {
    try {
      const sending = sendingMail(data);
      dispatch(mailActions.closeSendMessage());
    } catch (e) {
      console.log(e);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CancelIcon
          onClick={() => {
            dispatch(mailActions.closeSendMessage());
          }}
          className="sendMail__close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          name="to"
          {...register("to", { required: true })}
        />
        {errors.to && <span className="sendMail__error">To is required</span>}
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <span className="sendMail__error">Subject is required</span>
        )}
        <input
          type="text"
          placeholder="Body"
          className="sendMail__message"
          name="message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="sendMail__error">Body is required</span>
        )}

        <div className="sendMail__options">
          <button className="sendMail__button btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
