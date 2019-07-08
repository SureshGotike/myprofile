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
import baseTheme from "../scss/baseTheme";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


class App extends React.Component{

  render() {
    return (
        <MuiThemeProvider theme={baseTheme}>
        <div className="App">
            <Router>
            <Header/>
                <Switch>
                <Route path={"/"} component={HomePage} exact />
                <Route path={"/AboutMe"} component={AboutMe}  />
                <Route path={"/Summary"} component={Summary}  />
                <Route path={"/Projects"} component={Projects}  />
                <Route path={"/Education"} component={Education}  />
                <Route path={"/Portfolio"} component={Portfolio}  />
                <Route path={"/Contact"} component={Contact}  />
                </Switch>
            </Router>

        </div>
        </MuiThemeProvider>
    );

  }
}


export default App;
