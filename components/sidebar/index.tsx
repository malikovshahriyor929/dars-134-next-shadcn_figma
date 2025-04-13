"use client";
import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { tags } from "@/lib/utils";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const [id, setId] = useState<null | number>(null);
  const router = useRouter();
  const style1 =
    "group relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-accent hover:text-accent-foreground font-normal text-foreground";
  const style2 =
    "group relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-accent hover:text-accent-foreground bg-accent font-medium text-accent-foreground  ";

  return (
    <div className="sticky top-0  overflow-hidden ">
      <ScrollArea className="  w-[200px] h-[calc(100vh-4rem)]  ">
        <div className="p-4">
          {tags.map((tag) => (
            <div
              key={tag.id}
              onClick={() => {
                setId(tag.id);
                router.push(`/${tag.component}`);
              }}
              className={`text-sm ${id !== tag.id ? style1 : style2}  `}
            >
              {tag.component}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default SideBar;
