"use client";
import React from "react";

export default function StickyBackgroundLayout({
  children,
  image,
}: {
  children: React.ReactNode;
  image: string;
}) {
  return (
    // Parent must be relative to contain the absolute background
    <div className="relative isolate">
      
      {/* Background Wrapper: 
        absolute inset-0 makes it take up the exact height of the children 
        without pushing them down.
      */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* The actual sticky image */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <img
            src={image}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Background"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* Scrollable content: 
        Now this starts at the very top of the parent container 
        at the same time as the background.
      */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}