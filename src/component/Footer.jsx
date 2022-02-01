import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style/style.css';
function Footer() {
     const store = useSelector((state) => state);
     return (
          <section className={`main_footer_section ` + store} id='contact'>
               <div className='main_get_in_touch'>
                    <div className='main_message'>
                         <h2 className='main_title'>Get in Touch.</h2>
                         <p className='main_message_paregraph'>
                              I'm ready for challenges and opportunities. Please
                              send me an email if you want to chat with me.
                         </p>
                    </div>
                    <div className='other_get_in_touch_links'>
                         <div className='work_email'>
                              <Link to='/work' className='work_link'>
                                   Work
                              </Link>
                              <a
                                   href='mailto:hussein18to30@gmail.com'
                                   className='gmail_link'
                                   title='email'
                              >
                                   Email Me
                              </a>
                         </div>
                    </div>
               </div>
               <div className='main_right'>
                    <p className='all_right'>© 2022 hussein ali zabi</p>
               </div>
          </section>
     );
}

export default Footer;
