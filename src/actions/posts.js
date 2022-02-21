import postService from "../services/post-service";
import {
  CREATE_POST,
  GET_POSTS,
  SET_MESSAGE,
  GET_POST_DETAIL,
  GET_USER_DETAIL,
  LOADING,
  SEND_COMMENT,
  DELETE_COMMENT,
} from "./types";

export const createPostAction = (data) => {
  return (dispatch) => {
    console.log("data", data);
    dispatch({
      type: LOADING,
      payload: true,
    });
    postService.createPost(data).then(
      (res) =>
        dispatch({
          type: CREATE_POST,
          payload: res,
        }),
      dispatch({
        type: LOADING,
        payload: false,
      }),
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
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    );
  };
};

export const getPosts = () => {
  return (dispatch) => {
    dispatch({
      type: LOADING,
      payload: true,
    });
    postService.getPosts().then(
      (data) => {
        dispatch({
          type: GET_POSTS,
          payload: { posts: data },
        });
        dispatch({
          type: LOADING,
          payload: false,
        });
      },

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
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    );
  };
};
export const getPostDetail = (id) => {
  return (dispatch) => {
    dispatch({
      type: LOADING,
      payload: true,
    });
    postService.getPostDetail(id).then(
      (data) =>
        dispatch({
          type: GET_POST_DETAIL,
          payload: { postData: data },
        }),
      dispatch({
        type: LOADING,
        payload: false,
      }),
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
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    );
  };
};
export const getUserDetail = () => {
  return (dispatch) => {
    dispatch({
      type: LOADING,
      payload: true,
    });
    postService.getUserDetail().then(
      (data) =>
        dispatch({
          type: GET_USER_DETAIL,
          payload: { userDetail: data },
        }),
      dispatch({
        type: LOADING,
        payload: false,
      }),

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
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    );
  };
};

export const sendCommentAction = (data) => {
  return (dispatch) => {
    console.log("data", data);
    dispatch({
      type: LOADING,
      payload: true,
    });
    postService.sendComment(data).then(
      (res) =>
        dispatch({
          type: SEND_COMMENT,
          payload: res,
        }),
      dispatch({
        type: LOADING,
        payload: false,
      }),
      dispatch(getPostDetail(data.postId)),

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
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    );
  };
};

export const deleteComment = (postId, commentId) => {
  return (dispatch) => {
    console.log("data", postId, commentId);
    dispatch({
      type: LOADING,
      payload: true,
    });
    postService.deleteComment(postId, commentId).then(
      (res) =>
        dispatch({
          type: DELETE_COMMENT,
          payload: res,
        }),
      dispatch({
        type: LOADING,
        payload: false,
      }),
      dispatch(getPostDetail(postId)),

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
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    );
  };
};
