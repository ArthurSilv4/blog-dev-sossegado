"use client";

import { useTheme } from "next-themes";

export function BntToggle() {
  const { resolvedTheme, theme, setTheme } = useTheme();

  return (
    <div>
      <input
        type="checkbox"
        className="border-2 relative appearance-none inline-block h-10 w-20 cursor-pointer rounded-full bg-black transition-all after:content-[''] after:absolute after:top-[5px] after:left-[5px] after:h-6 after:w-6 after:rounded-full after:bg-white after:transition-all dark:bg-transparent dark:border-orange dark:after:translate-x-10"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      />
    </div>
  );
}
