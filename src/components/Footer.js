import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">N.Marotta</div>
          <div className="footer-social">
            <a href="https://github.com/Nick-Maro" className="social-link">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Nicolò Marotta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;