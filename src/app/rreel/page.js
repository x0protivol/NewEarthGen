// 'use client'
//import ReactPlayer from "react-player";
import Link from "next/link";
import "../../../Style/rreel.css";

const Rreel = () => {
  // const videoUrl = 'https://app.colossyan.com/share/0aijwzdg';

  return (
    <main className="main">
      <div>
        <h2 className="heading-text">Introduction</h2>
        <p className="p-text">
          RREEL is a protocol for the preservation of memories as digital records, minted as non-fungible tokens on the blockchain under the ERC-721 standard and as RREEL token by which theaters can do rewarding to users.
        </p>
        <h2 className="heading-text">Overview</h2>
        <p className="p-text">
          RREEL is a public good, built on behalf of every human, to empower the individual with a reliable system for preserving memories and recognizing joy of theatre to the collective happiness and well-being of the people around them.
          While RREEL Inc builds the theatre tech, developers build the vibrant ecosystem of applications that connect communities and create new avenues for permissionless participation.
          RREEL is a permissionless ecosystem for the preservation of memories through theaters . The platform provides the infrastructure for issuers to mint and distribute digital collectables that mark memorable moments and movies , while rewarding them with tokens.
        </p>
        <div>
          <Link href="https://app.colossyan.com/share/0aijwzdg">Presentation Video</Link>
        </div>
        {/* <ReactPlayer
         url={videoUrl} 
         controls={true}
         playing={true} 
        /> */}
      </div>
    </main>
  )
}

export default Rreel;