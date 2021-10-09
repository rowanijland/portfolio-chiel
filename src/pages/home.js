import React, { Component } from 'react';

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
           <div className="name">
            <h1>CHIEL</h1>
            <h2>Timmermans</h2>
           </div>
          <div className="imageHome">
            <iframe className="imageFrontpage" src="main.html" scrolling="no"></iframe>
          </div>
         </div>
       </div>
      );
    }
  }
  
  export default Home;