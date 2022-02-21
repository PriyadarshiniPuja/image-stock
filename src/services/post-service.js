import axios from "axios";

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
  getUserDetail() {
    const user = JSON.parse(localStorage.getItem("user"));
    return axios
      .get(API_URL + `user/${user.id}`, {
        headers: {
          Authorization: `${user.token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  }
  createPost(body) {
    console.log("data", body);
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

  sendComment(body) {
    var token = JSON.parse(localStorage.getItem("user")).token;
    return axios
      .post(API_URL + `post/${"62020fb0ff965af351de0bc4"}/comment`, body, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  }

  deleteComment(postId, commentId) {
    var token = JSON.parse(localStorage.getItem("user")).token;
    return axios
      .delete(API_URL + `post/${postId}/comments/${commentId}`, {
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
