import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faFire, faFileAlt, faChartBar, faChartLine } from "@fortawesome/fontawesome-free-solid";

export default function FilterPanel() {
  return (
    <div className="flex flex-col gap-6 pl-4">
      <div className="flex gap-3">
        <FontAwesomeIcon icon={faGlobe} size="xl" className="text-gray-400"/>
        <span>All</span>
      </div>
      <div className="flex gap-4">
        <FontAwesomeIcon icon={faFire} size="xl" className="text-gray-500"/>
        <span>Hot</span>
      </div>
      <div className="flex gap-4">
        <FontAwesomeIcon icon={faFileAlt} size="xl" className="text-gray-500" />
        <span>New</span>
      </div>
      <div className="flex gap-3">
        <FontAwesomeIcon icon={faChartLine} size="xl"  className="text-gray-500"/>
        <span>Rising</span>
      </div>
      <div className="flex gap-3">
        <FontAwesomeIcon icon={faChartBar} size="xl"  className="text-gray-500"/>
        <span>Top</span>
      </div>

    </div>
  )
}
