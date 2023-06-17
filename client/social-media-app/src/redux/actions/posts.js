import * as api from "../../api";

//Action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = {
      type: "FEATCH_ALL",
      payload: data || [],
    };

    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPosts(post);
    const action = {
      type: "CREATE",
      payload: data,
    };

    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = {
      type: "FEATCH_ALL",
      payload: data || [],
    };

    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = {
      type: "FEATCH_ALL",
      payload: data || [],
    };

    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = {
      type: "FEATCH_ALL",
      payload: data || [],
    };

    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
