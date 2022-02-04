import postService from "../services/post-service";
import { CREATE_POST, GET_POSTS, SET_MESSAGE, GET_POST_DETAIL } from "./types";

export const createPostAction = (data) => {
  return (dispatch) => {
    console.log("data", data);
    postService.createPost(data).then(
      (res) =>
        dispatch({
          type: CREATE_POST,
          payload: res,
        }),

      //   return Promise.resolve();
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: SET_MESSAGE,
          payload: "error",
        });
      }
    );
  };
};

export const getPosts = () => {
  return (dispatch) => {
    postService.getPosts().then(
      (data) =>
        dispatch({
          type: GET_POSTS,
          payload: { posts: data },
        }),

      //   return Promise.resolve();
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: SET_MESSAGE,
          payload: "error",
        });
      }
    );
  };
};
export const getPostDetail = (id) => {
  return (dispatch) => {
    postService.getPostDetail(id).then(
      (data) =>
        dispatch({
          type: GET_POST_DETAIL,
          payload: { postData: data },
        }),

      //   return Promise.resolve();
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: SET_MESSAGE,
          payload: "error",
        });
      }
    );
  };
};
