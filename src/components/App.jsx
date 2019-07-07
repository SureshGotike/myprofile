import React from 'react';
import '../scss/App.scss';
import Header from "./Header";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from "react-router";
import AboutMe from "../components/AboutMe";
import Summary from "../components/Summary";
import Projects from "../components/Projects";
import Portfolio from "../components/Portfolio";
import Education from "../components/Education";
import HomePage from "./HomePage";
import Contact from "./Contact";

class App extends React.Component{

  render() {
    return (
        <div className="App">
            <Router>
            <Header/>
            <div>
                <switch>
                <Route path={"/"} component={HomePage} exact />
                <Route path={"/AboutMe"} component={AboutMe}  />
                <Route path={"/Summary"} component={Summary}  />
                <Route path={"/Projects"} component={Projects}  />
                <Route path={"/Education"} component={Education}  />
                <Route path={"/Portfolio"} component={Portfolio}  />
                <Route path={"/Contact"} component={Contact}  />
                </switch>
            </div>
            </Router>

        </div>
    );

  }
}


export default App;
