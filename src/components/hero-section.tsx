"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import { profile } from "@/lib/data";

export default function HeroSection() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setCurrentTime(`${timeString} ${timezone}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-white flex items-center justify-center px-3 py-16">
      <div className="w-full max-w-2xl">
        <header className="flex justify-between items-center mb-12 text-sm text-gray-500">
          <span className="font-medium">{profile.established}</span>
          <div className="flex items-center gap-2 font-mono">
            <Clock size={14} />
            <span>{currentTime}</span>
          </div>
        </header>

        <main className="space-y-8">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-4xl overflow-hidden">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-gray-900">
                {profile.name}
              </h1>
              <p className="text-lg text-gray-600">{profile.title}</p>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-lg">
              {profile.bio}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
