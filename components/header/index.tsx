import React from "react";
import ThemedIcon from "../theme/themeLogo";
import Theme from "../theme";

const Header = () => {
  return (
    <div className="border-[rgba(228,228,231,0.5)] border-dotted  border-b ">
      <div className="w-[97%] mx-auto max-w-[1440px] border-[rgba(228,228,231,0.5)] sticky top-0 border-dotted border-x py-3 px-5 flex items-center justify-between">
        <div className="flex items-center gap-5 ">
          <a className=" flex items-center gap-2 " href="/">
            <ThemedIcon />
            <span className="hidden font-bold lg:inline-block">shadcn/ui</span>
          </a>
          <ul className="flex items-center gap-4 ">
            <li>
              <p>Docs</p>
            </li>
            <li>
              <p>Components</p>
            </li>
            <li>
              <p>Blocks</p>
            </li>
            <li>
              <p>Charts</p>
            </li>
            <li>
              <p>Themes</p>
            </li>
            <li>
              <p>Colors</p>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button className="inline-flex items-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64">
            <span className="hidden lg:inline-flex">
              Search documentation...
            </span>
            <span className="inline-flex lg:hidden">Search...</span>
            <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
          <Theme />
        </div>
      </div>
    </div>
  );
};

export default Header;
