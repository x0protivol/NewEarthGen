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
          {/* <span>New Gen Earth</span> */}
        </div>
        {/* <div className="justify">

        </div> */}
        <ul className="header-ul">
          <li>
            {activeLink !== '/' && (
              <Link href="/" onClick={() => handleLinkClick('/')} className="link">
                Home
              </Link>
            )}
          </li>
          <li>
            {activeLink !== '/rreel' && (
              <Link href="/rreel" onClick={() => handleLinkClick('/rreel')} className="link">
                RREEL
              </Link>
            )} 
          </li>
          <li>
            {activeLink !== '/research-clear' && (
              <Link href="/research-clear" onClick={() => handleLinkClick('/research-clear')} className="link">
                Research Clear
              </Link>
            )}
          </li>
          <li>
            {activeLink !== '/equine-nft' && (
              <Link href="/equine-nft" onClick={() => handleLinkClick('/equine-nft')} className="link">
                Equine NFT
              </Link>
            )}
          </li>
          <li>
            {activeLink !== '/' && (
              <Link href="/" onClick={() => handleLinkClick('/')} className="link">
                Destiny
              </Link>
            )}
          </li>
          <li>
            {activeLink !== '/' && (
              <Link href="/" onClick={() => handleLinkClick('/')} className="link">
                Belt coin
              </Link>
            )}
          </li>          

        </ul>
      </nav>
    </header>
  )
}