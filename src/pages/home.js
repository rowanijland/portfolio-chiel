import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import qrlink from '../qrlink.svg';
import aceworks from '../aceworks.svg';
import aceworksImg from '../aceworksImg.png';

import go from '../go.png';
import docker from '../docker.png';

import emc from '../emc.svg';
import c from '../c.png';
import combo from '../combo.png';
import sql from '../sql.png';
import leader from '../leadership.svg';
import commu from '../commu.svg';

class Home extends Component {
    // constructor(props) {
    //   super(props);
  
    //   this.state = {
    //     isMobile: 8000,
    //   };
  
    //   this.isMobile = this.isMobile.bind(this);
    // }
  
    // isMobile() {
    //   let screenSize = window.innerWidth;
    //   console.log(screenSize);
    //   this.setState({ isMobile: screenSize });
    // }
  
    render() {
      return (
       <div className="mainContainer">
         <div className="intro">
           <div className="leftIntro">
            <div className="name">
              <h1>CHIEL</h1>
              <h2>TIMMERMANS</h2>
            </div>
            <div className="introText">
              <p>Welcome to my portfolio. <br/>You will find all information about my professional career.</p>
            </div>
            <div className="buttonIntro">
              <Link className="buttonHomepage" to="/Illustrations">
                <button className="buttonHome" type="submit" value="SEND">
                  Contact me
                </button>
              </Link>
            </div>
          </div>
          <div className="imageHome">
            <iframe className="imageFrontpage" src="main.html" scrolling="no"></iframe>
          </div>
         </div>

         <div className="qrlink">
          <img className="qrlinkLogo" alt="logo" src={qrlink}></img>
          <div className="qrlinkText">
            <p>
              At QR Link I am the lead backend engineer. The stack at QR Link exists out of VueJS, Go
              and MySQL. At the moment everything is running inside of docker containers but we are
              busy converting everything to Kubernetes. My daily activities include the development of the
              backend. Besides my daily activities I also was involved in managing the company and
              talking with customers.
            </p>
          </div>
            <Link className="buttonQrlink" to="/Illustrations">
              <button className="buttonQrlink" type="submit" value="SEND">
                Visit QR-Link
              </button>
            </Link>
         </div>

        <div className="aceworks">
          <div className="aceworksLeft">
            <img className="aceworksLogo" alt="logo" src={aceworks}></img>
            <div className="aceworksText">
              <p>
                At AceWorks I am the lead backend engineer. The stack at AceWorks started with VueJS on
                top of Laravel, later on we changed Laravel to Go. At AceWorks we have developed simple
                webpages, webshops and dashboards. Besides my daily activities I also was involved in
                managing the company and talking with customers.
              </p>
            </div>
              <Link className="buttonAceworks" to="/Illustrations">
                <button className="buttonAceworks" type="submit" value="SEND">
                  Visit Aceworks
                </button>
              </Link>
           </div>
           <img className="aceworksImg" alt="logo" src={aceworksImg}></img>
        </div>

        <div className="skills">
          <div className="row1">
            <div className="card skills1">
              <p>Go Lang</p>
             <img className="skillsImg" alt="logo" src={go}></img>
            </div>
            <div className="card skills2">
            <p>Docker</p>
              <img className="skillsImg" alt="logo" src={docker}></img>
            </div>
            <div className="card skills3">
            <p>Emmbedded C</p>
             <img className="skillsImg" alt="logo" src={emc}></img>
            </div>
            <div className="card skills4">
             <img className="skillsImg" alt="logo" src={c}></img>
            </div>
          </div>
          <div className="row2">
            <div className="card skills1">
              <img className="skillsImg" alt="logo" src={combo}></img>
            </div>
            <div className="card skills2">
             <img className="skillsImg" alt="logo" src={sql}></img>
            </div>
            <div className="card skills3">
              <img className="skillsImg" alt="logo" src={leader}></img>
            </div>
            <div className="card skills4">
              <img className="skillsImg" alt="logo" src={commu}></img>
            </div>
          </div>
        </div>

       </div>
      );
    }
  }
  
  export default Home;