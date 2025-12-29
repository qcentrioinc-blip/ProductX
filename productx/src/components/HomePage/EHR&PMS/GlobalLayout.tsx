"use client";
import React from "react";
import ImageBackground from "./ImageBackground";

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen isolate">

      {/* Background layer */}
      <ImageBackground />

      {/* Scrolling content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
