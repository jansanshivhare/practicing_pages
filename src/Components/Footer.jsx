import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='container w-75'>
          <div className='footer__option '>
            <div className='footer__option__item'>
              <h4 className='mx-auto text-center mt-5'>About us</h4>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus consequatur rem illo quis numquam, minima eos quam eum
                expedita? Reprehenderit quibusdam perferendis repudiandae rem
                corrupti.....
                <NavLink to='/about' className='read__more'>
                  Read more <span className='arrow_right'></span>
                </NavLink>
              </p>
            </div>
            <div className='row'>
              <div className='col-4 text-center'>
                <div className='footer__option__item'>
                  <h5>Who we are</h5>
                  <ul>
                    <li>
                      <NavLink to='#'>Team</NavLink>
                    </li>
                    <li>
                      <NavLink to='#'>Carrers</NavLink>
                    </li>
                    <li>
                      <NavLink to='#'>Contact us</NavLink>
                    </li>
                    <li>
                      <NavLink to='#'>Locations</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-4 text-center'>
                <div className='footer__option__item'>
                  <h5>Our work</h5>
                  <ul>
                    <li>
                      <NavLink to='#'>Service</NavLink>
                    </li>
                    <li>
                      <NavLink to='#'>Latest</NavLink>
                    </li>
                    <li>
                      <NavLink to='#'>Browse Archive</NavLink>
                    </li>
                    <li>
                      <NavLink to='#'>Video for web</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-4 text-center'>
                <div className='footer__top__social'>
                  <h5>Follow Us</h5>
                  <ul>
                    <li>
                      <NavLink to='#'>
                        <i className=''> Facebook</i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#'>
                        <i className=''>Instagram</i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#'>
                        <i className=''> Twitter </i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#'>
                        <i className=''>Linkedin </i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className='footer__copyright'>
            <div className='text-center mt-4'>
              <p className='footer__copyright__text mb-0 pb-3'>
                Copyright &copy; All rights reserved | This template is made
                with <i aria-hidden='true'>passion</i> by
                <NavLink to='' target='_blank'>
                  {' '}
                  shadi mein jaroor aana
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
