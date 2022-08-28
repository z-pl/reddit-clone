import React from "react"
import Searchbar from "./Searchbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedditAlien} from '@fortawesome/free-brands-svg-icons'


export default function Navbar() {
  return (
    <div className="bg-blue-400 p-4 flex justify-between">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faRedditAlien} />
        <h2 className="text-2xl">SimpleReddit</h2>
      </div>
      <Searchbar />
    </div>
  )
}
