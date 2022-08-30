import { connect, useSelector, useDispatch } from "react-redux";
import { toggleLoading } from "./loading";
export function fetchInitPosts() {

  return (dispatch) => {
    dispatch(toggleLoading())
    console.log("ping")
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



export default function redditReducer(posts=[], action) {

  switch(action.type) {
    case "FETCH_INIT_POSTS":
      return action.data
    default:
      return posts
  }
}
