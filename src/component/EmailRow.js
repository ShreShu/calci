import React from "react";
import "./EmailRow.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { formatEmail } from "../Util/UserNameFormat";
import { useDispatch } from "react-redux";
import { fetchInbox, fetchSent } from "../features/MailAction";
const EmailRow = ({
  type,
  title,
  subject,
  description,
  time,
  id,
  key,
  read,
}) => {
  const mail = formatEmail(localStorage.getItem("userMail"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openMailHandler = () => {
    navigate(`/mail/${type}/${id}`);
  };

  const deleteMailHandler = () => {
    console.log(id);

    axios
      .delete(
        `https://mail-box-client-948c9-default-rtdb.firebaseio.com/${mail}/${type}/${id}.json`
      )
      .then((res) => {
        console.log(res);
        if (type === "inbox") {
          dispatch(fetchInbox());
        }
        if (type === "sent") {
          dispatch(fetchSent());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={`emailRow ${read ? "read" : ""}`}>
      <div className={`mailRow__options`}>
        {!read && type === "inbox" && (
          <FiberManualRecordIcon className="read_dot" />
        )}
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
      </div>
      <div onClick={openMailHandler} className="emailRow__mailContent">
        <h4 className="emailRow__title">{title}</h4>
        <div className="emailRow__message">
          <h5>
            {subject}
            <span className="emailRow__description">{description}</span>
          </h5>
        </div>
        <div className="email__description">{time}</div>
      </div>
      <DeleteIcon onClick={deleteMailHandler} />
    </div>
  );
};

export default EmailRow;
