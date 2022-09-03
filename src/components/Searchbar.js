import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { useDispatch } from "react-redux";
import { fetchQueryPosts } from "../redux/PostsAPI";
import { Link } from "react-router-dom";
export default function Searchbar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => setQuery(event.target.value)

  const handleSearch = () => {
    dispatch(fetchQueryPosts(query));
  }
  return (
    <div className="bg-white px-3 rounded-lg flex items-center justify-between w-4/12 gap-3">
      <Link to={`query/${query}`}>
        <FontAwesomeIcon  icon={faSearch} onClick={handleSearch}/>
      </Link>
      <input className= "border-0 w-full focus:outline-0" id="query" value={query} onChange={handleInputChange} placeholder="search">
      </input>
    </div>
  )
}
