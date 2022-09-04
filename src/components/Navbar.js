import React from "react"
import Searchbar from "./Searchbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedditAlien} from '@fortawesome/free-brands-svg-icons'
import { Link, useLocation } from "react-router-dom"
import { useDispatch} from "react-redux"
import { fetchPosts } from "../redux/PostsAPI"

export default function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleHeaderClick = () => {
    if (location.pathname === "/") dispatch(fetchPosts());
  }

  return (
      <div className="bg-blue-400 p-4 flex justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2 text-white">
        <Link to="/">
          <div className="flex gap-2">
            <FontAwesomeIcon size="2xl" icon={faRedditAlien} />
            <h2 className="text-2xl font-bold" onClick={handleHeaderClick}><span className="text-black">Simple</span>Reddit</h2>
          </div>
        </Link>
        </div>
        <Searchbar />
      </div>
  )
}
