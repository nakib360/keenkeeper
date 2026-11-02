"use client"

import { Phone, MessageSquare, Video } from "lucide-react";
import { useEffect, useState } from "react";

const TimeLine = () => {
  const [sortCondition, setSortCondition] = useState("All");
  const [history, setHistory] = useState([]);
  const conditionalIcon = {
    Call: Phone,
    Text: MessageSquare,
    Video: Video
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timelineHistory") || "[]");
    const sortedData = sortCondition === "All" ? data : data.filter(i => i.medium === sortCondition);
    setHistory(sortedData);
  }, [sortCondition]);

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
      {
        history.length === 0 ? <div className="text-center py-10 text-gray-400">No Timeline found </div> : history?.map((his, idx) => {
          const Icon = conditionalIcon[his.medium];

          return (
            <div key={idx} className="flex items-center gap-3 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
              <div className="shrink-0">
                <Icon
                  size={28}
                  strokeWidth={2.5}
                  className="text-black fill-gray-200"
                />

              </div>

              <div className="flex flex-col">
                <p className="text-sm font-medium text-gray-800">
                  {his.medium} <span className="ml-1 font-normal text-slate-500">with {his.name}</span>
                </p>

                <span className="text-xs text-slate-500">
                  {his.date}
                </span>
              </div>
            </div>
          )
        })
      }

    </div>
  );
};

export default TimeLine;