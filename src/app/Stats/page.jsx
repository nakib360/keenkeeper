import CustomActiveShapePieChart from "./Pieshart";

const Stats = () => {
  return (
    <div className="px-50 py-20 space-y-4">
      <p className="text-4xl">Friendship Analytics</p>
      <div className="bg-white w-full rounded-xl p-10">
        <p>By Interaction Type</p>
        <CustomActiveShapePieChart/>
      </div>
    </div>
  );
};

export default Stats;