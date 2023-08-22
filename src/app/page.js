import Image from 'next/image';
import Link from "next/link";
import { useReducer } from 'react';
import '../../Style/page.css';
import ParticlesBackground from '../../component/Particles';
import Footer from '../../component/Footer';

// Sample project data with all projects set to "planned"
const projectData = [
    { name: "RREEL", status: "planned", src: "/rreel.jpg", description: "RREEL is a protocol for the preservation of memories as digital records, minted as non-fungible tokens on the blockchain under the ERC-721 standard and as RREEL token by which theaters can do rewarding to users." },
    { name: "Research Clear", status: "planned", src: "/ResearchClear.png", description: "ResearchClear is an innovative blockchain-powered platform designed to revolutionize the landscape of academic research. With a mission to address the challenges faced by researchers and enhance the efficiency and transparency of the research process." },
    { name: "EquineNFT", status: "planned", src: "/equinenft.png", description: "EquineNFT aims to bring the world of horse ownership into the digital age. By combining advanced technology with the traditional industry of horse ownership, EquineNFT offers a platform for creating unique NFT IDs for each horse. These NFTs serve as secure and reliable proof of ownership that can be used for buying, selling, and trading horses." },
    { name: "BeltCoin", status: "planned", src: "/beltcoin.png", description: "BeltCoin is a revolutionary WEB3 startup with a vision to restore and preserve the Earths ecosystem while fostering bio diversity. The core focus is safeguarding keystone species within aquatic environments. Employing cutting edge hardware and leveraging cryptocurrency." },
    { name: "vibrateDNA", status: "planned", src: "/vibrateDNA1.png", description: "vibrateDNA introduces an innovative web3 platform, blending advanced tech with the spheres of health and well-being." },
    { name: "Farm Coin", status: "planned", src: "/FarmCoin.png", description: "Farm coin is a digital currency designed to address challenges in the agricultural and farming sectors." },
    { name: "FreedomGuard", status: "planned", src: "/Freedomguard.png", description: "FreedomGuard provides a fast peer-to-peer anti-trafficking solution, supported by DAO-driven fundraising and assistance for victims, strengthened by web3 and AI-enhanced data protection." },
    { name: "Omnifinery", status: "planned", src: "/omnifinery.png", description: "Omnifinery pioneers the digital transformation of the fashion sector, surpassing tangible boundaries through web3." },
    { name: "Time Coin", status: "planned", src: "/time3.png", description: "Time coin is a cryptocurrency based on time, presenting a Universal Basic Income approach." },
    { name: "Destiny Token", status: "planned", src: "/DESTINY.png", description: "DestinyToken (DTP) is a stablecoin in the asset creation in DeFi category." }
];


const initialState = { status: 'all' };

function reducer(state, action) {
    switch (action.type) {
        case 'setStatus':
            return { ...state, status: action.status };
        default:
            throw new Error();
    }
}

export default function Home() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const filteredProjects = state.status === 'all' ? projectData : projectData.filter(project => project.status === state.status);

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
                    <label htmlFor="status">Status:</label>
                    <select id="status" value={state.status} onChange={event => dispatch({ type: 'setStatus', status: event.target.value })}>
                        <option value="all">All</option>
                        <option value="planned">Planned</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className='grid-container'>
                    {filteredProjects.map(project => (
                        <Link href={`/${project.name.toLowerCase()}`} className='cover' key={project.name}>
                            <Image src={project.src} alt={`${project.name} logo`} width={80} height={80} />
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </Link>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    )
}


