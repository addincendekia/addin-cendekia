import Link from "next/link";
import React from "react";

const Header = ({ className = "" }: { className?: string }) => {
  return (
    <header className={className}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-sm">ADDIN CENDEKIA</div>
        <nav className="flex gap-6 text-xs uppercase">
          <Link href="/" className="hover:underline">
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/articles" className="hover:underline font-semibold">
            Articles
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
