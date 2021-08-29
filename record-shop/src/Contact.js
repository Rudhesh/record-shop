import React from "react";
import "./App.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contactDetails">
        <h1>INFO & CONTACTS</h1>

        <h3>SECRET TRACK</h3>
        <span>Pannierstraße 26</span>
        <br />
        <span>12047 Berlin, Germany</span>
        <br />
        <span>
          <a href="#">info@secretrack.de</a>
        </span>
        <br />
        <iframe
          loading="lazy"
          allowfullscreen
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC8GfpWcab6B8SlusM_rIeF_dTIFwRZhPQ
    &q=Pannierstraße 26,Berlin,Germany`}
        ></iframe>
        <br />
        <span>Opening Times :</span>
        <br />
        <span>Mo-Sa 13.00 - 20.00</span>
      </div>
    </div>
  );
};
