'use client';
// Removed local CSS import; ensure '../../../Style/rreel.css' is imported in layout.js for global styles
import ReactPlayer from "react-player";

const ResearchClear = () => {
  const videoUrl = 'https://vimeo.com/829920600?share=copy';

  return (
    <main className="main">
      <section>
        <header>
          <h2 className="heading-text">Introduction</h2>
        </header>
        <p className="p-text">
          ResearchClear is an innovative blockchain-powered platform designed to revolutionize the landscape of academic research. With a mission to address the challenges faced by researchers and enhance the efficiency and transparency of the research process, ResearchClear aims to create a decentralized ecosystem that fosters collaboration, rewards quality contributions, and provides a secure and accessible platform for researchers to showcase their work.
        </p>
      </section>
      
      <section>
        <header>
          <h2 className="heading-text">Overview</h2>
        </header>
        <p className="p-text">
          The world of academic research is constantly evolving, driven by the pursuit of knowledge and the desire to advance various fields of study. However, this pursuit is often hindered by a range of challenges. Researchers face funding problems, struggle with limited resources, and encounter barriers in publishing their work. Additionally, the rise of predatory publishers, ghost journals, and questionable impact ratings has further eroded the integrity and credibility of academic research.
          ResearchClear recognizes these challenges and seeks to provide a comprehensive solution. By leveraging the power of blockchain technology, ResearchClear establishes a transparent and trustless environment that promotes integrity, incentivizes high-quality research, and connects researchers with funding opportunities.
        </p>
      </section>

      <section className="m-bottom" aria-label="ResearchClear video">
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

export default ResearchClear;
