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
          DestinyToken (DTP) is a stablecoin in the asset creation in DeFi category. DestinyToken addresses the challenges faced in the crypto market such as high volatility, managing multiple cryptocurrencies, and expensive prices which often lead to missed investment opportunities. By creating an indexed token backed by the top nine cryptocurrencies, DestinyToken aims to provide a reliable and accessible solution to investors and traders. DestinyToken works on the principle of combining the value and stability of the top nine cryptocurrencies by market capitalisation.
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

