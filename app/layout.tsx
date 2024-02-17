import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              {navigation.map((navitem) => (
                <li key={navitem.href}>
                  <Link href={navitem.href}>{navitem.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
