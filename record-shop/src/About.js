import React from "react";
import { Container } from "react-bootstrap";
import Attribution from "./components/Player/Attribution";
import Developer from "./components/Player/Developer";

export const About = () => {
  return (
    <Container>
      <div className="About">
        <Developer />
      </div>
    </Container>
  );
};
