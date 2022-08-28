import React from "react"
import Searchbar from "./Searchbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedditAlien} from '@fortawesome/free-brands-svg-icons'


export default function Navbar() {
  return (
    <div className="bg-blue-400 p-4 flex justify-between">
      <div className="flex items-center gap-2 text-white">
        <FontAwesomeIcon size="2xl" icon={faRedditAlien} />
        <h2 className="text-2xl font-bold"><span className="text-black">Simple</span>Reddit</h2>
      </div>
      <Searchbar />
    </div>
  )
}
