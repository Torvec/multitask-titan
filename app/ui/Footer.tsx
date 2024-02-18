"use client";

export const Footer = () => {
  const getFullYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center bg-neutral-600">
      <p>&copy; {getFullYear} Copyright. All Rights Reserved.</p>
    </footer>
  );
};
