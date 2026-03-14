import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import Menu from "./components/Menu";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
      <>
          <BackToTop />
        <div className="page-wrap">
            <Router>
                <div className="container">
                    <Menu/>
                    <AnimatedRoutes />
                </div>
            </Router>
            <Footer />
        </div>
      </>
  );
}

const AnimatedRoutes = withRouter(({location}) =>
     <div className="transition-wrapper">
        <Switch>
            <Route exact path="/">
                <About/>
            </Route>
            <Route exact path="/resume">
                <Resume/>
            </Route>
            <Route exact path="/contact">
                <Contact/>
            </Route>
        </Switch>
    </div>
);

export default App;
