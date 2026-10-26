import { FiPlus } from "react-icons/fi";
import FriendsData from "@/app/lib/Friends.json"
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const onTrackCounter = FriendsData.filter(i => i.status === "on-track");
  const needAttensionCounter = FriendsData.filter(i => i.status === "overdue")
  const status = [
    { id: 1, data: FriendsData.length, name: "Total Friends" },
    { id: 2, data: onTrackCounter.length, name: "On Track" },
    { id: 3, data: needAttensionCounter.length, name: "Need Attention" },
    { id: 4, data: FriendsData.length, name: "Interactions This Month" },
  ]
  return (
    <div className="p-10 space-y-5">
      {/* =============page */}
      <p className="text-3xl text-center">Friends to keep close in your life</p>
      <p className="text-xs text-center text-gray-400">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most</p>
      <div className="flex justify-center items-center">
        <button className={` transition-colors flex gap-2 items-center px-3 py-2 rounded-sm bg-[#244D3F] hover:bg-[#1b4231] text-white cursor-pointer`}><FiPlus /> Add a Friend</button>
      </div>
      {/* ===========Status=============== */}
      <div className="flex items-center gap-5 justify-center">
        {
          status.map(status => (
            <div key={status.id} className="flex flex-col justify-center items-center bg-white p-5 rounded-sm text-sm">
              <p>{status.data}</p>
              <p>{status.name}</p>
            </div>
          ))
        }
      </div>

      {/* ========Hr========= */}
      <div className="border-b border-gray-200 h-1 w-full"></div>

      {/* =============Friends============ */}
      <div>
        <p className="py-5">Your Friends</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {
            FriendsData.map(friend => (
              <Link href={`/Home/${friend.id}`} key={friend.id} className="bg-white p-5 rounded-xl shadow flex flex-col justify-center items-center gap-2"> 
                <Image className="rounded-full" height={80} width={80} src={friend.picture} alt={friend.name}/>
                <p className="font-bold">{friend.name}</p>
                <p className="text-sm text-gray-500">{friend.days_since_contact}d ago</p>
                <div className=" flex justify-center items-center gap-2">
                  {
                    friend.tags.map((tag, id) => (
                      <div key={id} className="bg-green-200 text-green-500 px-3 py-1 rounded-full text-nowrap">
                        <p>{tag}</p>
                      </div>
                    ))
                  }
                </div>
                <div className={`${friend.status === "on-track" ? `bg-green-700 text-green-100` : friend.status === "overdue" ? `bg-red-700 text-red-200` : `bg-yellow-600 text-yellow-200`} px-3 py-1 rounded-full`}>{friend.status}</div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;