"use client";
import { useState } from "react";
import { Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = ["pnpm", "npm", "yarn", "bun"];

const commands: Record<string, string> = {
  pnpm: "pnpm dlx shadcn@latest add tabs",
  npm: "npx shadcn@latest add tabs",
  yarn: "yarn dlx shadcn@latest add tabs",
  bun: "bunx shadcn@latest add tabs",
};

export default function InstallTabs() {
  const [activeTab, setActiveTab] = useState("npm");

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[activeTab]);
  };

  return (
    <div className="w-full  mt-5 text-sm text-white font-mono ">
      <div className="rounded-t-xl bg-[#1e1e1e] px-4 py-2 flex items-center justify-between">
        <div className="flex gap-4 text-white/60">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-mono text-sm ${
                activeTab === tab
                  ? "text-white border-b border-white pb-0.5"
                  : "hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <Button
          onClick={handleCopy}
          size="icon"
          variant="ghost"
          className="text-white hover:bg-white/10"
        >
          <Clipboard className="w-4 h-4" />
        </Button>
      </div>

      <div className="bg-[#121212] rounded-b-xl px-5 py-4 text-white text-sm font-mono">
        {commands[activeTab]}
      </div>
    </div>
  );
}
