'use client';
import ReactPlayer from "react-player";
// Removed local CSS import; ensure '../../../Style/rreel.css' is imported in layout.js for global styles

const EquineNft = () => {
  const videoUrl = 'https://vimeo.com/858177846?share=copy';

  return (
    <main className="main">
      <section>
        <header>
          <h2 className="heading-text">Introduction</h2>
        </header>
        <p className="p-text">
          EquineNFT aims to bring the world of horse ownership into the digital age. By combining advanced technology with the traditional industry of horse ownership, EquineNFT offers a platform for creating unique NFT IDs for each horse. These NFTs serve as secure and reliable proof of ownership that can be used for buying, selling, and trading horses.
        </p>
      </section>

      <section>
        <header>
          <h2 className="heading-text">Overview</h2>
        </header>
        <p className="p-text">
          EquineNFTs incorporate microchip & QR code technology, enabling horse owners to easily create and manage their horse ownership NFTs on-chain. This technology provides a secure and reliable way of establishing ownership and ensuring the safety of horses. It offers a roadmap for a comprehensive breeding platform that includes staking, betting, and trading marketplaces. With a focus on innovation, security, and user experience, offering a one-stop shop for all things related to horse ownership, breeding, and trading along with staking of NFTs for creating an additional revenue stream for horse owners.
          EquineNFT's platform enables horse owners to upload detailed information and images of their horses, which can be easily accessed and viewed by potential buyers. By allowing horse owners to showcase their horses in a visually appealing and informative way. It helps them to increase the chances of finding the right buyers. Horse owners can add a range of details about their horses, such as age, breed, gender, height, color, and temperament, along with multiple images.
        </p>
      </section>

      <section className="m-bottom" aria-label="EquineNFT video">
        <ReactPlayer
          url={videoUrl}
          controls={true}
          playing={false}
          width='100%'
          height='100%'
        />
      </section>
    </main>
  );
};

export default EquineNft;

