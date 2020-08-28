import React, { Component } from "react";
import "./Login.css";
//redux

import { Input, Button, Layout, Form, Row, Col } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

const style = {
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
  return (
    <Layout style={style.container}>
      <h2>Read Write & Share</h2>
      <div style={{ background: "#fff", padding: "20px" }}>
        <Form name="login" onFinish={() => {}}>
          <Form.Item
            style={{ width: "400px" }}
            name="username"
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
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your  email!",
              },
            ]}
          >
            <Input
              prefix={
                <MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                // <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Email"
              size="large"
              name="email"
              type="email"
              // onChange={this.handleChange}
            />
          </Form.Item>

          <Form.Item
            style={{ width: "400px" }}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              prefix={
                <LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                // <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              type="password"
              placeholder="Password"
              size="large"
              name="password"
              type="password"
              // onChange={this.handleChange}
            />
          </Form.Item>

          <Form.Item
            style={{ width: "400px" }}
            name="confirm_password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              prefix={
                <UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                // <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              type="password"
              placeholder="Confirm Password"
              size="large"
              name="confirm_password"
              type="password"
              // onChange={this.handleChange}
            />
          </Form.Item>
          {/* <span style={{ color: "red" }}>
            {this.state.error
              ? "Password and Confirm Password not matched"
              : ""}
          </span>
          <span style={{ color: "red" }}>
            {this.props.login && this.props.login.status !== "SUCCESS"
              ? "Email already taken"
              : ""}
          </span> */}

          <Row justify="space-between">
            <Col>
              {/* <Checkbox onChange={onRememberChange}>Remember me</Checkbox> */}
            </Col>
            <Col>
              <Button
                htmlType="submit"
                type="submit"
                // onClick={this.handleSubmit}
                // loading={this.state.loading}
              >
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
