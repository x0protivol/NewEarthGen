'use client' 
import ReactPlayer from "react-player";
import "../../../Style/rreel.css";

const vibrateDNA = () => {
  const videoUrl = 'https://vimeo.com/853819140?share=copy';

  return (
    <main className="main">
      <section>
        <header>
          <h2 className="heading-text">Introduction</h2>
        </header>
        <p className="p-text">
          vibrateDNA presents a groundbreaking web3 platform that merges cutting-edge technology with the realms of health and wellness.
        </p>
      </section>

      <section>
        <header>
          <h2 className="heading-text">Overview</h2>
        </header>
        <p className="p-text">
      vibrateDNA pioneers proactive health monitoring and personalized well-being recommendations, this platform not only incentivizes users with cryptocurrency rewards for wearing the device and engaging in healthy activities but also revolutionizes the health industry by empowering individuals to take charge of their health. .
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

export default vibrateDNA;
