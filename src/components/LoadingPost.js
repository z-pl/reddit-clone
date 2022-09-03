import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";
export default function LoadingPost() {
  return (
    <div className="flex flex-col w-7/12 border border-black p-4 gap-6">
    <div className="flex gap-2">
      <div className="flex items-center text-zinc-500 bg-gray-300 rounded-lg px-5 px-1 text-xs"></div>
      <div className="text-gray-500">/</div>
      <div className="flex items-center text-zinc-500 bg-gray-300 rounded-lg px-6 py-1 text-xs"></div>
      <div className="text-gray-500">/</div>
      <div className="flex items-center text-zinc-500 bg-gray-300 rounded-lg px-6 py-1 text-xs "></div>
    </div>
    <div className="flex gap gap-5">
    <div className="border-r-2 border-black pr-4 text-xs font-bold">
     <div className="flex items-center text-zinc-500 bg-gray-300 rounded-lg px-3 py-3 text-xs mb-2"></div>
     <div className="flex items-center text-zinc-500 bg-gray-300 rounded-lg px-3 py-3 text-xs"></div>
    </div>
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <FontAwesomeIcon icon={faUser} className="bg-zinc-500 text-gray-300 rounded-full p-2"/>
          <div className="flex items-center text-zinc-500 bg-gray-300 rounded-lg px-8 py-2 text-xs mb-2"></div>
        </div>
        <div className="flex items-center text-zinc-500 bg-gray-300 rounded-lg px-32 py-3 text-xs mb-2"></div>
      </div>
     </div>
    </div>
    <div>
      <h3 className="font-bold mb-4">Discussions</h3>
      <ul className="flex flex-col gap-4">
        <li key={nanoid()} className="flex flex-col pl-4 bg-gray-300 px-2 py-4 rounded-lg border-l-8 border-zinc-400 w-full gap-2">
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-2/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-10/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-10/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-10/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-1/12"></div>
        </li>

        <li key={nanoid()} className="flex flex-col pl-4 bg-gray-300 px-2 py-4 rounded-lg border-l-8 border-zinc-400 w-full gap-2">
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-2/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-10/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-10/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-10/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-1/12"></div>
        </li>

        <li key={nanoid()} className="flex flex-col pl-4 bg-gray-300 px-2 py-4 rounded-lg border-l-8 border-zinc-400 w-full gap-2">
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-2/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-10/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-10/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-10/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-1/12"></div>
        </li>

        <li key={nanoid()} className="flex flex-col pl-4 bg-gray-300 px-2 py-4 rounded-lg border-l-8 border-zinc-400 w-full gap-2">
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-2/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-10/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-10/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-10/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-1/12"></div>
        </li>

        <li key={nanoid()} className="flex flex-col pl-4 bg-gray-300 px-2 py-4 rounded-lg border-l-8 border-zinc-400 w-full gap-2">
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-2/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-10/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-10/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-10/12"></div>
          <div className="text-gray-800 bg-gray-400 rounded-lg px-6 py-2 text-xs w-1/12"></div>
        </li>

      </ul>
    </div>
  </div>
  )
}
