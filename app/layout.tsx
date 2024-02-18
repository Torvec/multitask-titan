import "./ui/globals.css";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <Header />
        <main className="container mx-auto flex flex-grow ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
