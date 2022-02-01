import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { open_action, close_action } from '../redux/actions/actions';
function Navbar() {
     const [ulbar, setUlBar] = useState('ulbar');
     const [hamp, setHamp] = useState('hamp');
     const [span, setSpan] = useState('span');
     const [isOpen, setIsOpen] = useState(false);
     const dispatch = useDispatch();
     function navbarControle() {
          const open = () => {
               setIsOpen(true);
               setSpan('span span_open');
               setHamp('hamp hamp_open');
               setUlBar('ulbar ulbarOpen');
               dispatch(close_action('main_home main_home_overflow'));
          };
          const close = () => {
               setIsOpen(false);
               setSpan('span');
               setHamp('hamp');
               setUlBar('ulbar');
               dispatch(open_action('main_home'));
          };
          if (!isOpen) {
               open();
          } else {
               close();
          }
     }
     return (
          <nav className='navbar'>
               <Link className='hussein_zabi_title' to='/'>
                    H<span className={span}>A</span>
               </Link>
               <div onClick={navbarControle} className={hamp}>
                    <span className='hamp_links'></span>
                    <span className='hamp_links'></span>
                    <span className='hamp_links'></span>
               </div>
               <ul className={ulbar}>
                    <li className='li_links'>
                         <Link
                              onClick={() => setIsOpen(false)}
                              className='Links'
                              to='/'
                         >
                              Home
                         </Link>
                    </li>
                    <li className='li_links'>
                         <Link
                              onClick={() => setIsOpen(false)}
                              className='Links'
                              to='/Work'
                         >
                              Work
                         </Link>
                    </li>
                    <li className='li_links'>
                         <Link
                              onClick={() => setIsOpen(false)}
                              className='Links'
                              to='#contact'
                         >
                              contact
                         </Link>
                    </li>
                    <li className='li_links'>
                         <Link
                              onClick={() => setIsOpen(false)}
                              className='Links'
                              to='/aboutme'
                         >
                              About me
                         </Link>
                    </li>
               </ul>
          </nav>
     );
}

export default Navbar;
