import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "user/login", { email, password })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(firstName, lastName, dob, mobile, email, password) {
    return axios.post(API_URL + "user/signup", {
      firstName,
      lastName,
      dob,
      mobile,
      email,
      password,
    });
  }
}

export default new AuthService();
