import React, { Component } from "react";
import "./Login.css";
//redux
import Particles from 'react-particles-js'
import { Input, Icon } from "antd";

const params = {
    particles: {
        number: {
            value: 40,
            density: {
                enable: true,
                value_area: 200
            }
        }
    }
}

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
                        <form className="form-container" onSubmit={this.handleSubmit} >

                            <h1 style={{ textAlign: 'center' }}> Login</h1>
                            <div className="form-group">
                                {/* <label htmlFor="exampleInputEmail1">Email address</label> */}

                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Email"
                                    size="large"
                                />

                            </div>
                            <div className="form-group">
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    size="large"
                                />

                            </div>
                            <div className="form-group">
                                <a href='#'>Forgote Password?</a>
                            </div>
                            <div >
                                <button type="submit" className="btn btn-success btn-block" >
                                    Login
                         </button>
                                <div className="form-group">
                                    <a href='#'>Don't have an Account? Signup</a>
                                </div>

                            </div>


                        </form>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12" />
                </div>
            </div>
        );
    }
}

export default Login;