import dynamic from 'next/dynamic';
import '../../Style/page.css';
import ParticlesBackground from '../../component/Particles';
import Footer from '../../component/Footer';
import { NavigationContext } from 'next/navigation'; // <-- New import

const FilterableProjects = dynamic(() => import('./FilterableProjects'), {
  ssr: false,
  loading: () => <p>Loading...</p> // Optional loading component
});

export default function Home() {
  return (
    <NavigationContext.Provider value={{ push: (url) => { window.location.href = url; } }}>
      <main className='home-main'>
        <ParticlesBackground />
        <div className='text-cover'>
          <h1 className='main-text'>
            Real World Blockchain Applications
          </h1>
        </div>
      </main>
      <section>
        <FilterableProjects />
      </section>
      <Footer />
    </NavigationContext.Provider>
  );
}
