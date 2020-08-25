import React, { Component } from "react";
import "./Login.css";
//redux
import Particles from "react-particles-js";
import {
  Input,
  Button,
  Form,
  Layout,
  Row,
  Alert,
  Checkbox,
  Tooltip,
  Col,
} from "antd";
import { connect } from "react-redux";
import { loginUser, getUserData } from "../redux/actions/actionAuth";
import {
  UserOutlined,
  LockOutlined,
  InfoCircleOutlined,
  MailOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import { bindActionCreators } from "redux";

const params = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 200,
      },
    },
  },
};

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

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
    loading: false,
    login: null,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.login !== this.state.login) {
      this.setState({ login: nextProps.login }, () => {
        if (this.state.login.status === "SUCCESS") {
          this.props.history.push("/");
          this.props.getUserData();
        } else {
          this.setState({ loading: false });
        }
      });
    }
  }

  handleSubmit = (e) => {
    // e.preventDefault();
    console.log("Click");
    if (this.state.email.length > 0) {
      this.setState({ loading: true }, () => {
        let userData = {
          email: this.state.email,
          password: this.state.password,
        };
        this.props.loginUser(userData, this.props.history);
      });
    }
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
                value={this.state.email}
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
                style={{ width: "400px" }}
                prefix={<KeyOutlined />}
                type="password"
                name="password"
                placeholder="Password"
                size="large"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Item>

            <Row justify="space-between">
              <Col>
                {/* <Checkbox onChange={onRememberChange}>Remember me</Checkbox> */}
              </Col>
              <Col>
                <Button
                  htmlType="submit"
                  style={{ color: "#fff" }}
                  loading={this.state.loading}
                  // onClick={this.handleSubmit}
                >
                  Login
                </Button>
              </Col>
            </Row>
            <div className="form-group">
              <a
                href="/signup"
                onClick={() => this.props.history.push("/signup")}
              >
                Don't have an Account? Signup
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
  return bindActionCreators({ loginUser, getUserData }, dispatch);
}

function mapStateToProps({ login }) {
  return { login };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

//  <div className="bg container-fluid">
//         <div className="row">
//           <div className="col-md-4 col-sm-4 col-xs-12" />
//           <div className="col-md-4 col-sm-4 col-xs-12">
//             <form className="form-container">
//               <h1 style={{ textAlign: "center" }}> Login</h1>
//               <div className="form-group">
//                 <label htmlFor="exampleInputEmail1">Email address</label>

// <Input
//   name="email"
//   type="email"
//   prefix={
//     <UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
//       <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
//   }
//   placeholder="Email"
//   size="large"
//   value={this.state.email}
//   onChange={this.handleChange}
// />
//               </div>
//               <div className="form-group">
// <Input
//   prefix={
//     <LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />
//     <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
//   }
//   type="password"
//   name="password"
//   placeholder="Password"
//   size="large"
//   value={this.state.password}
//   onChange={this.handleChange}
// />
//               </div>
//               <div className="form-group">
//                 <a href="#">Forgote Password?</a>
//               </div>
//               <div>
//                 <span style={{ color: "red" }}>
//                   {this.props.login && this.props.login.status !== "SUCCESS"
//                     ? "Email or Password Error"
//                     : ""}
//                 </span>
//                 <Button
//                   type="submit"
//                   className="btn btn-success btn-block"
//                   loading={this.state.loading}
//                   onClick={this.handleSubmit}
//                 >
//                   Login
//                 </Button>
// <div className="form-group">
//   <a
//     href="#"
//     onClick={() => this.props.history.push("/signup")}
//   >
//     Don't have an Account? Signup
//   </a>
// </div>
//               </div>
//             </form>
//           </div>
//           <div className="col-md-4 col-sm-4 col-xs-12" />
//         </div>
//       </div>
//     );
