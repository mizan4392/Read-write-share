import React, { Component } from "react";
import { Form, Input, Icon, Checkbox, Button, Card } from "antd";
import { Container } from "@material-ui/core";

class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };
    render() {
        return (
            <div
                style={{
                    marginTop: '15%',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Card style={{ width: "40%", }}>
                    <Form>
                        <Form.Item>
                            <Input
                                prefix={
                                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                                }
                                placeholder="Username"
                            ></Input>
                        </Form.Item>

                        <Form.Item>
                            <Input
                                prefix={
                                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                                }
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <a className="login-form-forgot" href="">
                            Forgot password
            </a>
                        <div>
                            <Button
                                type="primary"
                                htmlType="submit"
                            //className="login-form-button"
                            >
                                Log in
              </Button>
                        </div>



                    </Form>
                </Card>
            </div>
        );
    }
}

export default Login;
