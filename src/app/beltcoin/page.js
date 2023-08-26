'use client';  
import ReactPlayer from "react-player";
import "../../../Style/rreel.css";  
 
const BeltCoin = () => { 
  const videoUrl = 'https://vimeo.com/858184646?share=copy'; 
 
  return ( 
    <main className="main"> 
      <section> 
        <header> 
          <h2 className="heading-text">Introduction</h2> 
        </header> 
       <p className="p-text"> 
  BeltCoin is a revolutionary Web3 startup with a vision to restore and preserve the Earth&apos;s ecosystem while fostering biodiversity. The core focus is on safeguarding keystone species within aquatic environments. By employing cutting-edge hardware and leveraging cryptocurrency, BeltCoin utilizes an advanced hardware system designed to purify water for the benefit of single-cell organisms. This creates optimized environments that foster the growth and conservation of keystone species, ensuring the delicate balance of the ecosystem remains intact. 
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
 
export default BeltCoin;



