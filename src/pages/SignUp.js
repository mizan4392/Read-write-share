import React, { Component } from "react";
import "./Login.css";
//redux
import Particles from 'react-particles-js'
import { Input, Icon } from "antd";



class Signup extends Component {
    state = {
        full_name: "",
        email: "",
        password: "",
        confirm_password: "",

    };



    handleSubmit = e => {
        e.preventDefault();
        // let userData = {
        //     email: this.state.email,
        //     password: this.state.password
        // };

        // this.props.loginUser(userData, this.props.history);
        console.log(this.state)
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
                        <form className="form-container"  >

                            <h1 style={{ textAlign: 'center' }}> Signup</h1>
                            <div className="form-group">
                                {/* <label htmlFor="exampleInputEmail1">Email address</label> */}

                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Full Name"
                                    size="large"
                                    name="full_name"
                                    type="text"
                                    onChange={this.handleChange}
                                />

                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="exampleInputEmail1">Email address</label> */}

                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Email"
                                    size="large"
                                    name="email"
                                    type="email"
                                    onChange={this.handleChange}
                                />

                            </div>
                            <div className="form-group">
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    size="large"
                                    name="password"
                                    type="password"
                                    onChange={this.handleChange}
                                />

                            </div>
                            <div className="form-group">
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Confirm Password"
                                    size="large"
                                    name="confirm_password"
                                    type="password"
                                    onChange={this.handleChange}
                                />

                            </div>

                            <div >
                                <button type="submit" className="btn btn-success btn-block" onClick={this.handleSubmit} >
                                    Signup
                         </button>
                                <div className="form-group">
                                    <a href='#' onClick={() => this.props.history.push('/login')}>Already have an Account? Login</a>
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

export default Signup;