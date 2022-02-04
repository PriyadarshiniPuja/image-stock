import axios from "axios";
import { TableBody } from "material-ui";

const API_URL = "http://localhost:8080/api/v1/";

class PostService {
  getPosts() {
    var token = JSON.parse(localStorage.getItem("user")).token;
    return axios
      .get(API_URL + "posts", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  }
  getPostDetail(id) {
    return axios
      .get(API_URL + `post/${id}`, {
        headers: {
          Authorization: `${JSON.parse(localStorage.getItem("user")).token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  }
  createPost(body) {
    console.log("data", TableBody);
    var token = JSON.parse(localStorage.getItem("user")).token;
    return axios
      .post(API_URL + "post", body, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  }
}

export default new PostService();
