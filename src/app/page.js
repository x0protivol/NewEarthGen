mport Image from 'next/image'; 
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
            <p>BeltCoin is a revolutionary WEB3 startup with a vision to restore and preserve the Earths ecosystem while fostering bio diversity. The core focus is safeguarding keystone
species within aquatic environments. Employing cutting edge hardware and leveraging cryptocurrency.</p> 
          </Link> 
             <Link href="/vibrateDNA" className='cover'> 
            <Image src="/vibrateDNA1.png" alt="vibrateDNA logo" width={80} height={80} /> 
            <h2>vibrateDNA</h2> 
            <p>vibrateDNA introduces an innovative web3 platform, blending advanced tech with the spheres of health and well-being.</p> 
          </Link> 
          <Link href="/FarmCoin" className='cover'> 
            <Image src="/FarmCoin.png" alt="Farm logo" width={80} height={80} /> 
            <h2>Farm Coin</h2> 
            <p>Farm coin is a digital currency designed to address challenges in the agricultural and farming sectors.</p> 
          </Link> 
          <Link href="/FreedomGuard" className='cover'> 
            <Image src="/Freedomguard.png" alt="FreedomGuard logo" width={80} height={80} /> 
            <h2>FreedomGuard</h2> 
            <p>FreedomGuard provides a fast peer-to-peer anti-trafficking solution, supported by DAO-driven fundraising and assistance for victims, strengthened by web3 and AI-enhanced data protection.</p> 
          </Link> 
            <Link href="/Omnifinery" className='cover'> 
            <Image src="/omnifinery.png" alt="Omnifinery logo" width={80} height={80} /> 
            <h2>Omnifinery</h2> 
            <p>Omnifinery pioneers the digital transformation of the fashion sector, surpassing tangible boundaries through web3.</p> 
          </Link> 
             <Link href="/TimeCoin" className='cover'> 
            <Image src="/time3.png" alt="TimeCoin logo" width={80} height={80} /> 
            <h2>Time Coin</h2> 
            <p>Time coin is a cryptocurrency based on time, presenting a Universal Basic Income approach.</p> 
          </Link> 
          <Link href="/destiny-token" className='cover'> 
            <Image src="/DESTINY.png" alt='Destiny Token Logo' width={80} height={80} /> 
            <h2>Destiny Token</h2> 
            <p> 
              DestinyToken (DTP) is a stablecoin in the asset creation in DeFi category.  
            </p> 
          </Link> 
        </div> 
      </section> 
      <Footer /> 
    </> 
  ) 
}
