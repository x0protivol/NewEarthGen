import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../../Style/page.css';
import ParticlesBackground from '../../component/Particles';
import Footer from '../../component/Footer';
import FilterableProjects from './FilterableProjects'; // Ensure correct path

export default function Home() {
    const router = useRouter();
    const filter = router.query.filter || 'planned';

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
                <div className='products-cover' id='products-section'>
                    <h3>Products</h3>
                    <div>
                        <button onClick={() => router.push('?filter=planned')}>Projects Planned</button>
                        <button onClick={() => router.push('?filter=development')}>Projects in Development</button>
                    </div>
                </div>
                <FilterableProjects filter={filter} />
            </section>
            <Footer />
        </>
    );
}


