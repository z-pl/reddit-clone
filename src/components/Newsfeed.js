import React from "react"
import {useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { fetchPosts } from "../redux/PostsAPI";


import Post from "./Post";
import Loadingfeed from "./Loadingfeed";
import Sidepanel from "./Sidepanel";

export default function Newsfeed() {
  const dispatch = useDispatch();

  const posts = useSelector(state=> state.posts);
  const loading = useSelector(state=> state.loading);

  React.useEffect(() => {
    if (posts.length === 0)dispatch(fetchPosts());
  }, [])

  const allLoadingPosts = new Array(5).fill(0).map(() => {
    return <li key = {nanoid()}> <Loadingfeed /> </li>
  })

  const allPosts = posts.map((post) => {
    return (
        <li key={nanoid()}>
          <Link  to={`/post/${post.data.id}`}>
            <Post
              title={post.data.title}
              subreddit={post.data.subreddit}
              username={post.data.author}
              totalComments={post.data.num_comments}
              upvotes={post.data.ups}
              imgURL={post.data.thumbnail}
            />
          </Link>
        </li>
    )
  })

  return (
    <div className="flex justify-center mt-4 sm:flex sm:justify-center sm:mt-4 sm:gap-8">
      <Sidepanel />
      <ul className="flex w-full flex-col gap-3 p-4 sm:flex sm:flex-col sm:w-7/12 sm:gap-3">
        {loading ? allLoadingPosts : allPosts}
      </ul>
    </div>
  )
}
