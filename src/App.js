import './App.scss';
import React, { Suspense, lazy, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

const Home = lazy(() => import('./pages/home.js'));
const Qr = lazy(() => import('./pages/qrlink.js'));
const Aceworks = lazy(() => import('./pages/aceworks.js'));
const Skills = lazy(() => import('./pages/skills.js'));
const Tt = lazy(() => import('./pages/tt.js'));
const Teqram = lazy(() => import('./pages/teqram.js'));
const School = lazy(() => import('./pages/school.js'));
const Contact = lazy(() => import('./pages/contact.js'));


class App extends Component {
  constructor(props) {
    super(props);

    this.myRef1 = React.createRef()
    this.myRef2 = React.createRef()
    this.myRef3 = React.createRef()
    this.myRef4 = React.createRef()
    this.myRef5 = React.createRef()
    this.myRef6 = React.createRef()
    this.myRef7 = React.createRef()
    this.myRef8 = React.createRef()


    this.state = {
      active: false,
      intervalId: 0,
      hideToolTip: true,
      layoutMode: this.getLayoutMode(),
    };

    this.hideToolTip = this.hideToolTip.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  scrollToMyRef1 = () => window.scrollTo({left:0, top:0, behavior: 'smooth'})
  scrollToMyRef2 = () => window.scrollTo({left:0, top:600, behavior: 'smooth'})
  scrollToMyRef3 = () => window.scrollTo({left:0, top:1200, behavior: 'smooth'})
  scrollToMyRef4 = () => window.scrollTo({left:0, top:1900, behavior: 'smooth'})
  scrollToMyRef5 = () => window.scrollTo({left:0, top:2550, behavior: 'smooth'})
  scrollToMyRef6 = () => window.scrollTo({left:0, top:3100, behavior: 'smooth'})
  scrollToMyRef7 = () => window.scrollTo({left:0, top:3700, behavior: 'smooth'})
  scrollToMyRef8 = () => window.scrollTo({left:0, top:4500, behavior: 'smooth'})




  componentDidMount() {
    window.addEventListener('scroll', this.hideToolTip);
    window.addEventListener('resize', this.onResize);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  hideToolTip() {
    if (window.pageYOffset < 100) {
      this.setState({ hideToolTip: true });
    } else {
      this.setState({ hideToolTip: false });
    }
  }

  scrollStep() {
    if (window.pageYOffset == 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 80);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), 16);
    this.setState({ intervalId: intervalId });
  }

  onResize() {
    this.setState({
      layoutMode: this.getLayoutMode(),
    });
  }

  getLayoutMode() {
    return window.innerWidth > 1300 ? 'desktop' : 'mobile';
  }

  render() {
    const style = this.state.hideToolTip ? { display: 'none' } : { display: 'block' };

    return (
      <Router>
        {/* <ScrollToTop /> */}
        
        {this.state.layoutMode === 'mobile' ? (
          <div>
            <div className="menuMobile">
        
            <p className="ctLogo" onClick={this.scrollToMyRef1}>CT</p>
     
        </div>
            <div
              className={this.state.active ? 'nav-icon cross' : 'nav-icon'}
              onClick={() => this.setState({ active: !this.state.active })}>
              <div></div>
            </div>

            <div
              className="bu buttonUpMobile"
              style={style}
              onClick={() => {
                this.scrollToTop();
              }}>
              {/* <FontAwesomeIcon icon={faArrowUp} /> */}
            </div>

            <ul className={this.state.active ? 'navMobile showMenuMobile' : 'navMobile notShowMenuMobile'}>
              <li>
                <Link onClick={() => this.setState({ active: !this.state.active })} 
                  className="AboutNav nameNav" 
                  to="/">
                  <button onClick={this.scrollToMyRef1} className="iconName">Home</button>
                </Link>
              </li>
              <li>
                <Link onClick={() => this.setState({ active: !this.state.active })} 
                  className="nameNav" 
                  to="/Qr">
                  <button onClick={this.scrollToMyRef2} className="iconName">Qr Link</button>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => this.setState({ active: !this.state.active })}
                  className="illustrationsNav nameNav"
                  to="/Aceworks">
                  <button onClick={this.scrollToMyRef3} className="iconName" >Aceworks</button>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => this.setState({ active: !this.state.active })}
                  className="LogosNav nameNav"
                  to="/Skills">
                  <button onClick={this.scrollToMyRef4} className="iconName">Skills</button>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => this.setState({ active: !this.state.active })}
                  className="LogosNav nameNav"
                  to="/Tt">
                  <button onClick={this.scrollToMyRef5} className="iconName">Track Technologies</button>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => this.setState({ active: !this.state.active })}
                  className="LogosNav nameNav"
                  to="/Teqram">
                  <button onClick={this.scrollToMyRef6} className="iconName">Teqram</button>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => this.setState({ active: !this.state.active })}
                  className="LogosNav nameNav"
                  to="/School">
                  <button onClick={this.scrollToMyRef7} className="iconName">School</button>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => this.setState({ active: !this.state.active })}
                  className="pageFourNav nameNav"
                  to="/Contact">
                  <button onClick={this.scrollToMyRef8} className="iconName">Contact</button>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <div
              className="bu buttonUp"
              style={style}
              onClick={() => {
                this.scrollToTop();
              }}>
              {/* <FontAwesomeIcon icon={faArrowUp} /> */}
            </div>
            <ul className="nav">
                <li>
                  <Link to="/" >
                    <button onClick={this.scrollToMyRef1} className="page">Home</button>
                  </Link>
                </li>
                <li>
                  <Link to="/" >
                    <button onClick={this.scrollToMyRef2} className="page">Qr Link</button>
                  </Link>
                </li>
                <li>
                  <Link to="/" >
                    <button onClick={this.scrollToMyRef3} className="page" >Aceworks</button>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <button onClick={this.scrollToMyRef4} className="page">Skills</button>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <button onClick={this.scrollToMyRef5} className="page">Track Technologies</button>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <button onClick={this.scrollToMyRef6} className="page">Teqram</button>
                  </Link>
                </li>
                <li>
                  <Link to="/" >
                    <button onClick={this.scrollToMyRef7} className="page">School</button>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <button onClick={this.scrollToMyRef8} className="page">Contact</button>
                  </Link>
                </li>
              </ul>
          </div>
        )}
        <Suspense
          fallback={
            <div className="loadingPage">
              <div className="loadingPage2">
                {/* <LoadingIcon /> */}
              </div>
            </div>
          }>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/qrlink" component={Qr} />
            <Route path="/aceworks" component={Aceworks} />
            <Route path="/skills" component={Skills} />
            <Route path="/tt" component={Tt} />
            <Route path="/teqram" component={Teqram} />
            <Route path="/school" component={School} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
export default App;
