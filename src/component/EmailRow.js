import React from "react";
import "./EmailRow.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
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
  console.log(read);
  const navigate = useNavigate();
  const openMailHandler = () => {
    navigate(`/mail/${type}/${id}`);
  };

  return (
    <div onClick={openMailHandler} className={`emailRow ${read ? "read" : ""}`}>
      <div className={`mailRow__options`}>
        {!read && <FiberManualRecordIcon className="read_dot" />}
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
      </div>
      <div className="emailRow__mailContent">
        <h4 className="emailRow__title">{title}</h4>
        <div className="emailRow__message">
          <h5>
            {subject}
            <span className="emailRow__description">{description}</span>
          </h5>
        </div>
        <div className="email__description">{time}</div>
      </div>
    </div>
  );
};

export default EmailRow;
