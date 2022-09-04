import React from "react";

export default function Loadingfeed() {
  return (
    <div className="p-2 border border-white bg-white flex gap-4 rounded-lg h-44 grow">
      <div className="flex flex-col w-full gap-3">
        <div className="flex items-center gap-4 w-full">
          <div className="header h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="header h-3 w-3/12 bg-gray-200 rounded animate-pulse"></div>
          <div className="header h-3 w-3/12 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="content h-3 w-12/12 bg-gray-200 rounded animate-pulse"></div>
          <div className="content h-3 w-12/12 bg-gray-200 rounded animate-pulse"></div>
          <div className="content h-3 w-12/12 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="buttons flex gap-2 mt-auto">
          <div className="content h-4 w-2/12 bg-gray-200 rounded animate-pulse"></div>
          <div className="content h-4 w-2/12 bg-gray-200 rounded animate-pulse"></div>
          <div className="content h-4 w-2/12 bg-gray-200  rounded animate-pulse"></div>
        </div>
      </div>
      <div className="img h-20 w-4/12 bg-gray-200 rounded mx-0 my-auto"></div>
    </div>
  )

}
