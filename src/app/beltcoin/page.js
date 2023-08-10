'use client'; 
import ReactPlayer from "react-player"; 
 
const BeltCoin = () => { 
  const videoUrl = 'https://vimeo.com/829918389?share=copy'; 
  return ( 
    <main className="main"> 
    <div> 
      <h2 className="heading-text">Introduction</h2> 
      <p className="p-text"> 
        BeltCoin is a revolutionary Web3 startup with a vision to restore and preserve the Earths ecosystem while fostering bio diversity. The core focus is safeguarding keystone species within aquatic environments. Employing cutting edge hardware and leveraging cryptocurrency. Beltcoin utilises advanced hardware system designed to purify water for the benefit of single cell organisms creating a optimised environments that fosters the growth and conservation of keystone species. This ensures the delicate balanceof ecosystem remains intact 
      </p> 
      <div className="m-bottom"> 
        <ReactPlayer 
          url={videoUrl}  
          controls={true} 
          playing={true}  
          width='100%' 
          height='100%' 
        /> 
      </div> 
    </div> 
  </main> 
  ); 
}; 
 
export default BeltCoin;

