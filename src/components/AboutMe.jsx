import React from 'react';
import ExampleComponent from "react-rounded-image";
import {Typography} from "@material-ui/core";



class AboutMe extends React.Component{

    render() {

        return(
            <div>
                <Typography variant={"h4"} color={"primary"}>
                    I Want to Make Things That Make a Difference...
                </Typography>
                <br/>
                <Typography variant={"h5"} align={"left"}>
                    A Passionate Full stack Developer with Zeal to learn, utilize and Spread the Technology.
                    Good at Listening,Reading and Writing too.
                    A Broad Thinking attitude is keeping me always on top in the Tech World.
                </Typography>
            </div>


        )

    }

}

export default AboutMe;