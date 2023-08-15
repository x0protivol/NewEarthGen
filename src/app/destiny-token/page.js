'use client'; 
import ReactPlayer from "react-player";

const DestinyToken = () => {
  const videoUrl = 'https://vimeo.com/829961012?share=copy';

  return (
    <main className="main">
      <section>
        <header>
          <h2 className="heading-text">Introduction</h2>
        </header>
        <p className="p-text">
          DestinyToken (DTP) is a DeFi stablecoin
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

export default DestinyToken;

