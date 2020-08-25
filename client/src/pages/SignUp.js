import React, { Component } from "react";
import "./Login.css";
//redux
import Particles from "react-particles-js";
import { Input, Button, Layout, Form, Row, Col } from "antd";
import { signupUser } from "../redux/actions/actionAuth";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

const style = {
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

class Signup extends Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    confirm_password: "",
    signup: null,
    loading: false,
    error: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.signup !== this.state.signup) {
      this.setState({ signup: nextProps.signup }, () => {
        if (this.state.signup.status === "SUCCESS") {
          this.props.history.push("/login");
        } else {
          this.setState({ loading: false });
        }
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let userData = {
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
      gender: "male",
    };
    if (this.state.password !== this.state.confirm_password) {
      this.setState({ error: true });
    } else {
      this.setState({ loading: true }, () => {
        this.props.signupUser(userData);
      });
    }

    // console.log(this.state)
  };
  //setting the form value to state
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;

    return (
      <Layout style={style.container}>
        <h2>Read Write & Share</h2>
        <div style={{ background: "#fff", padding: "20px" }}>
          <Form name="login" onFinish={this.handleSubmit}>
            <Form.Item
              style={{ width: "400px" }}
              name="username"
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
                onChange={this.handleChange}
              />
            </Form.Item>

            <Form.Item
              style={{ width: "400px" }}
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your  email!",
                },
              ]}
            >
              <Input
                prefix={
                  <MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                  // <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
                size="large"
                name="email"
                type="email"
                onChange={this.handleChange}
              />
            </Form.Item>

            <Form.Item
              style={{ width: "400px" }}
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                prefix={
                  <LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                  // <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
                size="large"
                name="password"
                type="password"
                onChange={this.handleChange}
              />
            </Form.Item>

            <Form.Item
              style={{ width: "400px" }}
              name="confirm_password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                prefix={
                  <UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                  // <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Confirm Password"
                size="large"
                name="confirm_password"
                type="password"
                onChange={this.handleChange}
              />
            </Form.Item>
            <span style={{ color: "red" }}>
              {this.state.error
                ? "Password and Confirm Password not matched"
                : ""}
            </span>
            <span style={{ color: "red" }}>
              {this.props.login && this.props.login.status !== "SUCCESS"
                ? "Email already taken"
                : ""}
            </span>

            <Row justify="space-between">
              <Col>
                {/* <Checkbox onChange={onRememberChange}>Remember me</Checkbox> */}
              </Col>
              <Col>
                <Button
                  htmlType="submit"
                  type="submit"
                  onClick={this.handleSubmit}
                  loading={this.state.loading}
                >
                  Signup
                </Button>
              </Col>
            </Row>
            <div className="form-group">
              <a
                href="/login"
                onClick={() => this.props.history.push("/login")}
              >
                Already have an Account? Login
              </a>
            </div>

            {/* {error ? (
              <Alert
                style={{ marginTop: "20px" }}
                message={error}
                type="error"
              />
            ) : null} */}
          </Form>
        </div>
      </Layout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signupUser }, dispatch);
}

function mapStateToProps({ signup }) {
  return { signup };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

// return (

// <Layout style={style.container}>
//   <div className="bg container-fluid" style={{ background: "#fff", padding: "20px" }}>
//     <div className="row">
//       <div className="col-md-4 col-sm-4 col-xs-12" />
//       <div className="col-md-4 col-sm-4 col-xs-12">
//         <form className="form-container">
//           <h1 style={{ textAlign: "center" }}> Signup</h1>
//           <div className="form-group">
//             {/* <label htmlFor="exampleInputEmail1">Email address</label> */}

// <Input
//   prefix={
//     <UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
//     // <Icon type="user" />
//   }
//   placeholder="Full Name"
//   size="large"
//   name="fullName"
//   type="text"
//   onChange={this.handleChange}
// />
//           </div>
//           <div className="form-group">
//             {/* <label htmlFor="exampleInputEmail1">Email address</label> */}

// <Input
//   prefix={
//     <UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
//     // <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
//   }
//   placeholder="Email"
//   size="large"
//   name="email"
//   type="email"
//   onChange={this.handleChange}
// />
//           </div>
//           <div className="form-group">
// <Input
//   prefix={
//     <UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
//     // <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
//   }
//   type="password"
//   placeholder="Password"
//   size="large"
//   name="password"
//   type="password"
//   onChange={this.handleChange}
// />
//           </div>
//           <div className="form-group">
// <Input
//   prefix={
//     <UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
//     // <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
//   }
//   type="password"
//   placeholder="Confirm Password"
//   size="large"
//   name="confirm_password"
//   type="password"
//   onChange={this.handleChange}
// />
//           </div>
// <span style={{ color: "red" }}>
//   {this.state.error
//     ? "Password and Confirm Password not matched"
//     : ""}
// </span>
// <span style={{ color: "red" }}>
//   {this.props.login && this.props.login.status !== "SUCCESS"
//     ? "Email already taken"
//     : ""}
// </span>
//           <div>
// <Button
//   type="submit"
//   className="btn btn-success btn-block"
//   onClick={this.handleSubmit}
//   loading={this.state.loading}
// >
//   Signup
// </Button>
// <div className="form-group">
//   <a
//     href="#"
//     onClick={() => this.props.history.push("/login")}
//   >
//     Already have an Account? Login
//   </a>
// </div>
//           </div>
//         </form>
//       </div>
//       <div className="col-md-4 col-sm-4 col-xs-12" />
//     </div>
//   </div>
// </Layout>
