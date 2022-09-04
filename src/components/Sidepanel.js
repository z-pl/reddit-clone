import React from "react";
import FilterPanel from "./FilterPanel";
import FeaturedPanel from "./FeaturedPanel";
import AdvertisementPanel from "./AdvertisementPanel";
export default function Sidepanel() {
  return (
    <div className="sm:w-3/12 sm:flex sm:flex-col sm:gap-4 z-10">
      <FilterPanel />
      <FeaturedPanel />
      <AdvertisementPanel />
    </div>
  )
}
