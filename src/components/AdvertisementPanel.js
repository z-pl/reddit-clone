import React from "react";
import ad from "../images/ad.png"
export default function AdvertisementPanel() {
  return (
    <div className="flex flex-col bg-white px-6 py-4 rounded-md">
      <h2 className="text-xs mb-2 border-b border-gray-400 font-bold pb-1 text-gray-400">ADVERTISEMENT</h2>
      <img src={ad} alt="ad" />
    </div>
  )
}
