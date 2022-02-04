import React, { Component } from "react";
import {
  Input,
  Grid,
  Checkbox,
  Card,
  Button,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import history from "../services/history";
import AuthService from "../services/auth-service";
// import { Redirect } from "react-router-dom";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    // this.form.validateAll();

    // if (this.checkBtn.context._errors.length === 0) {
    AuthService.login(this.state.username, this.state.password).then(
      () => {
        this.setState({
          loading: false,
          message: "login successfully",
        });
        console.log("this.props", history);
        history.push("/posts");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage,
        });
      }
    );
    // } else {
    //     this.setState({
    //         loading: false
    //     });
    // }
  };

  render() {
    return (
      <div
        style={{
          marginTop: 20,
          padding: 30,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container justifyContent="center">
          <Card className="card card-container">
            <Grid container justifyContent="center">
              <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card"
              />
            </Grid>

            <form
              onSubmit={this.handleLogin}
              ref={(c) => {
                this.form = c;
              }}
            >
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  id="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
              </FormControl>

              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </FormControl>

              <Grid className="form-group">
                <Button
                  color="primary"
                  fullWidth
                  variant="contained"
                  primary="true"
                  type="submit"
                  disabled={this.state.loading}
                >
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </Button>
              </Grid>

              {this.state.message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {this.state.message}
                  </div>
                </div>
              )}
              <Checkbox
                style={{ display: "none" }}
                ref={(c) => {
                  this.checkBtn = c;
                }}
              />
            </form>
          </Card>
        </Grid>
      </div>
    );
  }
}
export default Login;
