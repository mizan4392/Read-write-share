import { KeyOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Row,notification } from 'antd'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { LoginDataI } from './login'
import './login.css'
import { useStoreActions, useStoreState } from '../../hooks/easyPeasy'
import * as ROUTER from '../../utils/routes'

export const Login: React.FC = () => {

  const { loginUser, setLoginUserRes } = useStoreActions(a => a.auth)

  const { loginUserLod, loginUserRes } = useStoreState(s => s.auth)

  const [form] = Form.useForm()
  const history = useHistory()

  useEffect(()=>{
    if(loginUserRes){
      if(loginUserRes.success){
        history.push(ROUTER.ROOT)
        setLoginUserRes(null)
      }else{
        notification.error({message:"UnAuthorized"})
      }
    }
  },[loginUserRes])

  function handleLogin(value: LoginDataI) {
    loginUser(value)
  }

  return <div className="login"><h2>Read Write & Share</h2>
    <div style={{ background: "#fff", padding: "20px" }}>
      <Form name="login" form={form} onFinish={(value) => handleLogin(value)}>
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
              loading={loginUserLod}
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

