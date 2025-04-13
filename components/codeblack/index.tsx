"use client"
import React from "react";

const CodeBlock = () => {

  const codeString = `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"`;

  const syntaxHighlighting = (code: string) => {
    const lines = code.split("\n");
    return lines.map((line, index) => {
    //   const parts: (string | any)[] = [];
    const parts: React.ReactNode[] = [];
      let currentWord = "";
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (/[a-zA-Z0-9_$]/.test(char)) {
          currentWord += char;
        } else {
          if (currentWord) {
            let className = "";
            if (["import", "from"].includes(currentWord)) {
              className = "text-[#ff7b72] dark:text-[#ff7b72]";
            } else if (["const"].includes(currentWord)) {
              className = "text-yellow-300 dark:text-yellow-500";
            } else if (["{", "}"].includes(currentWord)) {
              className = "text-white dark:text-gray-300";
            } else if (currentWord.startsWith("@")) {
              className = "text-blue-400 dark:text-blue-600";
            }
            parts.push(
              <span key={`${index}-${i}-word`} className={className}>
                {currentWord}
              </span>
            );
            currentWord = "";
          }
          parts.push(
            <span
              key={`${index}-${i}-char`}
              className="text-white dark:text-gray-300"
            >
              {char}
            </span>
          );
        }
      }
      if (currentWord) {
        let className = "";
        if (["import", "from"].includes(currentWord)) {
          className = "text-purple-400 dark:text-purple-600";
        } else if (["const"].includes(currentWord)) {
          className = "text-yellow-300 dark:text-yellow-500";
        } else if (["{", "}"].includes(currentWord)) {
          className = "text-white dark:text-gray-300";
        } else if (currentWord.startsWith("@")) {
          className = "text-blue-400 dark:text-blue-600";
        }
        parts.push(
          <span key={`${index}-end-word`} className={className}>
            {currentWord}
          </span>
        );
      }
      return (
        <div key={index} className="font-mono text-sm leading-relaxed">
          {parts}
        </div>
      );
    });
  };

  return (
    <div
      className={`rounded-md bg-zinc-800 dark:bg-zinc-900 p-4 font-mono text-sm leading-relaxed`}
    >
      {syntaxHighlighting(codeString)}
    </div>
  );
};

export default CodeBlock;
