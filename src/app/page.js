import Image from 'next/image';
import Link from "next/link"
import '../../Style/page.css';
import ParticlesBackground from '../../component/Particles';
import Footer from '../../component/Footer';

export default function Home() {

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

  function filterProjects(status) {
    const allProjects = document.querySelectorAll('.cover');
    allProjects.forEach(project => {
      if (status === 'all' || project.dataset.status === status) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  }

  // Call the filter function immediately after defining it to set the default state
  filterProjects('planned');

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
          <button onClick={() => filterProjects('all')}>All</button>
          <button onClick={() => filterProjects('planned')} style={{ fontWeight: 'bold' }}>Planned</button>
          <button onClick={() => filterProjects('in development')}>In Development</button>
          <button onClick={() => filterProjects('completed')}>Completed</button>
        </div>
        <div className='grid-container'>
          {projects.map(project => (
            <Link href={project.href} className='cover' key={project.href} data-status={project.status}>
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

    
