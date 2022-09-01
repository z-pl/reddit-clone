import React from "react";
import FilterPanel from "./FilterPanel";
import FeaturedPanel from "./FeaturedPanel";
import AdvertisementPanel from "./AdvertisementPanel";
export default function Sidepanel() {
  return (
    <div className="w-3/12 flex flex-col gap-4">
      <FilterPanel />
      <FeaturedPanel />
      <AdvertisementPanel />
    </div>
  )
}
