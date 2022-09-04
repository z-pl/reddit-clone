import { connect, useSelector, useDispatch } from "react-redux";
import { toggleLoading } from "./loading";
export function fetchPosts() {

  return (dispatch) => {
    dispatch(toggleLoading())
    const baseUrl = `https://www.reddit.com/r/popular.json`;

    fetch(baseUrl)
    .then(res => res.json())
    .then(payload => {
      const data = payload.data.children
      dispatch({type: "FETCH_INIT_POSTS", data})
      dispatch(toggleLoading())
    })
  }
}

export function fetchQueryPosts(query) {
  return (dispatch) => {
    dispatch(toggleLoading())
    const baseUrl = `https://www.reddit.com/search/.json?q=${query}`;
    fetch(baseUrl)
    .then(res => res.json())
    .then(payload => {
      const data = payload.data.children
      dispatch({type: "FETCH_QUERY_POSTS", data})
      dispatch(toggleLoading())
    })
  }
}

export function fetchFilterPosts(filter) {
  return (dispatch) => {
    dispatch(toggleLoading())
    const baseUrl = `https://www.reddit.com/${filter}/.json`;
    fetch(baseUrl)
    .then(res => res.json())
    .then(payload => {
      const data = payload.data.children
      dispatch({type: "FETCH_FILTER_POSTS", data})
      dispatch(toggleLoading())
    })
  }
}

export function fetchSubredditPosts(subreddit) {
  return (dispatch) => {
    const baseUrl = `https://www.reddit.com/r/${subreddit}/.json`;
    fetch(baseUrl)
    .then(res => res.json())
    .then(payload => {
      const data = payload.data.children
      dispatch({type: "FETCH_SUBREDDIT_POSTS", data})
    })
  }
}

export default function redditReducer(posts=[], action) {
  switch(action.type) {
    case "FETCH_INIT_POSTS":
      return action.data
    case "FETCH_QUERY_POSTS":
      return action.data
    case "FETCH_FILTER_POSTS":
      return action.data
    case "FETCH_SUBREDDIT_POSTS":
      return action.data
    default:
      return posts
  }
}
