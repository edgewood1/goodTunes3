import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import API from "../utils/API";
import {Container, Row, Input, LogButton} from '../assets_css/login_css'
import {connect } from 'react-redux';
import {login2} from '../actions'

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.setState({
      username: "",
      password: ""
    });
    var data = {
      username: this.state.username,
      password: this.state.password, 
      event: event.target.value
    };

    console.log(event.target.value)
    this.props.login2(data)
    
  };

  googleLogin = e => {
    e.preventDefault();
    console.log("hit");
    axios
      .get("/auth/google", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(function(response) {
        console.log(response);
      });
  };

  // getTunes = id => {
  //   API.getSavedTunes(id).then(res => {
  //     var message;
  //     res.data.message
  //       ? (message = res.data.message)
  //       : (message = "You have " + res.data.length + " saved tunes.");
  //     this.props.changeState({
  //       message: message,
  //       login: true,
  //       id: id,
  //       logInShow: 0,
  //       allTunesShow: 0,
  //       userTunes: res.data
  //     });
  //   });
  // };

 

  render(props) {
    console.log(this.props )
    return (
      <Container>
        <form>
          <Row>
            <label htmlFor="username">Username: </label>
            <Input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </Row>
          <Row>
            <label htmlFor="password">Password: </label>
            <Input
              type="text"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </Row>
          {/* login */}
          <Row>
            <LogButton
              value="Login"
              onClick={this.handleLogin}         
            >
              Login
            </LogButton>
            {/* register */}
            <LogButton
              value="Register"
              onClick={this.handleLogin}
            >
              Register
            </LogButton>
          </Row>

          <Row>
     
          </Row>
        </form>
      </Container>
    );
  }
}

 
const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps, {login2})(Login)