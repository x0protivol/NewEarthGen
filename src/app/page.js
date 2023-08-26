import Image from 'next/image';
import Link from "next/link";
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box, CssBaseline } from '@mui/material';
import ParticlesBackground from '../../component/Particles';
import Footer from '../../component/Footer';

function Home() {
    return (
        <>
            <CssBaseline />
            <Box sx={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ParticlesBackground />
                <Typography variant="h2" color="primary" sx={{ zIndex: 2 }}>
                    Real World Blockchain Applications
                </Typography>
            </Box>

            <Container>
                <Box my={4}>
                    <Typography variant="h4" gutterBottom>
                        Featured Products
                    </Typography>

         <Grid container spacing={4}>
    {[
    { href: "/rreel", src: "/rreel.jpg", title: "RREEL", desc: "RREEL is a protocol for the preservation of memories as digital records, minted as non-fungible tokens on the blockchain under the ERC-721 standard and as RREEL token by which theaters can do rewarding to users." },
    { href: "/research-clear", src: "/ResearchClear.png", title: "Research Clear", desc: "ResearchClear is an innovative blockchain-powered platform designed to revolutionize the landscape of academic research. With a mission to address the challenges faced by researchers and enhance the efficiency and transparency of the research process." },
    { href: "/equine-nft", src: "/equinenft.png", title: "EquineNFT", desc: "EquineNFT aims to bring the world of horse ownership into the digital age. By combining advanced technology with the traditional industry of horse ownership, EquineNFT offers a platform for creating unique NFT IDs for each horse. These NFTs serve as secure and reliable proof of ownership that can be used for buying, selling, and trading horses." },
    { href: "/beltcoin", src: "/beltcoin.png", title: "BeltCoin", desc: "BeltCoin is a revolutionary WEB3 startup with a vision to restore and preserve the Earths ecosystem while fostering bio diversity. The core focus is safeguarding keystone species within aquatic environments." },
    { href: "/vibrateDNA", src: "/vibrateDNA1.png", title: "vibrateDNA", desc: "vibrateDNA introduces an innovative web3 platform, blending advanced tech with the spheres of health and well-being." },
    { href: "/FarmCoin", src: "/FarmCoin.png", title: "Farm Coin", desc: "Farm coin is a digital currency designed to address challenges in the agricultural and farming sectors." },
    { href: "/FreedomGuard", src: "/Freedomguard.png", title: "FreedomGuard", desc: "FreedomGuard provides a fast peer-to-peer anti-trafficking solution, supported by DAO-driven fundraising and assistance for victims, strengthened by web3 and AI-enhanced data protection." },
    { href: "/Omnifinery", src: "/omnifinery.png", title: "Omnifinery", desc: "Omnifinery pioneers the digital transformation of the fashion sector, surpassing tangible boundaries through web3." },
    { href: "/TimeCoin", src: "/time3.png", title: "Time Coin", desc: "Time coin is a cryptocurrency based on time, presenting a Universal Basic Income approach." },
    { href: "/destiny-token", src: "/DESTINY.png", title: "Destiny Token", desc: "DestinyToken (DTP) is a stablecoin in the asset creation in DeFi category." }
].map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Link href={product.href}>
                  <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={product.src}
                      alt={product.title}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {product.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>


            <Footer />
        </>
    );
}

export default Home;
