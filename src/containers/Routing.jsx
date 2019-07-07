import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Summary from "../components/Summary";
import AboutMe from "../components/AboutMe";

class Routing extends React.Component{

    render() {
        return(

            <Router>
                <div>
                    <Route exact path="/" component={AboutMe}/>
                    <Route path="/Summary" component={Summary}/>
                </div>
            </Router>
        )
    }



}

export default Routing;