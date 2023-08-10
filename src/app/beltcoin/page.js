'use client'; 
import ReactPlayer from "react-player"; 

const BeltCoin = () => { 
  const videoUrl = 'https://vimeo.com/829918389?share=copy'; 

  return ( 
    <main className="main"> 
      <div> 
        <h2 className="heading-text">Introduction</h2> 
        <p className="p-text"> 
          BeltCoin is a revolutionary Web3 startup with a vision to restore and preserve the Earth's ecosystem while fostering biodiversity. The core focus is safeguarding keystone species within aquatic environments. Employing cutting-edge hardware and leveraging cryptocurrency, Beltcoin utilises an advanced hardware system designed to purify water for the benefit of single-cell organisms, creating optimised environments that foster the growth and conservation of keystone species. This ensures the delicate balance of the ecosystem remains intact.
        </p> 
        <div className="m-bottom"> 
          <ReactPlayer 
            url={videoUrl}  
            controls={true} 
            playing={false}  // Video will not auto-play
            width='640px'    // Medium width
            height='360px'   // Corresponding height for the medium width
          /> 
        </div> 
      </div> 
    </main> 
  ); 
}; 

export default BeltCoin;

