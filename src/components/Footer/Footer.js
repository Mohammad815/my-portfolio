import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebookSquare, faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'


export const Footer = () => {
  return <div className='footer'>
      <div className='footer-bootom'>
          <div>
          <a className="link" href="https://www.linkedin.com/in/mdforhad715/" target="_blank" rel="noreferrer"><FontAwesomeIcon className='me-4' icon={faLinkedin} /></a>
      
          </div>
          <div>
          <a className="link" href="https://www.facebook.com/mohammadforhad715" target="_blank" rel="noreferrer"><FontAwesomeIcon className='me-4' icon={faFacebookSquare} /></a>
      
          </div>
          <div>
          <a className="link" href="https://github.com/Mohammad815" target="_blank" rel="noreferrer"><FontAwesomeIcon className='me-4' icon={faGithubSquare} /></a>
          </div>
      </div>
      <p className='text-white'>All right reserved <FontAwesomeIcon icon={faCopyright} className='fs-4'/> Mohammad Forhad</p>
  </div>;
};
