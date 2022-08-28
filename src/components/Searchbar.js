import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/fontawesome-free-solid";

export default function Searchbar() {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => setQuery(event.target.value)

  return (
    <div className="bg-white px-3 rounded-lg flex items-center justify-between w-4/12 gap-3">
      <FontAwesomeIcon  icon={faSearch} />
      <input className= "border-0 w-full focus:outline-0" id="query" value={query} onChange={handleInputChange} placeholder="search">
      </input>
    </div>
  )
}
