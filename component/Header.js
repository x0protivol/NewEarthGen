"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/header.css";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";


export default function Header() {
  const emailAddress = 'aman@newearthgen.co';

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
          <Image src='/new_earth_gen_logo.png' alt="New Gen Earth Logo" width={200} height={130} />
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
                About Us
              </Link>
            )}
          </li>
          <li>
            <a href="#products-section" className="link" onClick={() => handleLinkClick('#products-section')}>
              Products
            </a>
          </li>
          <li>
            <Link href={`mailto:${emailAddress}`} className="link">
              Contact Us
              </Link>
          </li>      
        </ul>
      </nav>
    </header>
  )
}
