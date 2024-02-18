"use client";

import Link from "next/link";

export const Nav = () => {
  const navigation = [
    { href: "/signup", label: "Sign Up" },
    { href: "/login", label: "Log In" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/account", label: "My Account" },
    { href: "/newtaskboard", label: "New Taskboard" },
    { href: "/taskboard", label: "Taskboard" },
  ];

  return (
    <nav>
      <ul className="flex gap-10">
        {navigation.map((navitem) => (
          <li key={navitem.href}>
            <Link href={navitem.href}>{navitem.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
