import React from 'react';
import Typed from 'typed.js';
import './App.css'
//import { useForm } from "react-hook-form"
//import Contact from './components/contact'
import Contact1 from './components/contact1'
const Portfolio = () => {
  React.useEffect(() => {
    var typed = new Typed('#element', {
      strings: ['Web Designer', 'Video Editor', 'Web Developer'],
      typeSpeed: 50,
    }); 

    const smoothScroll = (selector, targetId) => {
      document.querySelector(selector).addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
    };
    document.getElementById('downloadButton').addEventListener('click', function() {
      const imageUrl = 'src/my-resume.jpg';  // Replace with the path to your image
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'my-resume.jpg';  // Replace with the desired file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
    smoothScroll('nav .right ul li a[href="#skills"]', 'skills');
    smoothScroll('nav .right ul li a[href="#aboutMe"]', 'aboutMe');
    smoothScroll('nav .right ul li a[href="#ContactMe"]', 'ContactMe');
    smoothScroll('nav .right ul li a[href="#education"]', 'education');
  }, []);

  


  return (
    <div>
      <header>
        <nav>
          <div className="left shadow-lg">Harsh's Portfolio</div>
          <div className="right">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="#aboutMe">About Me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="https://github.com/HarshJhamb">Projects</a></li>
              <li><a href="#ContactMe">Contact Me</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="FirstSection">
          <div className="leftSection">
            Hello, My Name is <span className="harsh">Harsh</span>
            <div>And I am a <br /></div>
            <span id="element"></span>
          </div>
          <div className="rightSection px-8"><img className='img21 pb-1 ' src="src/image.png" alt="" /></div>
        </section>
        <div className="btns ">
          <button  id='downloadButton'  className="btn1 hover:text-2xl hover:bg-white hover:text-black hover:border-black">Download resume</button>
          <a href="https://github.com/HarshJhamb"><button className="btn1 hover:text-2xl  hover:bg-white hover:text-black hover:border-black ">Visit GitHub</button></a>
          <a href="https://www.linkedin.com/in/harsh-jhamb-b0884b2b5/"><button className="btn1 hover:text-2xl  hover:bg-white hover:text-black hover:border-black ">Visit Linkedin</button></a>
        </div>
        <hr />
        <section id="aboutMe">
          <div className="flex items-center justify-center font-bold text-3xl gap-2 mt-10">
            <span className="material-symbols-outlined text-3xl font-bold">person</span>About me
          </div>
          <div className="contento flex justify-around">
            <div className="firstSEction  ml-52 h-[450px] w-full">
              <img src="src/transparent-glasses-bearded-man-in-glasses-smiles-with-laptop65fd519a2b2606.60963663.png" alt="" />
            </div>
            <div className="content2 ml-[14rem] mr-32 mt-24">
              <div className="name font-bold text-2xl">I'm Harsh</div>
              <div className="name1 font-bold text-sm mt-1 mb-4">Full Stack Developer</div>
              <div className="color text-gray-200">
                I am a Full-Stack developer based in Gurugram, India. I am an Information Technology diploma holder from DPG Polytechnic. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.
              </div>
              <br />
              <div className="Maila py-7">
                <span className="mail text-pink-600 hover:text-pink-500">Email: </span><span>harshjhamb341@gmail.com</span>
                <br />
                <br />
                <span className="mail text-pink-600 hover:text-pink-500">Place: </span><span>Gurugram, India - 122001</span>
              </div>
              <br />
              <button className="button text-white font-semibold py-2 px-4 flex items-center space-x-1 hover:bg-[#24bcc9] bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-lg">
                <a href="https://drive.google.com/file/d/15z1iKfWdQbWpoLjJHcOypi851btYXF7_/view?usp=drivesdk">Resume</a>
                <span className="arrow">&gt;</span>
              </button>
            </div>
          </div>
        </section>
        <hr />
            <section id="skills" className="secondSection mb-[50rem]">
          <h1 className="skils flex justify-center font-bold pb-14">Skills</h1>
          <div className="box">
            <div className="vertical">
              <img className="img7" src="src/html logo.png" alt="" />
              <div className="vertical-title1">HTML-DEVELOPER
                <div className="vertical-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, velit ex incidunt delectus doloremque maiores debitis in. Explicabo, at facilis.</div>
              </div>
            </div>
            <div className="vertical">
              <img className="img7" src="src/png-transparent-css3-css3-logo-logo-language-programming-language-css-3d-icon-thumbnail.png" alt="" />
              <div className="vertical-title">CSS-DEVELOPER
                <div className="vertical-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, velit ex incidunt delectus doloremque maiores debitis in. Explicabo, at facilis.</div>
              </div>
            </div>
            <div className="vertical">
              <img className="img7" src="src/js.png" alt="" />
              <div className="vertical-title">JAVASCRIPT-DEVELOPER
                <div className="vertical-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, velit ex incidunt delectus doloremque maiores debitis in. Explicabo, at facilis.</div>
              </div>
            </div>
            <div className="vertical">
              <img className="img7" src="src/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="" />
              <div className="vertical-title">REACT.JS-DEVELOPER
                <div className="vertical-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, velit ex incidunt delectus doloremque maiores debitis in. Explicabo, at facilis.</div>
              </div>
            </div>
            <div className="vertical">
              <img className="img7" src="src/node.js png.png" alt="" />
              <div className="vertical-title">NODE.JS-DEVELOPER
                <div className="vertical-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, velit ex incidunt delectus doloremque maiores debitis in. Explicabo, at facilis.</div>
              </div>
            </div>
            <div className="vertical w-[2.5px] ml-10 h-[387px] mb-4 text-purple-900 ">1</div>
          </div> <div className="box2 mt-96">
            {/*box2*/}            <div className="vertical w-[2.5px] ml-0 h-[387px] mb-4 mr-7 text-purple-900 ">1</div>

            <div className="vertical2">
              <img className="img7" src="src/components/png-transparent-tailwind-css-css-framework-customizable-low-level-tailwind-logo-3d-icon.png" alt="" />
              <div className="vertical-title">TAILWIND-DEVELOPER
                <div className="vertical-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, velit ex incidunt delectus doloremque maiores debitis in. Explicabo, at facilis.</div>
              </div>
            </div>
            <div className="vertical">
              <img className="img7" src="src/components/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="" />
              <div className="vertical-title">MongDB-DEVELOPER
                <div className="vertical-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, velit ex incidunt delectus doloremque maiores debitis in. Explicabo, at facilis.</div>
              </div>
            </div>
            <div className="vertical">
              <img className="img7" src="src/components/png-clipart-bootstrap-logo-thumbnail-tech-companies.png" alt="" />
              <div className="vertical-title">BOOTSTRAP-DEVELOPER
                <div className="vertical-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, velit ex incidunt delectus doloremque maiores debitis in. Explicabo, at facilis.</div>
              </div>
            </div>
            <div className="vertical">
              <img className="img7" src="src/components/png-transparent-mysql-round-logo-tech-companies-thumbnail.png" alt="" />
              <div className="vertical-title">MYSQL-DEVELOPER
                <div className="vertical-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, velit ex incidunt delectus doloremque maiores debitis in. Explicabo, at facilis.</div>
              </div>
            </div>
            <div className="vertical  ">
              <img className="img7" src="src/components/png-transparent-mean-solution-stack-express-js-node-js-javascript-github-text-trademark-logo.png" alt="" />
              <div className="vertical-title">EXPRESS.JS-DEVELOPER
                <div className="vertical-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, velit ex incidunt delectus doloremque maiores debitis in. Explicabo, at facilis.</div>
              </div>

            </div> </div> {/*box3*/}
            <div className="box mt-96"> <div className="vertical">
              <img className="img7" src="src/components/ae35edce19e64c53e5d455b22e8a2c82d093d4c9.png" alt="" />
              <div className="vertical-title">NEXT.Js-DEVELOPER
                <div className="vertical-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, velit ex incidunt delectus doloremque maiores debitis in. Explicabo, at facilis.</div>
              </div>
            </div>
            <div className="vertical">
              <img className="img7" src="src/components/git png.png" alt="" />
              <div className="vertical-title1 mt-0 pt-10">Git-DEVELOPER
                <div className="vertical-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, velit ex incidunt delectus doloremque maiores debitis in. Explicabo, at facilis.</div>
              </div>
            </div>
            <div className="vertical">
              <img className="img7" src="src/components/github-logo-git-hub-icon-on-white-background-free-vector.jpg" alt="" />
              <div className="vertical-title">GitHub-DEVELOPER
                <div className="vertical-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, velit ex incidunt delectus doloremque maiores debitis in. Explicabo, at facilis.</div>
              </div>
            </div>
            <div className="vertical">
              <img className="img7" src="src/components/png-transparent-c-logo-c-programming-language-icon-letter-c-blue-logo-computer-program-thumbnail.png" alt="" />
              <div className="vertical-title">MS-Word
                <div className="vertical-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, velit ex incidunt delectus doloremque maiores debitis in. Explicabo, at facilis.</div>
              </div>
            </div>
            <div className="vertical">
              <img className="img7" src="src/components/png-transparent-microsoft-excel-excel-services-spreadsheet-microsoft-office-specialist-microsoft-angle-text-rectangle.png" alt="" />
              <div className="vertical-title">MS-EXCEL
                <div className="vertical-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, velit ex incidunt delectus doloremque maiores debitis in. Explicabo, at facilis.</div>
              </div>
            </div>
           
            </div>

        </section>
        
        
        <hr/>
        {/* Education Section */}
        <section id="education">
          <div className="education flex justify-center text-3xl">
            <span className="material-symbols-outlined text-3xl pl-1 py-9">
              school
            </span>
            <div className="py-10">My Education</div>
          </div>
          <div className="flex justify-center mb-10">
            "Education is the foundation upon which we build our future"
          </div>
          <div className="box1 h-[183px] w-[70%] bg-white mx-56 flex">
            <div className="imageyo h-32 w-[30%]">
              <img src="src/dpg.jpeg" alt="" />
            </div>
            <div className="content justify-between">
              <div className="first-line1 text-2xl font-bold text-[#2c2588] mt-7 ml-28">
                Diploma in computer science eng..
              </div>
              <div className="secondline font-semibold text-lg pt-2 text-[#181451] ml-52">
                Dpg polytechnic Gurugram
              </div>
              <div className="batch text-[#2c2588] py-3 ml-72">2022-2025</div>
            </div>
          </div>
          <div className="mt-6 mb-10 box1 h-[183px] w-[70%] bg-white mx-56 flex">
            <div className="imageyo h-32 w-[29%]">
              <img className="object-cover" src="src/S_D_Memorial_High_School_168_Building_1.png" alt="" />
            </div>
            <div className="content justify-between">
              <div className="first-line1 text-2xl font-bold text-[#2c2588] mt-7 ml-20">
                Completed my schooling up to the 10th grade
              </div>
              <div className="secondline text-lg font-semibold pt-2 text-[#181451] ml-52">
                SD memorial school, Gurugram
              </div>
              <div className="batch text-[#2c2588] py-2 text-lg ml-60">Year of passing 2022</div>
            </div>
          </div>
        </section>
        <hr />
        
       <Contact1/>
      

        <hr />

        {/* Footer Section */}
        <footer id="footer">
          <div className="footer">
            <div className="footer-first">
              <h3>Harsh's Portfolio</h3>
            </div>
            <div className="footer-second">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer-third">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer-fourth">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="allrights">
            Copyrights &#169; harshportfolio.com || All rights reserved
          </div>
        </footer>
       </main>
</div>



    
  );
};


export default Portfolio;
