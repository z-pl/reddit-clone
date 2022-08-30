import React from "react"
import { connect, useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import { nanoid } from "nanoid";
import Loadingfeed from "./Loadingfeed";
import Sidepanel from "./Sidepanel";
export default function Newsfeed() {

  const posts = useSelector(state=> state.reddit);
  const loading = useSelector(state=> state.loading);
  const allLoadingPosts = new Array(5).fill(0).map(() => {
    return <li key = {nanoid()}> <Loadingfeed /> </li>
  })

  const allPosts = posts.map((post) => {
    return (
      <li key={nanoid()}>
        <Post
          title={post.data.title}
          subreddit={post.data.subreddit}
          username={post.data.author}
          totalComments={post.data.num_comments}
          upvotes={post.data.ups}
          imgURL={post.data.thumbnail}
        />
      </li>
    )
  })

  return (
    <div className="flex justify-center mt-4 gap-8">
      <Sidepanel />
      <ul className="flex flex-col w-7/12 gap-3" >
        {loading ? allLoadingPosts : allPosts}
      </ul>
    </div>
  )
}
