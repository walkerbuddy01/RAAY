import { Heart, MessageSquareText, PieChart, UserRoundCog } from "lucide-react";

export const NAV_PAGES = [
  {
    title: "My feeders",
    href: "/d/feeder",
    icon: MessageSquareText,
  }, {
    title: "Setting",
    href: "/d/setting",
    icon: UserRoundCog,
  }, {
    title: "My feedbacks",
    href: "/d/feedbacks",
    icon: Heart,
  },
];

export const UPCOMING_FEATURES = [
  {
    title: "New UI 🌈 - soon:)",
    icon: Heart,
  },
  {
    title: "Analytical Charts 📊 - soon:)",
    icon: PieChart,
  },
]
