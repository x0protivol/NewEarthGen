import dynamic from 'next/dynamic';
import '../../Style/page.css';
import withClient from './withClient'; // Make sure the path is correct
import ParticlesBackground from '../../component/Particles';
import Footer from '../../component/Footer';

// Dynamically import the component with SSR turned off
const FilterableProjects = dynamic(() => import('./FilterableProjects'), {
  ssr: false,
  loading: () => <p>Loading...</p> // Optional loading component
});

function Home() {
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
        <FilterableProjects />
      </section>

      <Footer />
    </>
  );
}

export default withClient(Home);


