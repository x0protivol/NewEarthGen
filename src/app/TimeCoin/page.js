'use client';
import ReactPlayer from "react-player";
// Removed local CSS import; ensure '../../../Style/rreel.css' is imported in layout.js for global styles

const TimeCoin = () => {
  const videoUrl = 'https://vimeo.com/853803268?share=copy';

  return (
    <main className="main">
      <section>
        <header>
          <h2 className="heading-text">Introduction</h2>
        </header>
        <p className="p-text">
          Time coin is a cryptocurrency that redefines the concept of value.
        </p>
      </section>

      <section>
        <header>
          <h2 className="heading-text">Overview</h2>
        </header>
        <p className="p-text">
          Time coin is cryptocurrency on time, introducing a Universal Basic Income model and rewarding staking, its time economy system divides each day into 24 units, allowing users to stake tokens hourly and earn rewards.
        </p>
      </section>

      <section className="m-bottom" aria-label="TimeCoin video">
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

export default TimeCoin;
