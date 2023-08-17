import Image from 'next/image';
import Link from "next/link"
import '../../Style/page.css';
import ParticlesBackground from '../../component/Particles';
import Footer from '../../component/Footer';

export default function Home() {
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
            <Link href="/research-clear">
              <Image src="/ResearchClear.png" alt='Research Clear Logo' width={80} height={80} />
            </Link>
            
            <Link href="/rreel">
              <Image src="/rreel.jpg" alt='RREEL Logo' width={80} height={80} />
            </Link>
            <Link href="/beltcoin">
              <Image src="/beltcoin.png" alt='Belt Coin Logo' width={80} height={80} />
            </Link>
            <Link href="/destiny-token">
              <Image src="/DESTINY.png" alt='Destiny Token Logo' width={80} height={80} />
            </Link>
            <Link href="/equine-nft">
              <Image src="/equinenft.png" alt='EquineNFT Logo' width={80} height={80} />
            </Link>
            <Link href="/FarmCoin">
              <Image src="/FarmCoin.png" alt='FarmCoin Logo' width={80} height={80} />
            </Link>
            <Link href="/FreedomGuard">
              <Image src="/Freedomguard.png" alt='FreedomGuard Logo' width={80} height={80} />
            </Link>
            <Link href="/Omnifinery">
              <Image src="/omnifinery.png" alt='Omnifinery Logo' width={80} height={80} />
            </Link>
            <Link href="/TimeCoin">
              <Image src="/time3.png" alt='TimeCoin Logo' width={80} height={80} />
            </Link>
    
          </div>
        ))}
        </div>
        <div className='products-cover' id='products-section'>
          <h3>Products</h3>
</div>
<div className='grid-container'>
    <Link href="/rreel" className='cover'>
        <Image src="/rreel.jpg" alt="rrel logo" width={80} height={80} />
        <h2>RREEL</h2>
    </Link>
    <Link href="/research-clear" className='cover'>
        <Image src="/ResearchClear.png" alt="Research logo" width={80} height={80} />
        <h2>Research Clear</h2>
    </Link>
    <Link href="/equine-nft" className='cover'>
        <Image src="/equinenft.png" alt="rrel logo" width={80} height={80} />
        <h2>EquineNFT</h2>
    </Link>
    <Link href="/beltcoin" className='cover align'>
        <Image src="/beltcoin.png" alt='Belt Coin Logo' width={80} height={80} />
        <h2>BeltCoin</h2>
    </Link>
    <Link href="/vibrateDNA" className='cover'>
        <Image src="/vibrateDNA1.png" alt="vibrateDNA logo" width={80} height={80} />
        <h2>vibrateDNA</h2>
    </Link>
    <Link href="/FarmCoin" className='cover'>
        <Image src="/FarmCoin.png" alt="Farm logo" width={80} height={80} />
        <h2>Farm Coin</h2>
    </Link>
    <Link href="/FreedomGuard" className='cover'>
        <Image src="/Freedomguard.png" alt="FreedomGuard logo" width={80} height={80} />
        <h2>FreedomGuard</h2>
    </Link>
    <Link href="/Omnifinery" className='cover'>
        <Image src="/omnifinery.png" alt="Omnifinery logo" width={80} height={80} />
        <h2>Omnifinery</h2>
    </Link>
    <Link href="/TimeCoin" className='cover'>
        <Image src="/time3.png" alt="TimeCoin logo" width={80} height={80} />
        <h2>Time Coin</h2>
    </Link>
    <Link href="/destiny-token" className='cover'>
        <Image src="/DESTINY.png" alt='Destiny Token Logo' width={80} height={80} />
        <h2>Destiny Token</h2>
    </Link>
</div>
</section>
<Footer />
</>
)
}
    
