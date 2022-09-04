import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faFire, faFileAlt, faChartBar, faChartLine } from "@fortawesome/fontawesome-free-solid";
import { useDispatch } from "react-redux";
import { fetchFilterPosts } from "../redux/PostsAPI";
import { fetchPosts } from "../redux/PostsAPI";
import { Link } from "react-router-dom";
export default function FilterPanel() {
  const dispatch = useDispatch();
  const handleFilterPosts = (e) => {
    if (e.target.id === "all-filter") dispatch(fetchPosts());
    else if  (e.target.id === "hot-filter") dispatch(fetchFilterPosts("hot"));
    else if  (e.target.id === "new-filter") dispatch(fetchFilterPosts("new"));
    else if  (e.target.id === "rising-filter") dispatch(fetchFilterPosts("rising"));
    else if  (e.target.id === "top-filter") dispatch(fetchFilterPosts("top"));
  }
  return (
    <div className="fixed bottom-0 flex justify-around bg-blue-400 w-full sm:bg-transparent sm:flex sm:flex-col sm:gap-6 sm:pl-4 sm:static">
      <div onClick={handleFilterPosts}>
        <input defaultChecked type="radio" id="all-filter" name="hosting" value="hosting-small" className="hidden peer" required  />
        <label htmlFor="all-filter" className="inline-flex px-3 justify-center rounded-sm sm:justify-start sm:rounded-lg sm:px-6 py-2 w-10/12 peer-checked:bg-blue-300 peer-checked:sm:bg-zinc-300 peer-checked:text-gray-700 hover:cursor-pointer">
          <div className="flex gap-3">
            <FontAwesomeIcon icon={faGlobe} size="xl" className="text-black sm:text-gray-500"/>
            <span className="text-black hidden sm:inline">All</span>
          </div>
        </label>
      </div>
      <div onClick={handleFilterPosts}>
        <input type="radio" id="hot-filter" name="hosting" value="hosting-small" className="hidden peer"/>
        <label htmlFor="hot-filter" className="inline-flex px-3 justify-center rounded-sm sm:justify-start sm:rounded-lg sm:px-6 py-2 w-10/12 peer-checked:bg-blue-300 peer-checked:sm:bg-zinc-300 peer-checked:text-gray-700 hover:cursor-pointer">
          <div className="flex gap-3">
          <FontAwesomeIcon icon={faFire} size="xl" className="text-black sm:text-gray-500"/>
          <span className="text-black hidden sm:inline">Hot</span>
          </div>
        </label>
      </div>
      <div onClick={handleFilterPosts}>
        <input type="radio" id="new-filter" name="hosting" value="hosting-small" className="hidden peer"/>
        <label htmlFor="new-filter" className="inline-flex px-3 justify-center rounded-sm sm:justify-start sm:rounded-lg sm:px-6 py-2 w-10/12 peer-checked:bg-blue-300 peer-checked:sm:bg-zinc-300 peer-checked:text-gray-700 hover:cursor-pointer">
          <div className="flex gap-3">
          <FontAwesomeIcon icon={faFileAlt} size="xl" className="text-black sm:text-gray-500" />
          <span className="text-black hidden sm:inline">New</span>
          </div>
        </label>
      </div>
      <div onClick={handleFilterPosts}>
        <input type="radio" id="rising-filter" name="hosting" value="hosting-small" className="hidden peer" required />
        <label htmlFor="rising-filter" className="inline-flex px-3 justify-center rounded-sm sm:justify-start sm:rounded-lg sm:px-6 py-2 w-10/12 peer-checked:bg-blue-300 peer-checked:sm:bg-zinc-300 peer-checked:text-gray-700 hover:cursor-pointer">
          <div className="flex gap-3">
          <FontAwesomeIcon icon={faChartLine} size="xl"  className="text-black sm:text-gray-500"/>
          <span className="text-black hidden sm:inline">Rising</span>
          </div>
        </label>
      </div>
      <div onClick={handleFilterPosts}>
        <input type="radio" id="top-filter" name="hosting" value="hosting-small" className="hidden peer" required />
        <label htmlFor="top-filter" className="inline-flex px-3 justify-center rounded-sm sm:justify-start sm:rounded-lg sm:px-6 py-2 w-10/12 peer-checked:bg-blue-300 peer-checked:sm:bg-zinc-300 peer-checked:text-gray-700 hover:cursor-pointer">
          <div className="flex gap-3">
          <FontAwesomeIcon icon={faChartBar} size="xl"  className="text-black sm:text-gray-500"/>
        <span className="text-black hidden sm:inline">Top</span>
          </div>
        </label>
      </div>
    </div>
  )
}
