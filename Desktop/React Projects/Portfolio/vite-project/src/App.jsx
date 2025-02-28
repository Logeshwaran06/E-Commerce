import './App.css';
import React, { useRef } from "react";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100, // Adjust the offset value as needed
      behavior: "smooth"
    });
  };

  function viewCV() {
    window.open('https://logeshwaran-site.netlify.app/resume.pdf', '_blank');
  }

  return (
    <>
      {/* Header section */}
      <div className='header'>
        <h2 className='Name textHeading'>Logeshwaran</h2>

        <nav className='navHeader'>
          <ul className='navBar'>
            <li className='navList'><a onClick={() => handleScroll(homeRef)} className='navTitle colors accentColor' href='#home'>Home</a></li>
            <li className='navList'><a onClick={() => handleScroll(aboutRef)} className='navTitle colors accentColor' href='#about'>About</a></li>
            <li className='navList'><a onClick={() => handleScroll(projectsRef)} className='navTitle colors accentColor' href='#projects'>Projects</a></li>
            <li className='navList'><a onClick={() => handleScroll(contactRef)} className='navTitle colors accentColor' href='#contact'>Contact</a></li>
          </ul>
        </nav>

        <ul className='contactList'>
          <li className='contactInfo'><a className='colors' href="https://www.linkedin.com/in/logeshmohan"><i className='icons accentColor linkedIn'>LinkedIn</i></a></li>
          <li className='contactInfo'><a className='colors' href="https://github.com/Logeshwaran06"><i className='icons accentColor gitHub'>GitHub</i></a></li>
        </ul>
      </div>

      {/* Home section */}
      <div ref={homeRef} className="home">
        <div className='content'>
          <h1 className="contentName textHeading">Hi, I'm Logeshwaran P 👋</h1>
          <p className='description textBody'>
            I am a passionate MERN stack developer and AI enthusiast with a strong 
            foundation in web development and machine learning. I enjoy building interactive applications, solving
            technical problems, and continuously expanding my skill set. Currently, I am working on full-stack projects 
            and exploring AI-driven solutions to enhance user experiences.

            {/* MERN Stack Developer & AI Enthusiast | Passionate about Web Development & Machine Learning */}

          </p>
          <div className='moreDetails'>
            <div className='divDetails'>
              <img className="details" src='location.svg' />
              <p className='details location textBody'>Theni</p>
            </div>
            <div className='divDetails'>
              <img className="details" src='phoneIcon.svg' />
              <p className='details phoneNo textBody'>9080891865</p>
            </div>
            <div className='divDetails'>
              <img className="details" src='Email.svg' />
              <p className='details mail textBody'>logeshmohan4080@gmail.com</p>
            </div>
            <button onClick={viewCV} className='button1 colors'>View CV</button>
          </div>
        </div>
        <div className='photo'>
          <img className="myPhoto" src='myImage.jpeg' />
        </div>
      </div>

      {/* About section */}
      <div ref={aboutRef} className="about">
        <div className='aboutContent'>
          <h1 className='aboutMe textHeading'>About Me</h1>
          <p className='aboutDescription textBody'>
            Hi, I'm <strong className='accentColor'>Logeshwaran</strong>, a passionate MERN Stack Developer and AI enthusiast.
            I specialize in building web applications using React.js, Node.js, MongoDB, and Express.js.
            I am also exploring AI & ML, aiming to create innovative AI-driven solutions. 
            Currently, I am working on a <strong className='accentColor'>job search aggregator</strong> and an AI-based chatbot.
            My goal is to develop scalable and efficient applications that solve real-world problems.
          </p>
          <div className='skills'>
            <h2 className='mySkills textHeading'>My Skills</h2>
            <ul className='skillList'>
              <li className='skill divBorder'>HTML</li>
              <li className='skill divBorder'>CSS</li>
              <li className='skill divBorder'>JavaScript</li>
              <li className='skill divBorder'>React</li>
              <li className='skill divBorder'>Node JS</li>
              <li className='skill divBorder'>Express JS</li>
              <li className='skill divBorder'>MongoDB</li>
              <li className='skill divBorder'>Python</li>
              <li className='skill divBorder'>Machine Learning</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects section */}
      <div ref={projectsRef} className="projectsDiv">
        <h1 className='projects textHeading'>Projects</h1>
        <div className='project'>
          <div className="projectDiv divBorder">
            <h3 className="projectTitle textHeading">E-commerce website</h3>
            <p className="projectDescription textBody">
              Developed a mini e-commerce platform with user authentication, product listing, cart management,
              and checkout
            </p>
            <a className="projectLink colors accentColor" href='#'>View Project</a>
          </div>

          <div className="projectDiv divBorder">
            <h3 className="projectTitle textHeading">CRUD Application</h3>
            <p className="projectDescription textBody">
              Built a full-stack application with Create, Read, Update, and Delete functionalities, 
              implementing RESTful APIs and authentication.                    
            </p>
            <a className="projectLink colors accentColor" href='#'>View Project</a>
          </div>

          <div className="projectDiv divBorder">
            <h3 className="projectTitle textHeading">Fruit Recognition using Machine Learning</h3>
            <p className="projectDescription textBody">
              A machine learning model that identifies fruits using a diffusion map. 
              Currently developing a fruit recognition system using machine learning. 
              Planning to improve accuracy and deploy as a web app
            </p>
            <p className="status">Status: <span className="ongoing">Ongoing</span></p>
            <a className="projectLink colors accentColor" href='#'>View Project</a>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <h1 ref={contactRef} className='getInTouch textHeading'>Get in touch</h1>
      <div className="contactDiv">
        <div className='contact'>
          <div className='divDetails'>
            <img className="details" src='location.svg' />
            <p className='details location textBody'>Theni</p>
          </div>
          <div className='divDetails'>
            <img className="details" src='phoneIcon.svg' />
            <p className='details phoneNo textBody'>9080891865</p>
          </div>
          <div className='divDetails'>
            <img className="details" src='Email.svg' />
            <p className='details mail textBody'>logeshmohan4080@gmail.com</p>
          </div>
        </div>
        <div className='contactForm'>
          <form className='form'>
            <h2 className="sendMessage textHeading">Send a message</h2>
            <input className='input' type='text' placeholder='Enter your name' />
            <br /><br />
            <input className='input' type='email' placeholder='Enter your email' />
            <br /><br />
            <textarea className='input textArea' placeholder='Enter your message'></textarea>
            <br /><br />
            <button className='button colors'>Send</button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h2 className='textHeading'>About Me</h2>
            <p className='textBody'>Passionate web developer skilled in MERN stack, AI, and cybersecurity. Let's build something amazing together!</p>
          </div>
          
          <div className="footer-social">
            <h2 className='textHeading'>Follow Me</h2>
            <div className="social-icons">
              <a className='colors accentColor' href="https://github.com/Logeshwaran06" target="_blank"><i className="fab fa-github">GitHub</i></a>
              <a className='colors accentColor' href="https://www.linkedin.com/in/logeshmohan" target="_blank"><i className="fab fa-linkedin">LinkedIn</i></a>
            </div>
          </div>      
        </div>
        <div className="footer-bottom">
          <p className='textBody'>© 2025 Logeshwaran. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}