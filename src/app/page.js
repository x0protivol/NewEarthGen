import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import '../../Style/page.css';
import ParticlesBackground from '../../component/Particles';
import Footer from '../../component/Footer';

export default function Home() {
  const [currentFilter, setFilter] = useState("");  // Either "planned", "completed", or "" (for all)

 const projects = [
    {
        href: "/rreel",
        src: "/rreel.jpg",
        alt: "rrel logo",
        title: "RREEL",
        description: "RREEL is a protocol for the preservation of memories as digital records, minted as non-fungible tokens on the blockchain under the ERC-721 standard and as RREEL token by which theaters can do rewarding to users.",
        status: "planned"
    },
    {
        href: "/research-clear",
        src: "/ResearchClear.png",
        alt: "Research logo",
        title: "Research Clear",
        description: "ResearchClear is an innovative blockchain-powered platform designed to revolutionize the landscape of academic research. With a mission to address the challenges faced by researchers and enhance the efficiency and transparency of the research process.",
        status: "planned"
    },
    {
        href: "/equine-nft",
        src: "/equinenft.png",
        alt: "EquineNFT logo",
        title: "EquineNFT",
        description: "EquineNFT aims to bring the world of horse ownership into the digital age. By combining advanced technology with the traditional industry of horse ownership, EquineNFT offers a platform for creating unique NFT IDs for each horse.",
        status: "planned"
    },
    {
        href: "/beltcoin",
        src: "/beltcoin.png",
        alt: "BeltCoin logo",
        title: "BeltCoin",
        description: "BeltCoin is a revolutionary WEB3 startup with a vision to restore and preserve the Earths ecosystem while fostering bio diversity. The core focus is safeguarding keystone species within aquatic environments",
        status: "planned"
    },
    {
        href: "/vibrateDNA",
        src: "/vibrateDNA1.png",
        alt: "vibrateDNA logo",
        title: "vibrateDNA",
        description: "vibrateDNA introduces an innovative web3 platform, blending advanced tech with the spheres of health and well-being.",
        status: "planned"
    },
    {
        href: "/FarmCoin",
        src: "/FarmCoin.png",
        alt: "FarmCoin logo",
        title: "Farm Coin",
        description: "Farm coin is a digital currency designed to address challenges in the agricultural and farming sectors.",
        status: "planned"
    },
    {
        href: "/FreedomGuard",
        src: "/Freedomguard.png",
        alt: "FreedomGuard logo",
        title: "FreedomGuard",
        description: "FreedomGuard provides a fast peer-to-peer anti-trafficking solution, supported by DAO-driven fundraising and assistance for victims, strengthened by web3 and AI-enhanced data protection.",
        status: "planned"
    },
    {
        href: "/Omnifinery",
        src: "/omnifinery.png",
        alt: "Omnifinery logo",
        title: "Omnifinery",
        description: "Omnifinery pioneers the digital transformation of the fashion sector, surpassing tangible boundaries through web3.",
        status: "planned"
    },
    {
        href: "/TimeCoin",
        src: "/time3.png",
        alt: "TimeCoin logo",
        title: "Time Coin",
        description: "Time coin is a cryptocurrency based on time, presenting a Universal Basic Income approach.",
        status: "planned"
    },
    {
        href: "/destiny-token",
        src: "/DESTINY.png",
        alt: "Destiny Token logo",
        title: "Destiny Token",
        description: "DestinyToken (DTP) is a stablecoin in the asset creation in DeFi category.",
        status: "planned"
    }
];

  const filteredProjects = currentFilter ? projects.filter(project => project.status === currentFilter) : projects;

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
        <div className='slider'>
    {[...Array(4)].map((_, index) => (
        <div className='slide-track' key={index}>
            {projects.map(project => (
                <Link href={project.href} key={project.title}>
                    <Image src={project.src} alt={project.alt} width={80} height={80} />
                </Link>
            ))}
        </div>
    ))}
</div>

        <div className='products-cover' id='products-section'>
          <h3>Products</h3>
          {/* Filter UI */}
          <div>
            <button onClick={() => setFilter("")}>All</button>
            <button onClick={() => setFilter("planned")}>Planned Projects</button>
            <button onClick={() => setFilter("completed")}>Completed Projects</button>
          </div>
        </div>
        <div className='grid-container'>
          {filteredProjects.map(project => (
            <Link href={project.href} className='cover' key={project.title}>
              <Image src={project.src} alt={project.alt} width={80} height={80} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
