import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <FontAwesomeIcon icon={['fas', 'faUser']} />
          <h3>
           Aapla Bazar
            <i>
            <img src="/image/aaplabazar.jpeg" alt="Aapla Bazar" />
            </i>
          </h3>
          <p>
            At.Vaijapur Tal.Vaijapur Dist.CCH.Sambhajinagar
          </p>
          <div className="share">
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faFacebookF} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
              </i>
            </a>
            <img src="image/payment.png" alt="" />

          </div>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +123 456 7890
          </a>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +111 222 3333
          </a>
          <a href="/" className="links" id="emailLink">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            name@email.com
          </a>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </i>
            Vaijapur
          </a>
        </div>
        <div className="box">
          <h3>quick info</h3>
          <a href="#home" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            home
          </a>
          <a href="#features" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            features
          </a>
          <a href="#products" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            products
          </a>
          <a href="#categories" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            categories
          </a>
          <a href="#reviews" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            reviews
          </a>
          <a href="#blogs" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            blogs
          </a>
        </div>
      
      </div>
      <div className="credits">
        <p>
          Created By
          {' '}
          <span> Web Designer</span>
          {' '}
          | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
