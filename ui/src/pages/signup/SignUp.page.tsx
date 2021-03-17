import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row ,notification} from 'antd';
import React, { useEffect, useState } from 'react'
import { SignupDataI } from './signup';
import {useStoreActions,useStoreState} from '../../hooks/easyPeasy'
import './signUp.css'
import { useHistory } from 'react-router';
import * as ROUTES from '../../utils/routes'

export const SignUp: React.FC = () => {
  const {signupUser,setSignupUserRes} = useStoreActions(a=>a.auth)
  const {signupUserLod,signupUserRes} = useStoreState(s=>s.auth)
  const [error, setError] = useState(false);
  const [form] = Form.useForm()
  const history = useHistory()

  useEffect(()=>{
    if(signupUserRes){
      if(signupUserRes.success){
        notification.success({message:"Signup successfull",description:"Please login"})
        setSignupUserRes(null)
        history.push(ROUTES.LOGIN)
      }else{
        notification.error({message:signupUserRes.message})
        setSignupUserRes(null)    }
      
    }
  },[signupUserRes])

  function handleSignup(value:SignupDataI){
    if(value.password.toLocaleLowerCase() === value.confirm_password.toLocaleLowerCase()){
      signupUser(value)
    }else{
      setError(true)
    }
  }

  return <div className="signup">

    <h2>Read Write & Share</h2>
    <div style={{ background: "#fff", padding: "20px" }}>
      <Form name="login" form={form} onFinish={(value)=>handleSignup(value)}>
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
            onChange={()=>setError(false)}
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
            onChange={()=>setError(false)}
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
            <Button htmlType="submit" loading={signupUserLod}>
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
