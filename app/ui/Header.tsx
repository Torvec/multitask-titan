"use client";

import { Nav } from "./Nav";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-orange-500 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">MultiTask Titan</h1>
        </Link>
        <Nav />
      </div>
    </header>
  );
};
