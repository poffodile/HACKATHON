import {
    Bus,
    Train,
    Bike,
    Car,
    Footprints,
    Clock3,
    PoundSterling,
    Leaf,
    TrafficCone,
  } from "lucide-react";
  
  const compareOptions = [
    {
      icon: Bus,
      title: "Bus Route 82",
      duration: "28 min",
      cost: "£2.40",
      emissions: "0.3kg CO₂",
      traffic: "Low",
      best: true,
    },
    {
      icon: Train,
      title: "Northern Rail",
      duration: "25 min",
      cost: "£2.70",
      emissions: "0.2kg CO₂",
      traffic: "Very Low",
    },
    {
      icon: Bike,
      title: "Cycle Route",
      duration: "18 min",
      cost: "Free",
      emissions: "0kg CO₂",
      traffic: "None",
    },
    {
      icon: Footprints,
      title: "Walking",
      duration: "45 min",
      cost: "Free",
      emissions: "0kg CO₂",
      traffic: "None",
    },
    {
      icon: Car,
      title: "Driving",
      duration: "22 min",
      cost: "£6.20",
      emissions: "2.4kg CO₂",
      traffic: "High",
    },
  ];
  
  function ComparePage() {
    return (
      <div className="min-h-screen bg-[#050816] text-white p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-green-400">
              Compare Routes
            </h1>
  
            <p className="text-gray-400 mt-2">
              Liverpool John Moores University →
              Anfield Stadium
            </p>
          </div>
  
          <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-5 py-3">
            <p className="text-sm text-green-400">
              Smart Recommendation Active
            </p>
          </div>
        </div>
  
        {/* Compare cards */}
        <div className="grid grid-cols-3 gap-6">
          {compareOptions.map((option) => {
            const Icon = option.icon;
  
            return (
              <div
                key={option.title}
                className={`rounded-3xl border p-6 transition ${
                  option.best
                    ? "border-green-500/40 bg-green-500/5"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#08111f] flex items-center justify-center text-green-400">
                    <Icon size={28} />
                  </div>
  
                  {option.best && (
                    <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-black">
                      BEST
                    </span>
                  )}
                </div>
  
                {/* Title */}
                <div className="mt-5">
                  <h2 className="text-2xl font-bold">
                    {option.title}
                  </h2>
                </div>
  
                {/* Stats */}
                <div className="mt-6 space-y-4">
                  <CompareStat
                    icon={<Clock3 size={18} />}
                    label="Travel Time"
                    value={option.duration}
                  />
  
                  <CompareStat
                    icon={<PoundSterling size={18} />}
                    label="Estimated Cost"
                    value={option.cost}
                  />
  
                  <CompareStat
                    icon={<Leaf size={18} />}
                    label="Carbon Output"
                    value={option.emissions}
                  />
  
                  <CompareStat
                    icon={<TrafficCone size={18} />}
                    label="Traffic Level"
                    value={option.traffic}
                  />
                </div>
  
                {/* Footer */}
                <button
                  className={`mt-8 w-full rounded-xl py-4 font-semibold transition ${
                    option.best
                      ? "bg-green-500 text-black hover:bg-green-400"
                      : "border border-white/10 hover:bg-white/5"
                  }`}
                >
                  View Route
                </button>
              </div>
            );
          })}
        </div>
  
        {/* Bottom map preview */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-2xl font-bold">
                Route Overview
              </h2>
  
              <p className="text-gray-400 mt-1">
                Compare travel paths and congestion levels.
              </p>
            </div>
  
            <button className="rounded-xl border border-white/10 px-5 py-3 hover:bg-white/5">
              Change Route
            </button>
          </div>
  
          <div className="h-[400px] rounded-2xl bg-[#071a2b] flex items-center justify-center">
            <p className="text-gray-400">
              Interactive route map will appear here
            </p>
          </div>
        </section>
      </div>
    );
  }
  
  function CompareStat({
    icon,
    label,
    value,
  }: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }) {
    return (
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#08111f] p-4">
        <div className="flex items-center gap-3">
          <div className="text-green-400">
            {icon}
          </div>
  
          <span className="text-gray-300">
            {label}
          </span>
        </div>
  
        <span className="font-semibold">
          {value}
        </span>
      </div>
    );
  }
  
  export default ComparePage;