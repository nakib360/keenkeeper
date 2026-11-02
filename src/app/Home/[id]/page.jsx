import FriendsData from "@/app/lib/Friends.json";
import { Phone, MessageSquare, Video, BellRing, Archive, Trash2 } from "lucide-react";
import Image from "next/image";
import QuickCheckIn from "./QuickCheckIn";

const statusStyles = {
  overdue: "bg-red-100 text-red-600",
  "on-track": "bg-green-100 text-green-700",
};

const formatDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "—";

const UsersDetails = async ({ params }) => {
  const { id } = await params;
  const user = FriendsData.find((i) => parseInt(i?.id) === parseInt(id));

  if (!user) {
    return <div className="p-10 text-gray-500">User not found.</div>;
  }

  const statusClass = statusStyles[user?.status] ?? "bg-gray-100 text-gray-600";

  return (
    <div className="grid grid-cols-[repeat(15,minmax(0,1fr))] gap-4 bg-gray-50 py-20 px-50 min-h-screen">
      {/* Left column */}
      <div className="col-span-5 flex flex-col gap-3">
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
          <Image
            src={user?.picture}
            alt={user?.name ?? "User"}
            height={80}
            width={80}
            className="h-20 w-20 rounded-full object-cover"
          />
          <h2 className="mt-3 text-base font-semibold text-gray-800">
            {user?.name}
          </h2>

          <span
            className={`mt-2 px-3 py-0.5 rounded-full text-xs font-medium capitalize ${statusClass}`}
          >
            {user?.status?.replace("-", " ")}
          </span>

          <div className="mt-2 flex flex-wrap justify-center gap-1">
            {user?.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-green-50 text-green-700 text-[10px] font-medium uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {user?.bio && (
            <p className="mt-3 text-xs italic text-gray-500">`&#34;`<span>{user.bio}</span>`&#34;`</p>
          )}

          {user?.email && (
            <p className="mt-2 text-[11px] text-gray-400">{user.email}</p>
          )}
        </div>

        <button className="bg-white rounded-lg shadow-sm py-2 text-xs text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50">
          <BellRing size={14} /> Snooze 2 Weeks
        </button>
        <button className="bg-white rounded-lg shadow-sm py-2 text-xs text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50">
          <Archive size={14} /> Archive
        </button>
        <button className="bg-white rounded-lg shadow-sm py-2 text-xs text-red-500 flex items-center justify-center gap-2 hover:bg-red-50">
          <Trash2 size={14} /> Delete
        </button>
      </div>

      {/* Right column */}
      <div className="col-span-10 flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-sm p-5 text-center">
            <p className="text-2xl font-semibold text-gray-800">
              {user?.days_since_contact ?? "—"}
            </p>
            <p className="mt-1 text-xs text-gray-500">Days Since Contact</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-5 text-center">
            <p className="text-2xl font-semibold text-gray-800">
              {user?.goal ?? "—"}
            </p>
            <p className="mt-1 text-xs text-gray-500">Goal (Days)</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-5 text-center">
            <p className="text-2xl font-semibold text-gray-800">
              {formatDate(user?.next_due_date)}
            </p>
            <p className="mt-1 text-xs text-gray-500">Next Due</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-800">
              Relationship Goal
            </h3>
            <button className="text-xs border rounded px-2 py-0.5 text-gray-600 hover:bg-gray-50">
              Edit
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Connect every {user?.goal ?? "—"} days
          </p>
        </div>

        <QuickCheckIn userName={user?.name}/>
      </div>
    </div>
  );
};

export default UsersDetails;