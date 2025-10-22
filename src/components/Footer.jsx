 import styles from "./Footer.module.css";
 import React, {useEffect} from "react";
 import AOS from 'aos';
 import 'aos/dist/aos.css';
 const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing:'ease-in-out',
            once: true,
        });
    },[]);
 return(
    <>
   <footer>
   <h1 className={styles.logo}>Travel</h1>
   <div className={styles.support}>
    <h2>Support</h2>
        <ul>
            <li>customer support</li>
            <li>Privacy & Policy</li>
            <li>Contact Us</li>
        </ul>
   </div>
   <div className={styles.pay}>
    <h2>Pay Safely With Us</h2>
    <p>The payement encrypted and 
        transmitted securety with sn SSL protocol
    </p>
    <div className={styles.paymentMethods}>
   <img src="./imgs/visa.png" alt="" />
    <img src="./imgs/paypal.png" alt="" />
    </div>
   </div>

   <div  className={styles.follow}>
   <span>Follow Us</span> 
   <div className={styles.socialMedia}>
    <a href="https://www.linkedin.com/"><i className="bi bi-linkedin"></i></a>
    <a  href="https://www.facebook.com/" ><i className="bi bi-facebook"></i></a>
    <a href="https://www.twitter.com/"><i className="bi bi-twitter"></i></a>
    </div>
   </div>

   {/*Information Section*/}
   <div className={styles.inf}>
    <p>&copy; copyright.Travel 2024. All rights reserved.</p>
   </div>
   </footer>
    </>
 )
}

export default Footer;