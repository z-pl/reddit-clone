import { connect, useSelector, useDispatch } from "react-redux";
import { toggleLoading } from "./loading";

export function fetchPostThread(postId) {

  async function getPostThread(dispatch) {
    dispatch(toggleLoading());
    const baseUrl = `https://www.reddit.com/${postId}.json`;
    const res = await fetch(baseUrl);
    const resData = await res.json();
    const data = {
      subreddit: resData[0].data.children[0].data.subreddit,
      upvotes: resData[0].data.children[0].data.ups,
      ratio: resData[0].data.children[0].data.upvote_ratio,
      username: resData[0].data.children[0].data.author,
      time: resData[0].data.children[0].data.created_utc,
      title: resData[0].data.children[0].data.title,
      comments: resData[1].data.children,
      imgUrl: resData[0].data.children[0].data.url_overridden_by_dest,
      containsImg: resData[0].data.children[0].data.preview !== undefined
    }

    dispatch({type: "FETCH_POST_THREAD", data: data })
    dispatch(toggleLoading());
  }
  return (dispatch) => {
    getPostThread(dispatch);
  }
}



export default function postThreadReducer(post=[], action) {
  switch(action.type) {
    case "FETCH_POST_THREAD":
      return action.data
    default:
      return post
  }
}
