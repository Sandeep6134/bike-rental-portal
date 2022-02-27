import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {userLogin, userRegister} from "../redux/actions/userActions";


function Register() {
  const dispatch = useDispatch()

  function onFinish(values){
    dispatch(userRegister(values))
    console.log(values)
  }

  return (
    <div className="login">
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "fixed" }}>
          <img src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" width="150%" />
          <h1 className="login-logo">Bike Rentals</h1>
        </Col>
        <Col lg={8} className="text-left p-5">
          <Form layout="vertical" className="login-form p-5" onFinish={onFinish}>
            <h1>Register</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="cpassword"
              label="confirm Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Link to="/">
            <button className="btn btn-primary">Register</button><br/>
            </Link>
            <br />

            <Link to="/">Click Here to Login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
