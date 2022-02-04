import { CREATE_POST, GET_POSTS, GET_POST_DETAIL } from "../actions/types";

const initialState = {
  posts: [],
  postData: {},
};

export function posts(state = initialState, action) {
  const { type, payload } = action;

  console.log("payload", payload);
  switch (type) {
    case CREATE_POST:
      return { post: payload };

    case GET_POSTS:
      return {
        ...state,
        posts: payload.posts,
      };

    case GET_POST_DETAIL:
      return { ...state, postData: payload.postData };

    default:
      return state;
  }
}
