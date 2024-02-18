import "./ui/globals.css";
import { Nav } from "./ui/Nav";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-neutral-800 text-white">
        <Header>
          <Nav />
        </Header>
        <main className="flex flex-col container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
