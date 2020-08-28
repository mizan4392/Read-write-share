import React, { Component } from "react";
import "./Login.css";
//redux
import Particles from "react-particles-js";
import {
  Input,
  Button,
  Form,
  Layout,
  Row,
  Alert,
  Checkbox,
  Tooltip,
  Col,
} from "antd";

import {
  UserOutlined,
  LockOutlined,
  InfoCircleOutlined,
  MailOutlined,
  KeyOutlined,
} from "@ant-design/icons";

const params = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 200,
      },
    },
  },
};

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

function Login() {
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
                message: "Please input your username or email!",
              },
            ]}
          >
            <Input
              name="email"
              type="email"
              style={{ width: "400px" }}
              prefix={<MailOutlined />}
              placeholder="Email"
              size="large"
              // value={this.state.email}
              // onChange={this.handleChange}
            />
          </Form.Item>

          <Form.Item
            style={{ width: "400px" }}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              style={{ width: "400px" }}
              prefix={<KeyOutlined />}
              type="password"
              name="password"
              placeholder="Password"
              size="large"
              // value={this.state.password}
              // onChange={this.handleChange}
            />
          </Form.Item>

          <Row justify="space-between">
            <Col>
              {/* <Checkbox onChange={onRememberChange}>Remember me</Checkbox> */}
            </Col>
            <Col>
              <Button
                htmlType="submit"
                style={{ color: "#fff" }}
                // loading={this.state.loading}
                // onClick={this.handleSubmit}
              >
                Login
              </Button>
            </Col>
          </Row>
          <div className="form-group">
            <a
              href="/signup"
              // onClick={() => this.props.history.push("/signup")}
            >
              Don't have an Account? Signup
            </a>
          </div>
        </Form>
      </div>
    </Layout>
  );
}

export default Login;
