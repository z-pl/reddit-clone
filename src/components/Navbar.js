import React from "react"
import Searchbar from "./Searchbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedditAlien} from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <Link to ="/">
      <div className="bg-blue-400 p-4 flex justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2 text-white">
        <FontAwesomeIcon size="2xl" icon={faRedditAlien} />
        <h2 className="text-2xl font-bold"><span className="text-black">Simple</span>Reddit</h2>
        </div>
        <Searchbar />
      </div>
    </Link>
  )
}
