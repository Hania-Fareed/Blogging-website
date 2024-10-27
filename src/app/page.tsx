import Header from "./components/header";
import { FaGithub } from "react-icons/fa";

export default function Home(){
  return(
    <div>
      <Header/>
      <div className="parentContainer">
      <div className="homeMainContainer tracking-in-expand">
        <h1 className="homeTitle">Welcome to Hania Fareed's Blogging page</h1>
      </div>
      <div className="homeBoxesOne">
        <h1 className="boxTitle">Second Blog</h1>
        <div className="subBox">
          <div className="profile">
            <img src="./picture02.PNG"/>
          </div>
        </div>
          <div className="description">
            <h1 className="heading">Frontend Developer</h1>
            <p>A front-end developer is a type of software developer who specializes in creating and designing the user interface (UI) and user experience (UX) of websites and web applications.</p>
          </div>
      </div>
      <div className="homeBoxesTwo">
        <h1 className="boxTitle">First Blog</h1>
        <div className="subBox">
          <div className="profile">
            <img src="./picture01.PNG"/>
          </div>
        </div>
        <div className="description">
        <h1 className="heading">Software Developer</h1>
        <p>Software developers create the computer applications that allow users to do specific tasks and the underlying systems that run the devices or control networks</p>
        </div>
      </div>
      <div className="homeBoxesThree">
        <h1 className="boxTitle">Third Blog</h1>
        <div className="subBox">
          <div className="profile">
            <img src="./picture03.PNG"/>
          </div>
        </div>
        <div className="description">
        <h1 className="heading">Backend Developer</h1>
        <p>Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites.back-end developers are involved in data storage, security, and other functions that you cannot see.</p>
        </div>
      </div>
      <div className="homeBoxesfour">
        <h1 className="boxTitle">Fouth Blog</h1>
        <div className="subBox">
          <div className="profile">
            <img src="./picture04.PNG"/>
          </div>
        </div>
          <div className="description">
            <h1 className="heading">Web Developer</h1>
            <p>Web developers create and maintain websites. They are also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle.</p>
          </div>
      </div>
      <div className="homeBoxesFive">
        <h1 className="boxTitle">Fifth Blog</h1>
        <div className="subBox">
          <div className="profile">
            <img src="./picture05.PNG"/>
          </div>
        </div>
          <div className="description">
            <h1 className="heading">Cyber Security</h1>
            <p>Cyber security is the practice of protecting systems, networks, and programs from digital attacks.These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information. </p>
          </div>
      </div>
      <div className="homeBoxesSix">
        <h1 className="boxTitle">Sixth Blog</h1>
        <div className="subBox">
          <div className="profile">
            <img src="./picture06.PNG"/>
          </div>
        </div>
          <div className="description">
            <h1 className="heading">Languages</h1>
            <p>A programming language is a way for programmers (developers) to communicate with computers.A few of the best programming languages to learn include Python, Java, JavaScript, C and C++, and SQL,</p>
          </div>
      </div>
      <hr/>
      <div className="group-3">
        <div className="contact">
            <h3 className="title">Contact</h3>
            <div className="contact_info">
                <p className="descriptionFooter">
                    Bahria Town Karachi 
                </p>
                <p className="descriptionFooter">
                    +92 321 8318143
                </p>
                <p className="descriptionFooter">
                    haniafareed7@gmail.com
                </p>
            </div>
        </div>    
        <div className="socials">
            <h3 className="title">Socials</h3>
            <div className="social_items">
                <a href="#" className="social_item">
                <FaGithub />
                    <span>/Hania-fareed</span>
                </a>
            </div>
        </div>
    </div>
      </div>
    </div>
  )
}