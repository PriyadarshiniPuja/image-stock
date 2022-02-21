import {
  CREATE_POST,
  GET_POSTS,
  GET_POST_DETAIL,
  GET_USER_DETAIL,
  LOADING,
  SEND_COMMENT,
  DELETE_COMMENT,
} from "../actions/types";

const initialState = {
  posts: [],
  postData: {},
};

export function posts(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: payload,
      };
    case CREATE_POST:
      return { post: payload };

    case GET_POSTS:
      return {
        ...state,
        posts: payload.posts,
      };

    case GET_POST_DETAIL:
      return { ...state, postData: payload.postData };
    case GET_USER_DETAIL:
      return { ...state, userDetail: payload.userDetail };
    case SEND_COMMENT:
      return { ...state };
    case DELETE_COMMENT:
      return { ...state };
    default:
      return state;
  }
}
