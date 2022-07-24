import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";
import "./SendMail.css";
import { useDispatch } from "react-redux/es/exports";
import { mailActions } from "../features/mailSlice";
import { useForm } from "react-hook-form";
const SendMail = () => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
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
          <button className="sendMail__button">Send</button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
