import React from "react"
import { connect, useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import { nanoid } from "nanoid";
export default function Newsfeed() {

  const posts = useSelector(state=> state.reddit);
  console.log(posts)
  const allPosts = posts.map((post) => {
    return (
      <li key={nanoid()}>
        <Post
          title={post.data.title}
          subreddit={post.data.subreddit}
          username={post.data.author}
          totalComments={post.data.num_comments}
          upvotes={post.data.ups}
          imgURL={post.data.thumbnail || ""}
        />
      </li>

    )
  })
  return (
    <div>
      <h1>Content goes here</h1>
      <ul className="flex flex-col w-8/12" >
        {allPosts}
      </ul>
    </div>
  )
}
