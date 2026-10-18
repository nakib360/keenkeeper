import { FiPlus } from "react-icons/fi";

const Home = () => {
  return (
    <div className="p-10 space-y-5">
      <p className="text-3xl text-center">Friends to keep close in your life</p>
      <p className="text-xs text-center text-gray-400">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most</p>
      <div className="flex justify-center items-center">
        <button className={` transition-colors flex gap-2 items-center px-3 py-2 rounded-sm bg-[#244D3F] hover:bg-[#1b4231] text-white cursor-pointer`}><FiPlus /> Add a Friend</button>
      </div>
      <div className="flex items-center gap-10 justify-center">
        <div className="bg-white p-10 rounded-sm text-sm">
          <p>Total Friends</p>
        </div>
        <div className="bg-white p-10 rounded-sm text-sm">
          <p>On Track</p>
        </div>
        <div className="bg-white p-10 rounded-sm text-sm">
          <p>Need Attention</p>
        </div>
        <div className="bg-white p-10 rounded-sm text-sm">
          <p>Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Home;