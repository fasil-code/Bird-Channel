import React from 'react';

import images from '../../constants/images';
import './Footer.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
 const today=new Date().getFullYear();
const Footer = () => (
  <div className='app__footer section__padding'>
 
 <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext" style={{fontFamily: "Arial Rounded MT Bold"}}>Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="WCBCL" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext" style={{fontFamily: "Arial Rounded MT Bold"}}>Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">&#169;{today}  Fasil Shafi All Rights reserved.</p>
    </div>
  </div>
);


export default Footer;