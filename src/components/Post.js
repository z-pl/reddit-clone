import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowAltCircleDown, faArrowUp, faArrowDown } from "@fortawesome/fontawesome-free-solid";

export default function Post(props) {

  const upvotes = props.upvotes > 1000 ? Math.round(props.upvotes /100) / 10 : props.upvotes;
  return (
    <div className="m-4 p-2 border border-black flex">
      <div className="flex flex-col justify-center gap-1">
        <FontAwesomeIcon className="text-red-blue" icon={faArrowUp} size="xl" />
        <div className="font-bold">{upvotes}K</div>
        <FontAwesomeIcon icon={faArrowDown} size="xl"/>
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
      <img src={props.imgURL} alt="img" />
      {/* <h1>{props.title}</h1>
      <h1>{props.username}</h1>
      <h1>{props.totalComments}</h1>
      <h1>{props.upvotes}</h1>
       */}
    </div>
  )
}
