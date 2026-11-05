import ApexChart from "./PieChart";

const Stats = () => {

  return (
    <div className="px-50 py-20 space-y-4">
      <p className="text-4xl">Friendship Analytics</p>
      <div className="flex justify-center items-center p-5 bg-white w-full rounded-xl p-10">
        <ApexChart />
      </div>
    </div>
  );
};

export default Stats;