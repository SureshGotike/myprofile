import React from 'react';
import ExampleComponent from "react-rounded-image";
import {Typography} from "@material-ui/core";
import baseStyles from '../scss/baseStyles';
import withStyles from "@material-ui/core/styles/withStyles";
import '../scss/App.scss';

class HomePage extends React.Component{

    render() {

        const {classes} =this.props;
        return(
            <div className={"backgroundImage"}>
                <div align={"center"} style={{paddingTop: '20px'}}>
                    <ExampleComponent
                        image={require('../assets/SureshPic.jpg')}
                        roundedColor="#18ffff"
                        imageWidth="300"
                        imageHeight="300"
                        roundedSize="3"
                    />
                </div>

                <div>
                    <Typography
                        className={classes.heading1}
                        gutterBottom={true}
                    >
                        Suresh Gotike
                        <br/>

                    </Typography>

                    <Typography
                        className={classes.heading2}
                    >
                        Lead Engineer
                    </Typography>

                    <br/>
                    <Typography
                        className={classes.heading3}
                    >
                        Full-Stack Web Developer
                    </Typography>
                    <br/>

                </div>

            </div>


        )

    }

}

export default withStyles(baseStyles)(HomePage);