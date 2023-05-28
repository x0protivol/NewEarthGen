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
            Bringing Blockchain Adoption To Billions
          </h1>
          {/* <p>Making the Earth a cleaner and better place one day at a time</p> */}
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
            
    
          </div>
        ))}
        </div>
        <div className='products-cover'>
          <h3>Products</h3>
        </div>
        <div className='grid-container'>
          <Link href="/rreel" className='cover'>
            <Image src="/rreel.jpg" alt="rrel logo" width={80} height={80} />
            <h2>RREEL</h2>
            <p>RREEL is a protocol for the preservation of memories as digital records, minted as non-fungible tokens on the blockchain under the ERC-721 standard and as RREEL token by which theaters can do rewarding to users.</p>
          </Link>
          <Link href="/research-clear" className='cover'>
            <Image src="/ResearchClear.png" alt="Research logo" width={80} height={80} />
            <h2>Research Clear</h2>
            <p>ResearchClear is an innovative blockchain-powered platform designed to revolutionize the landscape of academic research. With a mission to address the challenges faced by researchers and enhance the efficiency and transparency of the research process.</p>
          </Link>
          <Link href="/equine-nft" className='cover'>
            <Image src="/equinenft.png" alt="rrel logo" width={80} height={80} />
            <h2>EquineNFT</h2>
            <p>EquineNFT aims to bring the world of horse ownership into the digital age. By combining advanced technology with the traditional industry of horse ownership, EquineNFT offers a platform for creating unique NFT IDs for each horse. These NFTs serve as secure and reliable proof of ownership that can be used for buying, selling, and trading horses.</p>
          </Link>
          {/* Beltcoin: just a video and logo */}
          <Link href="/beltcoin" className='cover align'>
            <Image src="/beltcoin.png" alt='Belt Coin Logo' width={80} height={80} />
            <h2>BeltCoin</h2>
            <p>BeltCoin is a revolutionary WEB3 startup with a vision to restore and preserve the Earths ecosystem while fostering bio diversity. The core focus is safeguarding keystone species within aquatic environments. Employing cutting edge hardware and leveraging cryptocurrency.</p>
          </Link>
          <Link href="/destiny-token" className='cover span'>
            <Image src="/DESTINY.png" alt='Destiny Token Logo' width={80} height={80} />
            <h2>Destiny Token</h2>
            <p>
              DestinyToken (DTP) is a stablecoin in the asset creation in DeFi category. DestinyToken addresses the challenges faced in the crypto market such as high volatility, managing multiple cryptocurrencies, and expensive prices which often lead to missed investment opportunities. By creating an indexed token backed by the top nine cryptocurrencies DestinyToken aims to provide a reliable and accessible solution to investors and traders. DestinyToken works on the principle of combining the value and stability of the top nine cryptocurrencies by market capitalisation
            </p>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
