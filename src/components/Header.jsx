import React from 'react';
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavBar from "../containers/NavBar";
import { Home} from '@material-ui/icons';
import {Link} from 'react-router-dom';


class Header extends React.Component{

    render() {

        return(

            <div>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Suresh's Profile
                        <Link to={"/"}>
                        <Home/>
                        </Link>
                    </Typography>
                    <NavBar/>
                </Toolbar>

            </AppBar>

            </div>

        );

    }

}

export default Header;