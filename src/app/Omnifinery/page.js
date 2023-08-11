import ReactPlayer from "react-player";
import "../../../Style/rreel.css";

const Omnifinery = () => {
  const videoUrl = 'https://vimeo.com/853805450?share=copy';

  return (
    <main className="main">
      <section>
        <header>
          <h2 className="heading-text">Introduction</h2>
        </header>
        <p className="p-text">
          Omnifinery spearheads the fashion industry digital evolution, transcending physical limitations using web3.
        </p>
      </section>

      <section>
        <header>
          <h2 className="heading-text">Overview</h2>
        </header>
        <p className="p-text">
        Omnifinery is a web3 Phygital platform, merging digital and physical realms with NFTs for clothing, curating a blend of renowned and emerging talents, entirely in house, it offers a unique blend of art, fashion, and collectibles.
        </p>
      </section>

      <section className="m-bottom">
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

export default Omnifinery;

