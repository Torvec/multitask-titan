"use client";

export const Footer = () => {
  const getFullYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center bg-gradient-to-r from-orange-500 to-purple-500 py-8">
      <p>&copy; {getFullYear} Copyright. All Rights Reserved.</p>
    </footer>
  );
};
