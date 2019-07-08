import React from 'react';
import baseStyles from '../scss/baseStyles';
import withStyles from "@material-ui/core/styles/withStyles";
import '../scss/App.scss';
import {Grid} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class Summary extends React.Component{

    render() {

            const {classes} =  this.props;
        return(
            <div>
               <Grid id={"top-container"} container={true} justify={"center"}>

                 <Grid id={"row1"} container={true} justify={"center"} style={{marginTop:5}}>

                         <Grid id={"item1"} item={true} sm style={{margin:10}}>
                                 <Paper>
                                         <div className={classes.headingColorFill}>
                                         Professional Summary
                                         </div>
                                         <div>
                                            9 Years of Professional Experience
                                            <br/>
                                            Full Stack Lead Developer and Architect
                                            <br/>
                                            Can Design, Develop and Deploy to Clouds
                                            <br/>
                                            Participation in Technical Presentations
                                            <br/>
                                            Excellent Client Satisfaction
                                         </div>


                                 </Paper>
                         </Grid>

                 </Grid>

                 <Grid id={"row2"} container={true} justify={"center"} style={{marginTop:5}}>

                         <Grid id={"item1"} item={true} sm style={{margin:10}}>
                                 <Paper>
                         <div className={classes.headingColorFill}>
                                 <Typography className={classes.heading1}>
                                         Abilities
                                 </Typography>

                         </div>
                                         <div>
                                                 <Typography>
                                                 If Opportunity Doesn't Knock,
                                                 <br/>Build a Door
                                                 <br/>
                                                 <h6>    -- Milton Berle</h6>
                                                 </Typography>
                                         </div>
                                         <div className={classes.headingColorFill}>
                                                 <Typography className={classes.heading2}>
                                                         Skills
                                                 </Typography>
                                         </div>
                                         <div>
                                                 Java, Spring Boot, Micro Services, React, Mondo DB, Pivotal Cloud Foundry
                                         </div>

                                         <div className={classes.headingColorFill}>
                                                 <Typography className={classes.heading2}>
                                                 Tools
                                                 </Typography>
                                         </div>
                                         <Typography>
                                                 Git, GitHub, IntelliJ, Windows, WebStorm, Docker, Docker Hub
                                         </Typography>

                                         <div className={classes.headingColorFill}>
                                                 <Typography className={classes.heading2}>
                                                 Languages
                                                 </Typography>
                                         </div>
                                         <Typography>
                                                 Telugu, English
                                         </Typography>
                                 </Paper>
                         </Grid>


                 </Grid>


               </Grid>


            </div>

        );

    }

}

export default withStyles(baseStyles)(Summary);