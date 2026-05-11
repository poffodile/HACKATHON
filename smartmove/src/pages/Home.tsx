import {
    Home,
    Route,
    BarChart3,
    Leaf,
    Gift,
    Bell,
    Settings,
    Bus,
    Train,
    Footprints,
    Bike,
    Car,
    Search,
  } from "lucide-react";
  
  function HomePage() {
    return (
      <div className="min-h-screen bg-[#050816] text-white flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/10 p-6 flex flex-col justify-between">
          <div>
            <div className="mb-10">
              <h1 className="text-2xl font-bold text-green-400">SmartMove</h1>
              <p className="text-sm text-gray-400">Move smarter. Live greener.</p>
            </div>
  
            <nav className="space-y-3">
              <SidebarItem icon={<Home size={20} />} label="Home" active />
              <SidebarItem icon={<BarChart3 size={20} />} label="Compare" />
              <SidebarItem icon={<Route size={20} />} label="Routes" />
              <SidebarItem icon={<BarChart3 size={20} />} label="Traffic Dashboard" />
              <SidebarItem icon={<Leaf size={20} />} label="Sustainability" />
              <SidebarItem icon={<Gift size={20} />} label="Rewards" />
              <SidebarItem icon={<Bell size={20} />} label="Alerts" />
              <SidebarItem icon={<Settings size={20} />} label="Settings" />
            </nav>
          </div>
  
          <div className="rounded-2xl border border-white/10 p-4 bg-white/5">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold">
              P
            </div>
            <p className="mt-3 font-semibold">Precious</p>
            <p className="text-sm text-gray-400">Eco Traveller 🌱</p>
          </div>
        </aside>
  
        {/* Main content */}
        <main className="flex-1 p-8 space-y-6">
          <header className="flex justify-between items-start">
            <div>
              <h2 className="text-4xl font-bold">Good morning, Precious! </h2>
              <p className="text-gray-400 mt-2">
                Plan your journey. Save time, money and the planet.
              </p>
            </div>
  
            <div className="flex gap-4">
              <TopBadge text="22°C Liverpool" />
              <TopBadge text="2,450 pts" green />
            </div>
          </header>
  
          {/* Top section */}
          <section className="grid grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-5">Plan Your Journey</h3>
  
              <div className="space-y-4">
                <InputBox label="From" value="John Moores University, Liverpool" />
                <InputBox label="To" value="Anfield Stadium" />
  
                <div className="grid grid-cols-2 gap-4">
                  <button className="rounded-xl border border-white/10 p-4 text-left text-gray-300">
                    Depart now
                  </button>
                  <button className="rounded-xl border border-white/10 p-4 text-left text-gray-300">
                    Preferences
                  </button>
                </div>
  
                <button className="w-full rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold py-4 flex items-center justify-center gap-2">
                  <Search size={20} />
                  Find Best Route
                </button>
              </div>
            </div>
  
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 min-h-[320px]">
              <div className="h-full rounded-2xl bg-[#071a2b] flex items-center justify-center">
                <p className="text-gray-400">Map preview will go here</p>
              </div>
            </div>
          </section>
  
          {/* Stats */}
          <section className="grid grid-cols-4 gap-4">
            <StatCard title="CO₂ Saved Today" value="1.8 kg" />
            <StatCard title="Trips Completed" value="12" />
            <StatCard title="Green Streak" value="6 days" />
            <StatCard title="Eco Score" value="72/100" />
          </section>
  
          {/* Quick options */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold mb-5">Quick Options</h3>
  
            <div className="grid grid-cols-5 gap-4">
              <TravelCard icon={<Bus />} title="Bus" time="28 min" detail="£2.40" />
              <TravelCard icon={<Train />} title="Train" time="25 min" detail="£2.70" />
              <TravelCard icon={<Footprints />} title="Walk" time="45 min" detail="Free" />
              <TravelCard icon={<Bike />} title="Cycle" time="18 min" detail="Low effort" />
              <TravelCard icon={<Car />} title="Drive" time="22 min" detail="High traffic" />
            </div>
          </section>
        </main>
      </div>
    );
  }
  
  function SidebarItem({
    icon,
    label,
    active,
  }: {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
  }) {
    return (
      <div
        className={`flex items-center gap-3 rounded-xl px-4 py-3 ${
          active ? "bg-green-500/20 text-green-400" : "text-gray-300"
        }`}
      >
        {icon}
        <span>{label}</span>
      </div>
    );
  }
  
  function TopBadge({ text, green }: { text: string; green?: boolean }) {
    return (
      <div
        className={`rounded-xl border border-white/10 px-5 py-3 ${
          green ? "text-green-400" : "text-gray-200"
        }`}
      >
        {text}
      </div>
    );
  }
  
  function InputBox({ label, value }: { label: string; value: string }) {
    return (
      <div className="rounded-xl border border-white/10 p-4">
        <p className="text-sm text-gray-400">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    );
  }
  
  function StatCard({ title, value }: { title: string; value: string }) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-green-400 mt-2">{value}</p>
      </div>
    );
  }
  
  function TravelCard({
    icon,
    title,
    time,
    detail,
  }: {
    icon: React.ReactNode;
    title: string;
    time: string;
    detail: string;
  }) {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#08111f] p-5">
        <div className="text-green-400 mb-3">{icon}</div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-400 mt-1">{time}</p>
        <p className="text-sm text-gray-300">{detail}</p>
      </div>
    );
  }
  
  export default HomePage;