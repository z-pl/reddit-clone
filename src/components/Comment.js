import React from "react";
import { nanoid } from "nanoid";
export default function Comment(props) {
  const {username, content, upvotes} = props;
  const newUpvotes = upvotes > 1000 ? Math.round(upvotes /100) / 10 : upvotes;

  return (
    <li key={nanoid()} className="flex flex-col pl-4 bg-gray-100 px-2 py-4 rounded-lg border-l-8 border-zinc-400 w-full">
      <div className="text-xs font-bold">{username}</div>
      <div className="text-sm width-full break-words">{content}</div>
      <div className="text-sm">{newUpvotes}K</div>
    </li>
  )
}
