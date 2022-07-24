import React from "react";
import "./EmailRow.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useNavigate } from "react-router-dom";
const EmailRow = ({ title, subject, description, time, id }) => {
  const navigate = useNavigate();
  const openMailHandler = () => {
    navigate("/mail");
  };

  return (
    <div onClick={openMailHandler} className="emailRow">
      <div className="emailRow__options">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
      </div>
      <div className="emailRow__mailContent">
        <h3 className="emailRow__title">{title}</h3>
        <div className="emailRow__message">
          <h4>
            {subject}
            <span className="emailRow__description">{description}</span>
          </h4>
        </div>
        <div className="email__description">{time}</div>
      </div>
    </div>
  );
};

export default EmailRow;
