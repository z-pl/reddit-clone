import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { fetchSubredditPosts } from "../redux/PostsAPI";
import { Link } from "react-router-dom";
import LoadingFeatured from "./LoadingFeatured";
export default function FeaturedPanel() {
  const dispatch = useDispatch();

  const subreddits = useSelector(state=> state.subreddits);
  const loading = useSelector(state=> state.loading);
  const imgLinks = [
    "https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png",
    "https://styles.redditmedia.com/t5_2qh03/styles/communityIcon_1isvxgkk7hw51.png?width=256&s=b2c4017083ea0176a3dd4837f6e009bbc8384f15",
    "https://styles.redditmedia.com/t5_2qh3l/styles/communityIcon_fmygcobc22z81.png?width=256&s=20360f000285c26be3d504fdb0cc8e6d6d58289c",
    "https://b.thumbs.redditmedia.com/6EKfzU5PYmvE4USNgMZaBR6iCS5NnJ3YFTkZyPbXnZM.png",
    "https://styles.redditmedia.com/t5_2qh1o/styles/communityIcon_6fzlk8ukx6s51.jpg?width=256&format=pjpg&s=c3f5201f13951c0bd50e48d72adf698dcea49d13",
    "https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png",
    "https://b.thumbs.redditmedia.com/l_LTzMogi2fCDc6oEyijcHr0jVjABp5sjQDDL4QCnNo.png",
    "https://b.thumbs.redditmedia.com/6LXqqT3C0TSzXMKj6t23XDks2cCy8_kuLZ8Gs2129rU.png",

  ]

  const handleSubredditFilter = (title) => {
    dispatch(fetchSubredditPosts(title))
  }

  const allSubreddits = subreddits.map((subreddit, index) => {
    return (
      <Link to="/" key={nanoid()}>
        <li className="flex gap-2 cursor-pointer" onClick={() => handleSubredditFilter(subreddit.title)}>
          <img src={imgLinks[index]} alt="img" className="w-2/12 rounded-full"></img>
          <div>
            <p className="m-0 text-sm">r/{subreddit.title}</p>
            <p className="m-0 text-xs text-gray-500">{subreddit.subCount} subscribers</p>
          </div>
        </li>
      </Link>
    )
  })
  return (
    <div>
      {loading ? <LoadingFeatured /> :
      <div className="flex flex-col bg-white px-6 py-4 rounded-md">
        <h2 className="text-xs mb-2 border-b border-gray-400 font-bold pb-1 text-gray-400">FEATURED SUBREDDITS</h2>
        <ul className="flex flex-col gap-4">
          {allSubreddits}
        </ul>
      </div>}
    </div>
  )
}
