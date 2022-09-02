import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostThread } from "../redux/Thread";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Sidepanel from "../components/Sidepanel";
export default function PostThread() {

  const dispatch = useDispatch();
  const { postId } = useParams();
  const postThread = useSelector(state => state.thread);

  React.useEffect(() => {
    dispatch(fetchPostThread(postId))
  },[dispatch, postId])
  const upvotes = postThread.upvotes > 1000 ? Math.round(postThread.upvotes /100) / 10 : postThread.upvotes;

  return (
    <div>
    <div className="flex justify-center mt-4 gap-8">
      <Sidepanel />
      <div className="flex flex-col w-7/12 border border-black p-4 gap-4">
        <div className="flex gap-2">
          <div className="flex items-center text-zinc-500 bg-gray-300 rounded-lg px-2 text-xs">Home</div>
          <div className="text-gray-500">/</div>
          <div className="flex items-center text-zinc-500 bg-gray-300 rounded-lg px-2 text-xs">Subreddit</div>
          <div className="text-gray-500">/</div>
          <div className="flex items-center text-zinc-500 bg-gray-300 rounded-lg px-2 text-xs ">{postThread.subreddit}</div>
        </div>
      <div className="flex gap gap-5">
        <div className="border-r border-black pr-4 text-xs font-bold">
          <div>{upvotes}K </div>
          <div>{postThread.ratio * 100}%</div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <FontAwesomeIcon icon={faUser} className="bg-zinc-500 text-gray-300 rounded-full p-2"/>
              <div>u/{postThread.username}</div>
            </div>
            <div className="font-bold text-xl">
              {postThread.title}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}
