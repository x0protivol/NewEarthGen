'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";
import '../../Style/page.css'; // Consider moving to layout.js if global
import ParticlesBackground from '../../component/Particles';
import Footer from '../../component/Footer';

export default function Home() {
  // State for filtering projects
  const [currentFilter, setFilter] = useState(""); // "planned", "completed", or "" (all)
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const filterButtonRef = useRef(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          filterButtonRef.current && !filterButtonRef.current.contains(event.target)) {
        setShowFilterDropdown(false);
      }
    }
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setShowFilterDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Project data
  const projects = [
    { href: "/rreel", src: "/rreel.jpg", alt: "rrel logo", title: "RREEL", description: "RREEL is a protocol for the preservation of memories as digital records, minted as non-fungible tokens on the blockchain under the ERC-721 standard and as RREEL token by which theaters can do rewarding to users.", status: "planned" },
    { href: "/research-clear", src: "/ResearchClear.png", alt: "Research logo", title: "Research Clear", description: "ResearchClear is an innovative blockchain-powered platform designed to revolutionize the landscape of academic research. With a mission to address the challenges faced by researchers and enhance the efficiency and transparency of the research process.", status: "planned" },
    { href: "/equine-nft", src: "/equinenft.png", alt: "EquineNFT logo", title: "EquineNFT", description: "EquineNFT aims to bring the world of horse ownership into the digital age. By combining advanced technology with the traditional industry of horse ownership, EquineNFT offers a platform for creating unique NFT IDs for each horse.", status: "planned" },
    { href: "/beltcoin", src: "/beltcoin.png", alt: "BeltCoin logo", title: "BeltCoin", description: "BeltCoin is a revolutionary WEB3 startup with a vision to restore and preserve the Earths ecosystem while fostering bio diversity. The core focus is safeguarding keystone species within aquatic environments", status: "planned" },
    { href: "/vibrateDNA", src: "/vibrateDNA1.png", alt: "vibrateDNA logo", title: "vibrateDNA", description: "vibrateDNA introduces an innovative web3 platform, blending advanced tech with the spheres of health and well-being.", status: "planned" },
    { href: "/FarmCoin", src: "/FarmCoin.png", alt: "FarmCoin logo", title: "Farm Coin", description: "Farm coin is a digital currency designed to address challenges in the agricultural and farming sectors.", status: "planned" },
    { href: "/FreedomGuard", src: "/Freedomguard.png", alt: "FreedomGuard logo", title: "FreedomGuard", description: "FreedomGuard provides a fast peer-to-peer anti-trafficking solution, supported by DAO-driven fundraising and assistance for victims, strengthened by web3 and AI-enhanced data protection.", status: "planned" },
    { href: "/Omnifinery", src: "/omnifinery.png", alt: "Omnifinery logo", title: "Omnifinery", description: "Omnifinery pioneers the digital transformation of the fashion sector, surpassing tangible boundaries through web3.", status: "planned" },
    { href: "/TimeCoin", src: "/time3.png", alt: "TimeCoin logo", title: "Time Coin", description: "Time coin is a cryptocurrency based on time, presenting a Universal Basic Income approach.", status: "planned" },
    { href: "/destiny-token", src: "/DESTINY.png", alt: "Destiny Token logo", title: "Destiny Token", description: "DestinyToken (DTP) is a stablecoin in the asset creation in DeFi category.", status: "planned" }
  ];

  // Filter projects by status
  const filteredProjects = currentFilter ? projects.filter(project => project.status === currentFilter) : projects;

  // Keyboard navigation for dropdown
  function handleDropdownKeyDown(e) {
    if (e.key === 'Tab') {
      setShowFilterDropdown(false);
    }
  }

  return (
    <>
      <main className='home-main'>
        <ParticlesBackground />
        <div className='text-cover'>
          <h1 className='main-text'>
            Real World Blockchain Applications
          </h1>
        </div>
      </main>
      <section>
        {/* Logo slider */}
        <div className='slider' aria-label="Project logos carousel">
          {[...Array(4)].map((_, index) => (
            <div className='slide-track' key={index}>
              {projects.map(project => (
                <Link href={project.href} key={project.title} aria-label={project.title} tabIndex={0}>
                  <Image src={project.src} alt={project.alt} width={80} height={80} />
                </Link>
              ))}
            </div>
          ))}
        </div>
        {/* Products section */}
        <div className='products-cover' id='products-section'>
          <h3>Products</h3>
          <div className="filter-container">
            <button
              ref={filterButtonRef}
              aria-haspopup="true"
              aria-expanded={showFilterDropdown}
              aria-controls="filter-dropdown"
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              Filter Options
            </button>
            <div
              id="filter-dropdown"
              className={`filter-dropdown ${showFilterDropdown ? 'filter-show' : ''}`}
              ref={dropdownRef}
              role="menu"
              aria-label="Filter projects"
              tabIndex={-1}
              onKeyDown={handleDropdownKeyDown}
            >
              <button role="menuitem" onClick={() => { setFilter(""); setShowFilterDropdown(false); }}>All</button>
              <button role="menuitem" onClick={() => { setFilter("planned"); setShowFilterDropdown(false); }}>Planned Projects</button>
              <button role="menuitem" onClick={() => { setFilter("completed"); setShowFilterDropdown(false); }}>Completed Projects</button>
            </div>
          </div>
        </div>
        {/* Projects grid */}
        <div className='grid-container'>
          {filteredProjects.map(project => (
            <Link href={project.href} className='cover' key={project.title} aria-label={project.title} tabIndex={0}>
              <Image src={project.src} alt={project.alt} width={80} height={80} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
