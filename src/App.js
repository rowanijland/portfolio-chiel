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

    this.state = {
      active: false,
      intervalId: 0,
      hideToolTip: true,
      layoutMode: this.getLayoutMode(),
    };

    this.hideToolTip = this.hideToolTip.bind(this);
    this.onResize = this.onResize.bind(this);
  }

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
        <div className="menuMobile">
          <Link to="/">
            {/* <img className="logoRocreate" alt="logo" src={logo}></img> */}
          </Link>
        </div>
        {this.state.layoutMode === 'mobile' ? (
          <div>
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
                  <p className="iconName">Home</p>
                </Link>
              </li>
              <li>
                <Link onClick={() => this.setState({ active: !this.state.active })} 
                  className="nameNav" 
                  to="/Qr">
                  <p className="iconName">Qr Link</p>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => this.setState({ active: !this.state.active })}
                  className="illustrationsNav nameNav"
                  to="/Aceworks">
                  <p className="iconName">Aceworks</p>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => this.setState({ active: !this.state.active })}
                  className="LogosNav nameNav"
                  to="/Skills">
                  <p className="iconName">Skills</p>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => this.setState({ active: !this.state.active })}
                  className="LogosNav nameNav"
                  to="/Tt">
                  <p className="iconName">Track Technologies</p>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => this.setState({ active: !this.state.active })}
                  className="LogosNav nameNav"
                  to="/Teqram">
                  <p className="iconName">Teqram</p>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => this.setState({ active: !this.state.active })}
                  className="LogosNav nameNav"
                  to="/School">
                  <p className="iconName">School</p>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => this.setState({ active: !this.state.active })}
                  className="pageFourNav nameNav"
                  to="/Contact">
                  <p className="iconName">Contact</p>
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
                  <NavLink exact={true} to="/" activeClassName="is-active">
                    <button className="page">Home</button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Qrlink" activeClassName="is-active">
                    <button className="page">Qr Link</button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Aceworks" activeClassName="is-active">
                    <button className="page">Aceworks</button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Skills" activeClassName="is-active">
                    <button className="page">Skills</button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Tt" activeClassName="is-active">
                    <button className="page">Track Technologies</button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Teqram" activeClassName="is-active">
                    <button className="page">Teqram</button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/School" activeClassName="is-active">
                    <button className="page">School</button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Contact" activeClassName="is-active">
                    <button className="page">Contact</button>
                  </NavLink>
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
            <Route exact path="/" component={Home} />
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
