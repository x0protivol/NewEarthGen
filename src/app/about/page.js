import Image from "next/image";
import styles from "../../../Style/about.module.css";

const About = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.headercover}>
          <h1 className={styles.pleft}>About Us</h1>
        </div>
        <div className={styles.areatwo}>
          <h2>NewGenEarth - Team Building and Launching Projects in Web3</h2>
        </div>
        <div className={styles.area}>
          <p>
            NewGenEarth is a dynamic team specializing in building and launching projects in the Web3 space. With a strong emphasis on innovation and a deep understanding of blockchain technology, we are dedicated to creating impactful solutions that leverage the power of decentralized systems.
          </p>
        </div>
      </main>
      <section className="flex-contianer">
        <div>
          <div>
            <h2>Building Teams for Web3 Success</h2>
            <p>
              At NewGenEarth, we believe in the power of collaboration and the strength of a well-aligned team. We bring together talented individuals with diverse backgrounds and expertise, fostering a creative and inclusive environment. Our team-building approach ensures that we assemble the right skills and knowledge needed to tackle complex challenges in the Web3 landscape.
            </p>
          </div>
          <div>
            <Image src="/team.jpg" alt="" width={120} height={100} />
          </div>
          {/*2 */}
          <div>
            <Image src="/team.jpg" alt="" width={120} height={100} />
          </div>
          <div>
            <h2>Launching Projects in the Web3 Ecosystem</h2>
            <p>
              Our primary focus is on ideating, developing, and launching projects within the Web3 ecosystem. From decentralized applications (dApps) to blockchain-based platforms, we aim to create innovative solutions that empower individuals and transform industries. With a deep understanding of various blockchain protocols and their capabilities, we leverage the decentralized nature of Web3 to build secure, transparent, and scalable projects.
            </p>
          </div>
          {/*3 */}
          <div>
            <h2>Navigating the Web3 Landscape</h2>
            <p>
              The Web3 space is constantly evolving, and staying ahead of the curve is paramount. Our team at NewGenEarth is committed to continuous learning and exploration. We stay up to date with the latest advancements in blockchain technology, smart contracts, decentralized finance (DeFi), and other Web3 trends. This allows us to identify opportunities, mitigate risks, and provide valuable insights to our partners.
            </p>
          </div>
          <div>
            <Image src="/team.jpg" alt="" width={120} height={100} />
          </div>
          {/*4 */}
          <div>
            <Image src="/team.jpg" alt="" width={120} height={100} />
          </div>
          <div>
            <h2>A Holistic Approach to Project Success</h2>
            <p>
              While technical expertise is crucial, we understand that successful projects in Web3 require more than just code. We take a holistic approach, considering factors such as user experience, market fit, and community engagement. Our team combines technical prowess with business acumen, drawing on our vast network of industry connections and experiences. This enables us to deliver projects that resonate with users and thrive in the Web3 ecosystem.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h3>
          Take a look at our products
        </h3>
      </section>
      <section>
        <h2>
          Join Forces with NewGenEarth
        </h2>
        <div>
          <p>
            If you have a vision for a Web3 project, we invite you to join forces with NewGenEarth. Whether you are a blockchain enthusiast, an entrepreneur, or an organization looking to explore the potential of Web3, we are here to support you. Together, we can turn ideas into reality and contribute to the advancement of decentralized technologies.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;