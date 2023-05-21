"use client";
import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { useState } from 'react';
import "../Style/header.css";

export default function Header() {
  // const router = useRouter();
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logoFlex">
          <Image src='/new_earth.png' alt="New Gen Earth Logo" width={200} height={130} />
          <span>New Gen Earth</span>
        </div>
        <div className="justify">
          {activeLink !== '/' && (
              <Link href="/" onClick={() => handleLinkClick('/')}>
                Home
              </Link>
            )}
        </div>
        <div>
          {activeLink !== '/rreel' && (
            <Link href="/rreel" onClick={() => handleLinkClick('/rreel')}>
              RREEL
            </Link>
          )}
          {activeLink !== '/research-clear' && (
            <Link href="/research-clear" onClick={() => handleLinkClick('/research-clear')}>
              Research Clear
            </Link>
          )}

        </div>
      </nav>
    </header>
  )
}