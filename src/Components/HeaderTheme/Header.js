import React from "react";
import UserNav from "./UserNav";

export default function Header() {
  return (
    <div className="shadow">
      <div className="h-20 flex justify-between items-center mx-auto container">
        <span className="text-yellow-500 text-2xl font-medium animate-pulse">
          Cyber Film
        </span>
        <UserNav />
      </div>
    </div>
  );
}
