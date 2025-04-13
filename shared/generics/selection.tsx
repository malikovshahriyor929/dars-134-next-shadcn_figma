import React from "react";

const Selection = ({
  one,
  two,
  className,
}: {
  one: string;
  two: string;
  className?: string;
}) => {
  return (
    <div>
      <div
        className={`flex items-center gap-4 border-b border-[rgba(228,228,231,0.5)]  `}
      >
        <p
          className={`border-b-2 duration-300 hover:border-primary border-background pb-2 font-medium ${className} `}
        >
          {one}
        </p>
        <p
          className={`border-b-2 duration-300 hover:border-primary border-background pb-2 font-medium ${className} `}
        >
          {two}
        </p>
      </div>
    </div>
  );
};

export default Selection;
