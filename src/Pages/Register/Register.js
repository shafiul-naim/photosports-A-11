import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();


  const navigateLogin = (event) => {
    navigate("/login");
  };


  const handleRegister = async(event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const agree = event.target.terms.checked;

    
    //  await createUserWithEmailAndPassword(email, password);
    //  await updateProfile({ displayName: name});
    //       alert('Updated profile');
    //       navigate('/home');
    
  };



  return (
    <div>
      <h2>please register</h2>
      <Form className="w-50 mx-auto" onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={nameRef}
            type="name"
            placeholder="Enter your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary d-block mx-auto" type="submit">
          Register
        </Button>
      </Form>
      <p className="text-center">
        Already have an account..?{" "}
        <Link
          to="/login"
          className="text-danger text-decoration-none "
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
