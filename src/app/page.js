import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from 'react';
import '../../Style/page.css';
import ParticlesBackground from '../../component/Particles';
import Footer from '../../component/Footer';

export default function Home() {
  const [filteredStatus, setFilteredStatus] = useState('planned');

 const projects = [
    { href: "/research-clear", src: "/ResearchClear.png", alt: "Research Clear Logo", name: "Research Clear", status: "planned" },
    { href: "/rreel", src: "/rreel.jpg", alt: "RREEL Logo", name: "RREEL", status: "planned" },
    { href: "/beltcoin", src: "/beltcoin.png", alt: "Belt Coin Logo", name: "BeltCoin", status: "planned" },
    { href: "/destiny-token", src: "/DESTINY.png", alt: "Destiny Token Logo", name: "Destiny Token", status: "planned" },
    { href: "/equine-nft", src: "/equinenft.png", alt: "EquineNFT Logo", name: "EquineNFT", status: "planned" },
    { href: "/FarmCoin", src: "/FarmCoin.png", alt: "FarmCoin Logo", name: "Farm Coin", status: "planned" },
    { href: "/FreedomGuard", src: "/Freedomguard.png", alt: "FreedomGuard Logo", name: "FreedomGuard", status: "planned" },
    { href: "/Omnifinery", src: "/omnifinery.png", alt: "Omnifinery Logo", name: "Omnifinery", status: "planned" },
    { href: "/TimeCoin", src: "/time3.png", alt: "TimeCoin Logo", name: "Time Coin", status: "planned" },
    // ... add other projects here with their respective status
];


  useEffect(() => {
    setFilteredStatus('planned');
  }, []);

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
        <div className="filter">
          <button onClick={() => setFilteredStatus('all')}>All</button>
          <button onClick={() => setFilteredStatus('planned')} style={{ fontWeight: filteredStatus === 'planned' ? 'bold' : 'normal' }}>Planned</button>
          <button onClick={() => setFilteredStatus('in development')}>In Development</button>
          <button onClick={() => setFilteredStatus('completed')}>Completed</button>
        </div>
        <div className='grid-container'>
          {projects.filter(project => filteredStatus === 'all' || project.status === filteredStatus).map(project => (
            <Link href={project.href} className='cover' key={project.href}>
              <Image src={project.src} alt={project.alt} width={80} height={80} />
              <h2>{project.name}</h2>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}



