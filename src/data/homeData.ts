import { Bus, Train, Footprints, Bike, Car } from "lucide-react";

export const stats = [
  { title: "CO₂ Saved Today", value: "1.8 kg", note: "vs driving the same route" },
  { title: "Trips Completed", value: "12", note: "This week" },
  { title: "Green Streak", value: "6 days", note: "Keep it going!" },
  { title: "Eco Score", value: "72/100", note: "Good" },
];

export const travelOptions = [
  { icon: Bus, title: "Bus", time: "28 min", detail: "£2.40" },
  { icon: Train, title: "Train", time: "25 min", detail: "£2.70" },
  { icon: Footprints, title: "Walk", time: "45 min", detail: "Free" },
  { icon: Bike, title: "Cycle", time: "18 min", detail: "Low effort" },
  { icon: Car, title: "Drive", time: "22 min", detail: "High traffic" },
];

export const recommendedRoutes = [
  {
    type: "Bus · Route 82",
    time: "28 min",
    cost: "£2.40",
    notes: ["Low congestion", "Lower emissions", "Cheapest option"],
  },
  {
    type: "Train",
    time: "25 min",
    cost: "£2.70",
    notes: ["Fast option", "Low CO₂", "Leaves in 6 min"],
  },
  {
    type: "Cycle",
    time: "18 min",
    cost: "Free",
    notes: ["Best for you", "No emissions", "Quiet route"],
  },
];