
import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react';

export default function FilterableProjects() {
  const [filter, setFilter] = useState('planned'); // default is 'planned'

  const projects = [
     { path: "/rreel", alt: "rrel logo", name: "RREEL", status: "planned" },
    { path: "/research-clear", alt: "Research logo", name: "Research Clear", status: "planned" },
    { path: "/equine-nft", alt: "rrel logo", name: "EquineNFT", status: "planned" },
    { path: "/beltcoin", alt: 'Belt Coin Logo', name: "BeltCoin", status: "planned" },
    { path: "/vibrateDNA", alt: "vibrateDNA logo", name: "vibrateDNA", status: "planned" },
    { path: "/FarmCoin", alt: "Farm logo", name: "Farm Coin", status: "planned" },
    { path: "/FreedomGuard", alt: "FreedomGuard logo", name: "FreedomGuard", status: "planned" },
    { path: "/Omnifinery", alt: "Omnifinery logo", name: "Omnifinery", status: "planned" },
    { path: "/TimeCoin", alt: "TimeCoin logo", name: "Time Coin", status: "planned" },
    { path: "/destiny-token", alt: 'Destiny Token Logo', name: "Destiny Token", status: "planned" }
  ];

  const filteredProjects = projects.filter(project => project.status === filter);

  return (
    <>
      <div className='slider'>
        {[...Array(4)].map((_, index) => (
          <div className='slide-track' key={index}>
            {filteredProjects.map(project => (
              <Link key={project.path} href={project.path}>
                <Image src={`${project.path}.png`} alt={project.alt} width={80} height={80} />
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className='products-cover' id='products-section'>
        <h3>Products</h3>
        <div>
          <label>
            <input
              type="radio"
              value="planned"
              checked={filter === 'planned'}
              onChange={() => setFilter('planned')}
            />
            Projects Planned
          </label>
          <label>
            <input
              type="radio"
              value="development"
              checked={filter === 'development'}
              onChange={() => setFilter('development')}
            />
            Projects in Development
          </label>
        </div>
      </div>

      <div className='grid-container'>
        {filteredProjects.map(project => (
          <Link key={project.path} href={project.path} className='cover'>
            <Image src={`${project.path}.png`} alt={project.alt} width={80} height={80} />
            <h2>{project.name}</h2>
          </Link>
        ))}
      </div>
    </>
  );
}
