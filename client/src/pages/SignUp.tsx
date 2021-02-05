import React, { Component, useState, useEffect } from "react";
import "./Login.css";
//redux

import { Input, Button, Layout, Form, Row, Col, notification } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useStoreActions, useStoreState } from "../hooks/easyPeasy";
import { useHistory } from "react-router-dom";
const style: any = {
  container: {
    position: "absolute",
    background: "#ecf0f1",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

function Signup() {
  const signup = useStoreActions((state) => state.auth.signup);
  const signupRes = useStoreState((state) => state.auth.signupRes);
  const setSignupRes = useStoreActions((state) => state.auth.setSignupRes);

  const signupLoadnig = useStoreState((state) => state.auth.signupLoadnig);

  const history = useHistory();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (signupRes) {
      if (signupRes.success !== undefined) {
        if (signupRes.success) {
          openNotificationWithIcon(
            "success",
            "Sign up SucessFull!",
            "please Login and Enjoy sharing"
          );
          history.push("/login");
        }
      } else {
        openNotificationWithIcon(
          "error",
          "Couldn't signup",
          signupRes?.message
        );
      }
      setSignupRes(null);
    }
  }, [signupRes]);

  const openNotificationWithIcon = (type, msg, des) => {
    notification[type]({
      message: msg,
      description: des,
    });
  };

  function handleSignup(value) {
    if (value.password !== value.confirm_password) {
      setError(true);
    } else {
      signup(value);
    }
  }
  return (
    <Layout style={style.container}>
      <h2>Read Write & Share</h2>
      <div style={{ background: "#fff", padding: "20px" }}>
        <Form name="login" onFinish={handleSignup}>
          <Form.Item
            style={{ width: "400px" }}
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input
              prefix={
                <UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                // <Icon type="user" />
              }
              placeholder="Full Name"
              size="large"
              name="fullName"
              type="text"
              // onChange={this.handleChange}
            />
          </Form.Item>

          <Form.Item
            style={{ width: "400px" }}
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your  email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
              size="large"
              name="email"
              type="email"
            />
          </Form.Item>

          <Form.Item
            style={{ width: "400px" }}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              size="large"
              name="password"
              onChange={() => {
                return error ? setError(false) : null;
              }}
            />
          </Form.Item>

          <Form.Item
            style={{ width: "400px" }}
            name="confirm_password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Confirm Password"
              size="large"
              name="confirm_password"
              onChange={() => {
                return error ? setError(false) : null;
              }}
            />
          </Form.Item>
          <span style={{ color: "red" }}>
            {error ? "Password and Confirm Password not matched" : ""}
          </span>

          <Row justify="space-between">
            <Col>
              {/* <Checkbox onChange={onRememberChange}>Remember me</Checkbox> */}
            </Col>
            <Col>
              <Button htmlType="submit" loading={signupLoadnig}>
                Signup
              </Button>
            </Col>
          </Row>
          <div className="form-group">
            <a href="/login">Already have an Account? Login</a>
          </div>
        </Form>
      </div>
    
    </Layout>
  );
}

export default Signup;
