import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faFire, faFileAlt, faChartBar, faChartLine } from "@fortawesome/fontawesome-free-solid";
import { useDispatch } from "react-redux";
import { fetchFilterPosts } from "../redux/PostsAPI";
import { fetchPosts } from "../redux/PostsAPI";

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
    <div className="flex flex-col gap-6 pl-4">
      <div onClick={handleFilterPosts}>
        <input defaultChecked type="radio" id="all-filter" name="hosting" value="hosting-small" className="hidden peer" required  />
        <label htmlFor="all-filter" className="inline-flex rounded-lg px-6 py-1 text-gray-400 peer-checked:bg-zinc-300 peer-checked:text-gray-700">
          <div className="flex gap-3">
            <FontAwesomeIcon icon={faGlobe} size="xl"/>
            <span className="text-black">All</span>
          </div>
        </label>
      </div>

      <div onClick={handleFilterPosts}>
        <input type="radio" id="hot-filter" name="hosting" value="hosting-small" className="hidden peer"/>
        <label htmlFor="hot-filter" className="inline-flex rounded-lg px-6 py-1 peer-checked:bg-zinc-300 peer-checked:text-gray-700">
          <div className="flex gap-3">
          <FontAwesomeIcon icon={faFire} size="xl" className="text-gray-500"/>
          <span className="text-black">Hot</span>
          </div>
        </label>
      </div>

      <div onClick={handleFilterPosts}>
        <input type="radio" id="new-filter" name="hosting" value="hosting-small" className="hidden peer"/>
        <label htmlFor="new-filter" className="inline-flex rounded-lg px-6 py-1 peer-checked:bg-zinc-300 peer-checked:text-gray-700">
          <div className="flex gap-3">
          <FontAwesomeIcon icon={faFileAlt} size="xl" className="text-gray-500" />
          <span className="text-black">New</span>
          </div>
        </label>
      </div>

      <div onClick={handleFilterPosts}>
        <input type="radio" id="rising-filter" name="hosting" value="hosting-small" className="hidden peer" required />
        <label htmlFor="rising-filter" className="inline-flex rounded-lg px-6 py-1 peer-checked:bg-zinc-300 peer-checked:text-gray-700">
          <div className="flex gap-3">
          <FontAwesomeIcon icon={faChartLine} size="xl"  className="text-gray-500"/>
          <span className="text-black">Rising</span>
          </div>
        </label>
      </div>
      <div onClick={handleFilterPosts}>
        <input type="radio" id="top-filter" name="hosting" value="hosting-small" className="hidden peer" required />
        <label htmlFor="top-filter" className="inline-flex rounded-lg px-6 py-1 peer-checked:bg-zinc-300 peer-checked:text-gray-700">
          <div className="flex gap-3">
          <FontAwesomeIcon icon={faChartBar} size="xl"  className="text-gray-500"/>
        <span className="text-black">Top</span>
          </div>
        </label>
      </div>



    </div>
  )
}
