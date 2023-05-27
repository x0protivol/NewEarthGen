"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/header.css";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";


export default function Header() {
  const [activeLink, setActiveLink] = useState(null);
  const [navbarOpen, setNavbarOpen] = useState(false)
  const showNavBar = () => setNavbarOpen(!navbarOpen);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logoFlex">
          <Image src='/new_gen_earth_logo.png' alt="New Gen Earth Logo" width={200} height={130} />
        </div>
        <div onClick={showNavBar}>
          <FontAwesomeIcon
            icon={faBars}
            id="menu"
          />
        </div>
        <ul className={navbarOpen ? "header-ul active" : "header-ul"}>
          <div>
            <FontAwesomeIcon
              icon={faClose}
              id="close"
              onClick={showNavBar}
            />
          </div>
          <li>
            {activeLink !== '/' && (
              <Link href="/" onClick={() => handleLinkClick('/')} className="link">
                Home
              </Link>
            )}
          </li>
          <li>
            {activeLink !== '/about' && (
              <Link href="/about" onClick={() => handleLinkClick('/about')} className="link">
                About
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
            {activeLink !== '/beltcoin' && (
              <Link href="/beltcoin" onClick={() => handleLinkClick('/beltcoin')} className="link">
                Belt coin
              </Link>
            )}
          </li>
          <li>
            {activeLink !== '/destiny-token' && (
              <Link href="/destiny-token" onClick={() => handleLinkClick('/destiny-token')} className="link">
                DestinyToken
              </Link>
            )}
          </li>         

        </ul>
      </nav>
    </header>
  )
}