import { Button } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import MailIcon from "@mui/icons-material/Mail";
import SideBarOptions from "./SideBarOptions";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import SendIcon from "@mui/icons-material/Send";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { mailActions } from "../features/mailSlice";
const SideBar = () => {
  const dispatch = useDispatch();
  const composeMailHandler = () => {
    dispatch(mailActions.openSendMessage());
  };

  return (
    <div className="sidebar">
      <Button
        onClick={composeMailHandler}
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <NavLink to="/">
        <SideBarOptions
          Icon={MailIcon}
          title="Inbox"
          number={54}
          seleted={true}
        />
      </NavLink>
      <SideBarOptions Icon={StarIcon} title="Starred" number={54} />
      <SideBarOptions Icon={AccessTimeFilledIcon} title="Snoozed" number={54} />
      <SideBarOptions Icon={SendIcon} title="Sent" number={54} />
      <SideBarOptions Icon={InsertDriveFileIcon} title="Draft" number={54} />
      <SideBarOptions Icon={LabelImportantIcon} title="Important" number={54} />
      <SideBarOptions Icon={ExpandMoreIcon} title="More" number={54} />
    </div>
  );
};

export default SideBar;
