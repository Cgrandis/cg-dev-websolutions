"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-9 h-9 p-2 rounded-lg" />;
  }

  const isDark = theme === "dark" || resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-lg text-services-text-secondary hover:bg-services-border/30 hover:text-services-text transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <AiOutlineSun size={20} /> : <AiOutlineMoon size={20} />}
    </button>
  );
};

export default ThemeSwitch;
