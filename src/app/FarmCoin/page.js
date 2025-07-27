'use client';
import ReactPlayer from "react-player";
// Removed local CSS import; ensure '../../../Style/rreel.css' is imported in layout.js for global styles

const FarmCoin = () => {
  const videoUrl = 'https://vimeo.com/853802261?share=copy';

  return (
    <main className="main">
      <section>
        <header>
          <h2 className="heading-text">Introduction</h2>
        </header>
        <p className="p-text">
          Farm coin is a cryptocurrency directed towards solving issues in farming & agriculture industry.
        </p>
      </section>

      <section>
        <header>
          <h2 className="heading-text">Overview</h2>
        </header>
        <p className="p-text">
          Farm Coin is  aimed at ending farm slavery, ensuring fair compensation, and fostering sustainable farming practices, complemented by universal basic income, gleaning programs, and dedicated resting areas for remote farmers, all while providing financial growth through staking to the farming community.
        </p>
      </section>

      <section className="m-bottom" aria-label="FarmCoin video">
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

export default FarmCoin;
