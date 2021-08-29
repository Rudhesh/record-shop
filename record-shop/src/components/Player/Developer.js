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
    <div className="Developer">
      <div className="DeveloperBox">
        <h3 className="Developer-head">Meet the developers</h3>
        <div className="Developer-profileCard">
          <div className="Card-details">
            <h3>Kalaya</h3>
            <h3>Rudesh</h3>
            <h3>Khushal</h3>
          </div>
        </div>

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
        <div className="Attribution">
          <h3>Attribution</h3>
          <div className="Attribution-div">
            <div className="Attribution-text">
              Icons made by
              <a href="http://www.freepik.com/" title="Freepik">
                &nbsp;Freepik&nbsp;
              </a>
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                &nbsp;www.flaticon.com
              </a>
            </div>
            <div className="Attribution-text">
              Music by
              <a href="https://ncs.io/" title="NCS">
                &nbsp;NCS&nbsp;
              </a>
              from
              <a href="https://ncs.io/music" title="NCS">
                &nbsp;ncs.io/music
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
