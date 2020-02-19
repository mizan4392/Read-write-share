import React, { Component } from 'react'
import './Signup.css'
import { Input, Icon } from 'antd'


class Signup extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        userName: '',
        errors: {}
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({ errors: nextProps.UI.errors })
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ loading: true })

        let newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            userName: this.state.userName
        }
        this.props.signupUser(newUserData, this.props.history)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className='bg container-fluid'>
                <div className='row'>
                    <div className='col-md-4 col-sm-4 col-xs-12' />
                    <div className='col-md-4 col-sm-4 col-xs-12'>
                        <form className='form-container' onSubmit={this.handleSubmit} style={{ marginTop: '20%' }}>
                            <h1 style={{ textAlign: 'center' }}> SignUp</h1>
                            <div className='form-group'>
                                <label htmlFor='exampleInputEmail1'>Email address</label>

                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />

                                {this.state.errors.userName ? (
                                    <span style={{ color: 'red' }}>
                                        {this.state.errors.userName}
                                    </span>
                                ) : (
                                        <span />
                                    )}
                            </div>
                            <div className='form-group'>
                                <label htmlFor='exampleInputEmail1'>Email address</label>
                                <Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="email"
                                    placeholder="Email"
                                />
                                {this.state.errors.email ? (
                                    <span style={{ color: 'red' }}>
                                        {this.state.errors.email}
                                    </span>
                                ) : (
                                        <span />
                                    )}
                            </div>
                            <div className='form-group'>
                                <label htmlFor='exampleInputPassword1'>Password</label>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />
                                {this.state.errors.password ? (
                                    <span style={{ color: 'red' }}>
                                        {this.state.errors.password}
                                    </span>
                                ) : (
                                        <span />
                                    )}
                            </div>
                            <div className='form-group'>
                                <label htmlFor='exampleInputPassword1'>Password</label>


                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <button type='submit' className='btn btn-success btn-block'>
                                SignUp
              </button>
                        </form>
                    </div>
                    <div className='col-md-4 col-sm-4 col-xs-12' />
                </div>
            </div>
        )
    }
}


export default Signup