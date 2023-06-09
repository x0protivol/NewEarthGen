import Link from "next/link";
import styles from "../Style/footer.module.css"

const Footer = () => {
  const emailAddress = 'NewGenEarth@protonmail.com';
  return (
    <footer className={styles.footer}>
      <div className={styles.flexcontainer}>
        <div>
          <h4 className={styles.pblock}>
            New Earth Gen
          </h4>
          <p className={styles.pbottom}>
            <Link href="/about">About us</Link>
          </p>
        </div>
        <div>
          <h3 className={styles.blockend}>
          New Earth Gen
          </h3>
          <button className={styles.btn}>
            <Link href={`mailto:${emailAddress}`}>
              Contact Us
            </Link>  
          </button>
        </div>
      </div>
      <p className={styles.text}>&copy; New Earth Gen. All Rights Reserved</p>
  </footer>
  );

};

export default Footer;