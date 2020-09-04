import React, { Component, useEffect } from "react";
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
  notification,
} from "antd";

import {
  UserOutlined,
  LockOutlined,
  InfoCircleOutlined,
  MailOutlined,
  KeyOutlined,
} from "@ant-design/icons";
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

function Login() {
  const login = useStoreActions((state) => state.auth.login);
  const loginLoading = useStoreState((state) => state.auth.loginLoading);
  const loginRes = useStoreState((state) => state.auth.loginRes);
  const setLoginRes = useStoreActions((state) => state.auth.setLoginRes);
  const history = useHistory();
  const openNotificationWithIcon = (type, msg, des) => {
    notification[type]({
      message: msg,
      description: des,
    });
  };

  useEffect(() => {
    if (loginRes) {
      if (loginRes?.success) {
        openNotificationWithIcon("success", "Login SuccessFull", "");
        history.push("/");
        window.location.reload();
      } else {
        openNotificationWithIcon("error", loginRes?.msg, "");
      }
      setLoginRes(null);
    }
  }, [loginRes]);

  function handleLogin(value) {
    login(value);
  }
  return (
    <Layout style={style.container}>
      <h2>Read Write & Share</h2>
      <div style={{ background: "#fff", padding: "20px" }}>
        <Form name="login" onFinish={handleLogin}>
          <Form.Item
            style={{ width: "400px" }}
            name="email"
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
            />
          </Form.Item>

          <Row justify="space-between">
            <Col></Col>
            <Col>
              <Button
                htmlType="submit"
                style={{ color: "#000" }}
                loading={loginLoading}
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
