import React, { Component } from "react";
import "./Login.css";
import { Form, Input, Icon } from "antd";


class Login extends Component {
    state = {
        email: "",
        password: "",
        errors: {}
    };


    handleSubmit = e => {
        e.preventDefault();
        let userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData, this.props.history);
    };
    //setting the form value to state
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="bg container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12" />
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <form className="form-container" onSubmit={this.handleSubmit}>
                            <h1 style={{textAlign:'center'}}> Login</h1>
                            <div className="form-group">
                             
                                <Form.Item>
                                    
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'red' }} />}
                                            placeholder="Username"
                                          
                                        />,
                                    
                                </Form.Item>
                                {this.state.errors.email ? (
                                    <span style={{ color: "red" }}>
                                        {this.state.errors.email}
                                    </span>
                                ) : (
                                        <span></span>
                                    )}
                            </div>
                            <div className="form-group">
                               
                                <Form.Item>
                                    
                                        <Input
                                            prefix={<Icon type="lock" style={{ color: 'red' }} />}
                                            type="password"
                                            placeholder="Password"
                                        />,
                                    
                                </Form.Item>
                                {this.state.errors.password ? (
                                    <span style={{ color: "red" }}>
                                        {this.state.errors.password}
                                    </span>
                                ) : (
                                        <span></span>
                                    )}
                            </div>
                            {errors.general && <span className="alert">{errors.general}</span>}
                            <button type="submit" className="btn btn-success btn-block">
                                Login
              </button>
                        </form>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12" />
                </div>
            </div>
        );
    }
}

export default Login