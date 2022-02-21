import React, { Component } from "react";
import {
  Input,
  Grid,
  Checkbox,
  Card,
  Button,
  FormControl,
  InputLabel,
  CardMedia,
} from "@material-ui/core";

import AuthService from "../../services/auth-service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  // if (!isEmail(value)) {
  //     return (
  //         <div className="alert alert-danger" role="alert">
  //             This is not a valid email.
  //         </div>
  //     );
  // }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    // this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    // this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      dob: "",
      mobile: "",
      email: "",
      password: "",
      successful: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    // this.form.va;

    // if (this.checkBtn.context._errors.length === 0) {
    AuthService.register(
      this.state.firstName,
      this.state.lastName,
      this.state.dob,
      this.state.mobile,
      this.state.email,
      this.state.password
    ).then(
      (response) => {
        this.setState({
          message: response.data.message,
          successful: true,
        });
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage,
        });
      }
    );
    // }
  }

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
        <Grid container justify="center">
          <Card className="card card-container">
            <Grid container justify="center">
              <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card"
              />
            </Grid>

            <form
              onSubmit={this.handleRegister}
              ref={(c) => {
                this.form = c;
              }}
            >
              {!this.state.successful && (
                <div
                  style={{
                    width: "500px",
                  }}
                >
                  <Grid container>
                    <Grid md={6}>
                      <FormControl fullWidth>
                        <InputLabel htmlFor="firstName">FirstName</InputLabel>
                        <Input
                          id="firstName"
                          type="text"
                          value={this.state.firstName}
                          onChange={(e) => {
                            this.setState({ firstName: e.target.value });
                          }}
                        />
                      </FormControl>
                    </Grid>
                    <Grid md={6}>
                      <FormControl fullWidth>
                        <InputLabel htmlFor="lastName">LastName</InputLabel>
                        <Input
                          id="lastName"
                          type="text"
                          value={this.state.lastName}
                          onChange={(e) => {
                            this.setState({ lastName: e.target.value });
                          }}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                      id="email"
                      type="text"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      validations={[required, email]}
                    />
                  </FormControl>
                  <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="dob">DOB</InputLabel>
                    <Input
                      id="dob"
                      type="text"
                      value={this.state.dob}
                      onChange={(e) => {
                        this.setState({ dob: e.target.value });
                      }}
                    />
                  </FormControl>
                  <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="mobile">Mobile</InputLabel>
                    <Input
                      id="mobile"
                      type="text"
                      value={this.state.mobile}
                      onChange={(e) => {
                        this.setState({ mobile: e.target.value });
                      }}
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
                      type="submit"
                      fullWidth
                      variant="contained"
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </div>
              )}

              {this.state.message && (
                <div className="form-group">
                  <div
                    className={
                      this.state.successful
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                    role="alert"
                  >
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
