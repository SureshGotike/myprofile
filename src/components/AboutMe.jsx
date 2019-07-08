import React from 'react';
import ExampleComponent from "react-rounded-image";
import {Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import baseStyles from '../scss/baseStyles';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


class AboutMe extends React.Component{

    render() {

        const {classes} = this.props;
        return(
            <div className={classes.root}>

                <Grid id="top-row" container={true}>


                    <Grid id={"row1"} container={true}  spacing={30} style={{marginTop:10}} justify={"center"}>
                        <Grid id={"1of1"} item={true}>
                            <Paper>
                            <Typography
                                className={classes.heading2}
                            >
                                --I Want to Make Things That Make a Difference--
                            </Typography>
                            </Paper>
                        </Grid>

                    </Grid>

                    <Grid id={"row2"} container={true} spacing={30} style={{marginTop:10}}>

                        <Grid id={"1of2"} item={true} sm style={{margin:10}}>
                                <Paper>
                            <Typography align={"left"}>
                                I am a Full stack Developer with Zeal to learn, utilize and Spread the Technology.
                                I am Good at Listening, Reading and Writing too.
                                A Broad Thinking attitude is keeping me always on top in the Tech World.
                                I am flexible to work in a team as well as an individual contributor. I have very good leadership qualities to drive the team towards the success.
                                I involve more in research and development activities, which made me to choose my career as an Architect.
                            </Typography>
                                </Paper>
                        </Grid>

                        <Grid id={"2of2"} item={true} sm style={{margin:10}}>
                                <Paper>
                            <Typography>
                                Details:
                                <br/>
                                Name: Suresh Kumar Reddy Gotike
                                Age: 30 years
                                Location:
                                Atlanta, GA
                            </Typography>
                                </Paper>
                        </Grid>

                    </Grid>

                    <Grid id={"row3"} container={true} spacing={30} style={{marginTop:10}} justify={"center"}>
                        <Grid id={"1of3"} item={true}>
                            <Paper>
                            <Typography>
                                Want to Hire me??
                                <br/>
                                I am open to the Good Opportunities. Email me!!!
                            </Typography>
                            </Paper>
                        </Grid>
                    </Grid>




                </Grid>



            </div>
        )
    }
}

export default withStyles(baseStyles)(AboutMe);