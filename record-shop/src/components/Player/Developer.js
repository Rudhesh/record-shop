import React from "react";

import { IconButton } from "@material-ui/core";
// import AvatarImage from "../assets/img/avatar.jpg";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Portrait,
  Twitter,
} from "@material-ui/icons";

const Developer = () => {
  return (
    <div className={"Developer"}>
      <h3 className={"Developer-head"}>Meet the developers</h3>
      <div className="Developer-profile">
        <div className="Developer-profileCard">
          {/* <img src={AvatarImage} alt="Profile" /> */}
          <div className={"Card-details"}>
            <h3>Kalaya</h3>
            <h3>Rudesh</h3>
            <h3>Khushal</h3>
          </div>
        </div>
        <div className="Developer-profileDetails">
          <p></p>
          <div className="Card-btn">
            <IconButton
              target={"_blank"}
              href={"https://www.facebook.com/"}
              title={""}
            >
              <Facebook />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://twitter.com/"}
              title={""}
            >
              <Twitter />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://www.linkedin.com/in/"}
              title={""}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://www.instagram.com//"}
              title={""}
            >
              <Instagram />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https:///"}
              title={"Web Portfolio"}
            >
              <Portrait />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
