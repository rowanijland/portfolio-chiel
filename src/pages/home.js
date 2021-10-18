import React, { Component, useRef } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { ReactComponent as Linkedin } from '../linkedin.svg';
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
import track from '../track.png';
import machien from '../machien.svg';
import teqram from '../teqram.png';
import chiel from '../chiel.svg';
import chess from '../chess.gif';

class Home extends Component {
    render() {
      return (
       <div className="mainContainer">
         <div ref={this.myRef1} className="intro">
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
            {/* <iframe title="mainImage" className="imageFrontpage" src="main.html" scrolling="no"></iframe> */}
          </div>
         </div>

        <div ref={this.myRef2} className="qrlink">
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
          <button
            className="buttonQrlink"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://qrlink.nl/';
              }}>Visit QR-Link
          </button>
        </div>

        <div ref={this.myRef3} className="aceworks">
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
            <button
              className="buttonAceworks"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://www.aceworks.nl/';
                }}>Go to Aceworks
            </button>
           </div>
           <img className="aceworksImg" alt="logo" src={aceworksImg}></img>
        </div>

        <div ref={this.myRef4} className="skills">
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
            <p>C++</p>
             <img className="skillsImg" alt="logo" src={c}></img>
            </div>
          </div>
          <div className="row2">
            <div className="card skills1">
            <p>ReactJS / VueJS</p>
              <img className="skillsImg" alt="logo" src={combo}></img>
            </div>
            <div className="card skills2">
            <p>MySQL</p>
             <img className="skillsImg" alt="logo" src={sql}></img>
            </div>
            <div className="card skills3">
            <p>Leadership skills</p>
              <img className="skillsImg" alt="logo" src={leader}></img>
            </div>
            <div className="card skills4">
            <p>Comunnication skills</p>
              <img className="skillsImg" alt="logo" src={commu}></img>
            </div>
          </div>
        </div>

        <div ref={this.myRef5} className="track">
          <div className="trackContent">
            <h3>Internship & work experience</h3>
            <img className="trackLogo" alt="logo" src={track}></img>
            <div className="trackText">
              <p>
                At Teqram I did my first internship. The stack at Teqram is made up of a custom application
                in C++ that could run Lua code to control multiple vision guided robots. My daily activities
                include the development of the Lua code.
              </p>
            </div>
          </div>
        </div>

        <div ref={this.myRef6} className="teqram">
         <img className="robot" alt="logo" src={machien}></img>
          <div className="teqramRight">
            <h3>Internship & work experience</h3>
            <img className="teqramLogo" alt="logo" src={teqram}></img>
            <div className="teqramText">
              <p>
                At AceWorks I am the lead backend engineer. The stack at AceWorks started with VueJS on
                top of Laravel, later on we changed Laravel to Go. At AceWorks we have developed simple
                webpages, webshops and dashboards. Besides my daily activities I also was involved in
                managing the company and talking with customers.
              </p>
            </div>
          </div>
          <img className="robotMobile" alt="logo" src={machien}></img>
        </div>
        
        <div  ref={this.myRef7} className="school">
          <h1 className="schoolTitle">School time</h1>
          
          <div className="part1School">
            <div className="textSchool">
              <h1>Chess board</h1>
              <p>
                At AceWorks I am the lead backend engineer. The stack at AceWorks started with VueJS on
                top of Laravel, later on we changed Laravel to Go. At AceWorks we have developed simple
                webpages, webshops and dashboards.
              </p>
            </div>
            <img className="chess" alt="logo" src={chess}></img>
          </div>

          <div className="part1School">
            <div className="textSchool">
              <h1>Aeron</h1>
              <p>
                At AceWorks I am the lead backend engineer. The stack at AceWorks started with VueJS on
                top of Laravel, later on we changed Laravel to Go. At AceWorks we have developed simple
                webpages, webshops and dashboards.
              </p>
            </div>
            {/* <img className="chess" alt="logo" src={chess}></img> */}
          </div>
        </div>

        <div ref={this.myRef8} className="contact">
          <img className="chiel" alt="logo" src={chiel}></img>
          <div className="contactContent">
            <p>chieltimmermans@hotmail.com<br/>8012 TX, Zwolle</p>
            
            <div className="buttons">
              <Link className="buttonContact2" to="/Illustrations">
                <button className="buttonContact" type="submit" value="SEND">
                  Contact me
                </button>
              </Link>
              <a className="linkedin" href="https://www.linkedin.com/in/chieltimmermans/">
                  <Linkedin />
              </a>
            </div>
          </div>
        </div>

       </div>
      );
    }
  }
  
  export default Home;