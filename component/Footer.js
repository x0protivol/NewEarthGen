import Link from "next/link";
import styles from "../Style/footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.flexcontainer}>
        <div>
          <h4 className={styles.pblock}>
            NewGenEarth
          </h4>
          <p className={styles.pbottom}>
            <Link href="/about">About us</Link>
          </p>
          <p className={styles.pbottom}>
            <Link href="/beltcoin">BeltCoin</Link>
          </p>
          <p className={styles.pbottom}>
            <Link href="/equine-nft">EquineNFT</Link>
          </p>
          <p className={styles.pbottom}>
            <Link href="/research-clear">Research Clear</Link>
          </p>
          <p className={styles.pbottom}>
            <Link href="/rreel">RREEL</Link>
          </p>
        </div>
        <div>
          <h3 className={styles.blockend}>
            NewGenEarth
          </h3>
          <button className={styles.btn}>
            <Link href={`mailto:${emailAddress}`}>
              Contact Us
            </Link>  
          </button>
        </div>
      </div>
      <p className={styles.text}>&copy; NewGenEarth. All Rights Reserved</p>
  </footer>
  );

};

export default Footer;