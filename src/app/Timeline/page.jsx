"use client"

import { Handshake } from "lucide-react";
import { useState } from "react";

const TimeLine = () => {
  const [sortCondition, setSortCondition] = useState("All");

  const timeline = [
    {
      medium: "Call",
      name: "Nila",
      date: "March 29, 2026"
    },
    {
      medium: "Text",
      name: "Nila",
      date: "March 29, 2026"
    },
    {
      medium: "Video",
      name: "Nila",
      date: "March 29, 2026"
    },
  ]

  const handleFilter = e => {
    setSortCondition(e.target.value);
  }

  return (
    <div className="px-50 py-20 space-y-4">

      <p className="text-3xl ">Timeline</p>


      {/* dropdown */}
      <div>
        <select className="border border-black rounded-xl w-50 p-3" onChange={handleFilter} defaultValue="All" name="filterTimeline">
          <option value="All">All</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      {/* History */}
      <div className="flex items-center gap-3 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
        <div className="shrink-0">
          <Handshake
            size={28}
            strokeWidth={2.5}
            className="text-black fill-yellow-400"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-800">
            Meetup <span className="ml-1 font-normal text-slate-500">with Tom Baker</span>
          </p>

          <span className="text-xs text-slate-500">
            March 29, 2026
          </span>
        </div>
      </div>

    </div>
  );
};

export default TimeLine;