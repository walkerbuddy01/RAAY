"use client";

import Navigation from "@/components/home/Navigation";
import { Spotlight } from "@/components/ui/acertenity UI/Spotlight";
import { FlipWords } from "@/components/ui/acertenity UI/flip-words";
import { InfiniteMovingCards } from "@/components/ui/acertenity UI/infinite-moving-cards";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  const words = [
    "Anonymously",
    "Facelessly",
    "Namelessly",
    "Hiddenly",
    "Secretly",
  ];

  const Feedbacks = [
    {
      quote:
        "The software's user interface is intuitive and the performance is outstanding, making daily tasks much easier.",
      name: "Anonymous",
      title: "Software Review",
    },
    {
      quote:
        "This smartphone's camera quality is exceptional, capturing vivid and detailed photos in any lighting condition.",
      name: "Anonymous",
      title: "Smartphone Review",
    },
    {
      quote:
        "The new fitness tracker is a game-changer, offering accurate tracking and motivating features that keep you moving.",
      name: "Anonymous",
      title: "Fitness Tracker Feedback",
    },
    {
      quote:
        "This coffee maker is a lifesaver, brewing perfect coffee every morning without any hassle.",
      name: "Anonymous",
      title: "Coffee Maker Testimonial",
    },
    {
      quote:
        "The quality of the wireless headphones is superb, providing crystal clear sound and impressive noise cancellation.",
      name: "Anonymous",
      title: "Headphones Review",
    },
    {
      quote:
        "The ergonomic design of this office chair has significantly improved my comfort and productivity at work.",
      name: "Anonymous",
      title: "Office Chair Feedback",
    },
    {
      quote:
        "This vacuum cleaner is powerful and efficient, making cleaning quick and easy with minimal effort.",
      name: "Anonymous",
      title: "Vacuum Cleaner Review",
    },
    {
      quote:
        "The new laptop model is incredibly fast and lightweight, perfect for both professional and personal use.",
      name: "Anonymous",
      title: "Laptop Review",
    },
    {
      quote:
        "The smart home system seamlessly integrates all my devices, providing convenience and security like never before.",
      name: "Anonymous",
      title: "Smart Home System Feedback",
    },
    {
      quote:
        "This electric toothbrush ensures a thorough clean every time, making my dental hygiene routine much more effective.",
      name: "Anonymous",
      title: "Electric Toothbrush Review",
    },
  ];

  return (
    <main
      className="h-full w-full bg-gray-300 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:20px_20px]
       dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1.5px,#00091d_1px)] dark:bg-[size:20px_20px] relative antialiased overflow-hidden"
    >
      <Spotlight
        className="-top-40 left-5 md:left-60 md:-top-20"
        fill={theme !== "light" ? "white" : "none"}
      />
      <Navigation />

      <div className="h-[82%] flex flex-col   justify-center items-center px-4 ">
        <div className="sm:text-7xl text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Share
          <FlipWords words={words} /> <br />
          Feedback About things
        </div>
        <div className="h-[20rem]  rounded-md flex flex-col  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={Feedbacks}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
      <p className=" text-base text-center text-slate-500">
        <span className="text-white font-bold">RAAY</span>- Where your identity
        remains a secret.
      </p>
    </main>
  );
}
