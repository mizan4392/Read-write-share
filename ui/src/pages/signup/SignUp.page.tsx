import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import React, { useState } from 'react'
import './signUp.css'

export const SignUp: React.FC = () => {
  const [error, setError] = useState(false);
  return <div className="signup">

    <h2>Read Write & Share</h2>
    <div style={{ background: "#fff", padding: "20px" }}>
      <Form name="login" >
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
            <Button htmlType="submit" >
              Signup
              </Button>
          </Col>
        </Row>
        <div className="form-group">
          <a href="/login">Already have an Account? Login</a>
        </div>
      </Form>
    </div>

  </div>
}
