import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from 'react-router-dom';

function NavBar(props){

    return(
        <div>
        <Tabs>
            <Link to={"/AboutMe"}>
            <Tab label="&nbsp;About Me&nbsp;"/>
            </Link>
            <Link to={"/Summary"}>
            <Tab label="&nbsp;Summary&nbsp;" />
            </Link>
            <Link to={"/Projects"}>
            <Tab label="&nbsp;Projects&nbsp;" />
            </Link>
            <Link to={"/Education"}>
            <Tab label="&nbsp;Education&nbsp;" />
            </Link>
            <Link to={"/Portfolio"}>
            <Tab label="&nbsp;Portfolio&nbsp;" />
            </Link>
            <Link to={"/Contact"}>
                <Tab label="&nbsp;Contact&nbsp;" />
            </Link>
        </Tabs>
        </div>
    )
}

export default NavBar;