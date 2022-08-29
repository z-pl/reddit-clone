import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowAltCircleDown, faArrowUp, faArrowDown } from "@fortawesome/fontawesome-free-solid";
import { faSleigh } from "@fortawesome/free-solid-svg-icons";

export default function Post(props) {

  const upvotes = props.upvotes > 1000 ? Math.round(props.upvotes /100) / 10 : props.upvotes;
  return (
    <div className="p-2 border border-white bg-white flex gap-4 rounded-lg">
      <div className="flex flex-col justify-center gap-1">
        <FontAwesomeIcon className="text-green-400" icon={faArrowUp} size="xl" />
        <div className="font-bold text-blue-400">{upvotes}K</div>
        <FontAwesomeIcon className="text-red-500" icon={faArrowDown} size="xl"/>
      </div>
      <div>
        <div>
          <span className="font-bold text-sm"> r/{props.subreddit} &#183; </span>
          <span className="font-normal text-xs">Posted by u/{props.username}</span>
        </div>
        <div>
          {props.title}
        </div>
      </div>
      {(props.imgURL !== "self" && props.imgURL !== "spoiler" && props.imgURL !== "nsfw" && props.imgURL !== "default")
      && <img src={props.imgURL} alt="img" className="align-self-end ml-auto w-3/12 rounded-lg"/>}
    </div>
  )
}
