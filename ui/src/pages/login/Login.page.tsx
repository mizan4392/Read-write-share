import { KeyOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import './login.css'

export const Login: React.FC = () => {
  return <div className="login"><h2>Read Write & Share</h2>
    <div style={{ background: "#fff", padding: "20px" }}>
      <Form name="login" >
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
            // loading={loginLoading}
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
    </div></div>
}

