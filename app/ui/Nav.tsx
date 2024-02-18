"use client";

import Link from "next/link";

export const Nav = () => {
  const navigation = [
    { href: "/", label: "Home" },
    { href: "/signup", label: "Sign Up" },
    { href: "/login", label: "Log In" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/account", label: "My Account" },
    { href: "/newtaskboard", label: "New Taskboard" },
    { href: "/taskboard", label: "Taskboard" },
  ];

  return (
    <nav>
      <ul className="container mx-auto flex justify-between">
        {navigation.map((navitem) => (
          <li key={navitem.href}>
            <Link href={navitem.href}>{navitem.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
