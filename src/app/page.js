import Image from 'next/image';
import Link from "next/link"
import '../../Style/page.css';
import ParticlesBackground from '../../component/Particles';

export default function Home() {
  return (
    <>
      <main className='main'>
        <ParticlesBackground />
        <div className='text-cover'>
          <h1 className='main-text'>
            New Gen <br/> Earth
          </h1>
          <p>Making the Earth a cleaner and better place one day at a time</p>
        </div>
      </main>
      <section className='grid-container'>
          <Link href="/rreel" className='cover'>
            <Image src="/rreel.jpg" alt="rrel logo" width={80} height={80} />
            <h2>RREEL</h2>
            <p>RREEL is a protocol for the preservation of memories as digital records, minted as non-fungible tokens on the blockchain under the ERC-721 standard and as RREEL token by which theaters can do rewarding to users.</p>
          </Link>
          <Link href="/research-clear" className='cover'>
            <Image src="/ResearchClear.png" alt="Research logo" width={80} height={80} />
            <h2>Research Clear</h2>
            <p>ResearchClear is an innovative blockchain-powered platform designed to revolutionize the landscape of academic research. With a mission to address the challenges faced by researchers and enhance the efficiency and transparency of the research process, ResearchClear aims to create a decentralized ecosystem that fosters collaboration, rewards quality contributions, and provides a secure and accessible platform for researchers to showcase their work.</p>
          </Link>
          {/* Beltcoin: just a video */}
          <Link href="" className='cover'>
            <Image src="/rreel.jpg" alt="rrel logo" width={80} height={80} />
            <h2>RREEL</h2>
            <p>RREEL is a protocol for the preservation of memories as digital records, minted as non-fungible tokens on the blockchain under the ERC-721 standard and as RREEL token by which theaters can do rewarding to users.</p>
          </Link>
          <Link href="/equine-nft" className='cover'>
            <Image src="/equinenft.png" alt="rrel logo" width={80} height={80} />
            <h2>EquineNFT</h2>
            <p>EquineNFT aims to bring the world of horse ownership into the digital age. By combining advanced technology with the traditional industry of horse ownership, EquineNFT offers a platform for creating unique NFT IDs for each horse. These NFTs serve as secure and reliable proof of ownership that can be used for buying, selling, and trading horses.</p>
          </Link>
          <div className='cover align'>
            <Image src="/DESTINY.png" alt="Destiny logo" width={80} height={80} />
            <h2>Destiny Token Project</h2>
            <p>EquineNFT aims to bring the world of horse ownership into the digital age. By combining advanced technology with the traditional industry of horse ownership, EquineNFT offers a platform for creating unique NFT IDs for each horse. These NFTs serve as secure and reliable proof of ownership that can be used for buying, selling, and trading horses. The EquineNFT platform also includes a comprehensive marketplace where owners can showcase their horses to potential buyers, upload detailed information and images, and establish a breeding plan.</p>
          </div>
      </section>
    </>
  )
}
