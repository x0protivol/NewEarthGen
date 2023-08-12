'use client' 
import ReactPlayer from "react-player";
import "../../../Style/rreel.css";

const FreedomGuard = () => {
  const videoUrl = 'https://vimeo.com/853986565?share=copy';

  return (
    <main className="main">
      <section>
        <header>
          <h2 className="heading-text">Introduction</h2>
        </header>
        <p className="p-text">
        FreedomGuard aims to solve global human trafficking with web3.
        </p>
      </section>

      <section>
        <header>
          <h2 className="heading-text">Overview</h2>
        </header>
        <p className="p-text">
        FreedomGuard offers a swift p2p anti-trafficking system, DAO-backed crowdfunding, and victim support, fortified by web3 and AI data security.
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

export default FreedomGuard;
