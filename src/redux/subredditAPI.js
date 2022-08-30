export function fetchTopSubReddits() {
  async function getSubreddit(subreddit, dispatch) {
    const baseUrl = `https://www.reddit.com/r/${subreddit}.json`;
    const res = await fetch(baseUrl);
    const resData = await res.json();

    const newData = {
      id: resData.data.children[0].data.subreddit_id,
      title: resData.data.children[0].data.subreddit,
      subCount: resData.data.children[0].data.subreddit_subscribers
    }
    dispatch({type: "FETCH_INIT_SUBREDDITS", data: newData })
  }

  return (dispatch) => {
    getSubreddit("AskReddit", dispatch);
    getSubreddit("antiwork", dispatch);
    getSubreddit("mildyinfuriating", dispatch);
    getSubreddit("funny", dispatch);
    getSubreddit("MadeMeSmile", dispatch);
    getSubreddit("worldnews", dispatch);
    getSubreddit("awww", dispatch);
    getSubreddit("gaming", dispatch);
  }
}




export default function subredditReducer(subreddits=[], action) {

  switch(action.type) {
    case "FETCH_INIT_SUBREDDITS":
      return [...subreddits, action.data]
    default:
      return subreddits
  }
}
