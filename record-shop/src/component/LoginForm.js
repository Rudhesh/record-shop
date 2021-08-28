import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./login.css";

// destructuring
function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <div className="login">
      <Form onSubmit={submitHandler}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Name:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="name"
              placeholder="Tom"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="user@user.com"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password:..........
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="123"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
