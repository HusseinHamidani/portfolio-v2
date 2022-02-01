import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import code from '../images/logo.svg';
import movie_webiste from '../website images/moviescreenshotfigma.png';
import Navbar from './Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Home() {
     const store = useSelector((state) => state);
     useEffect(() => {
          Aos.init({ duration: 2000 });
     }, []);
     return (
          <div className='main_home'>
               {/* <Navbar /> */}
               <main className='main_home_container'>
                    <img src={code} alt='' />
                    <div className='main_header_continer'>
                         <h2 className='im_hussein_zabi'>I'm Hussein Zabi</h2>
                         <p className='main_ing'>
                              A self-motivated front-end developer with hands-on
                              project experiences designing and building
                              websites from scratch. My goal is to build
                              websites with both visually appealing and user
                              experience-oriented functionality. More about me.
                         </p>
                    </div>
                    <button className='view_my_work'>VIEW MY WORK</button>
               </main>
               <div className='main_project_section'>
                    <div className='main_title_project'>
                         <h2 className='projects_title'>PROJECTS.</h2>
                    </div>
                    <div className='main_3_project_handler'>
                         <div
                              data-aos='fade-right'
                              className='project_container'
                         >
                              <div className='main_image_handler'>
                                   <img src={movie_webiste} alt='' />
                              </div>
                              <div className='main_info_handler'>
                                   <h2 className='project_name'>Movie</h2>
                                   <p className='project_story'>
                                        A movie web app that tells you
                                        inforamtion about the movie, search
                                   </p>
                                   <div className='main_lan_handler'>
                                        <span className='lang'>React</span>
                                        <span className='lang'>Redux</span>
                                        <span className='lang'>Sass</span>
                                        <span className='lang'>API</span>
                                        <span className='lang'>JavaScript</span>
                                   </div>
                              </div>
                         </div>
                         <div
                              className='project_container'
                              data-aos='fade-left'
                         >
                              <div className='main_image_handler'>
                                   <img src={movie_webiste} alt='' />
                              </div>
                              <div className='main_info_handler'>
                                   <h2 className='project_name'>Movie</h2>
                                   <p className='project_story'>
                                        A movie web app that tells you
                                        inforamtion about the movie, search
                                   </p>
                                   <div className='main_lan_handler'>
                                        <span className='lang'>React</span>
                                        <span className='lang'>Redux</span>
                                        <span className='lang'>Sass</span>
                                        <span className='lang'>API</span>
                                        <span className='lang'>JavaScript</span>
                                   </div>
                              </div>
                         </div>
                         <div
                              className='project_container'
                              data-aos='flip-left'
                         >
                              <div className='main_image_handler'>
                                   <img src={movie_webiste} alt='' />
                              </div>
                              <div className='main_info_handler'>
                                   <h2 className='project_name'>Movie</h2>
                                   <p className='project_story'>
                                        A movie web app that tells you
                                        inforamtion about the movie, search
                                   </p>
                                   <div className='main_lan_handler'>
                                        <span className='lang'>React</span>
                                        <span className='lang'>Redux</span>
                                        <span className='lang'>Sass</span>
                                        <span className='lang'>API</span>
                                        <span className='lang'>JavaScript</span>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className='main_see_all_projects_section'>
                         <Link to='/work' className='Link_to_work'>
                              VIEW MY WORK
                         </Link>
                    </div>
               </div>
          </div>
     );
}

export default Home;
