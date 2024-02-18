"use client";

export const Footer = () => {
  const getFullYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-600 flex justify-center">
      <p>&copy; {getFullYear} Copyright. All Rights Reserved.</p>
    </footer>
  );
};
