import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/";

class AuthService {
    login(email, password) {
        console.log('in login', email, password);
        return axios
            .post(API_URL + "user/login", {email, password })
            .then((response) => {
                console.log('response', response);
                if (response.data) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password,
        });
    }
}

export default new AuthService();