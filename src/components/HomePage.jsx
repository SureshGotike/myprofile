import React from 'react';
import ExampleComponent from "react-rounded-image";
import {Typography} from "@material-ui/core";



class HomePage extends React.Component{

    render() {

        return(
            <div>
                <div align={"center"}>
                    <ExampleComponent
                        image={require('../assets/SureshPic.jpg')}
                        roundedColor="#18ffff"
                        imageWidth="400"
                        imageHeight="400"
                        roundedSize="3"
                    />
                </div>

                <div>
                    <Typography
                        color={"primary"}
                        variant={"h3"}
                        gutterBottom={true}
                    >
                        Suresh Gotike
                        <br/>
                        <br/>

                    </Typography>

                    <Typography
                        color={"secondary"}
                        variant={"h4"}
                    >
                        Lead Engineer
                    </Typography>

                    <br/>
                    <Typography
                        color={"primary"}
                        variant={"h5"}
                    >
                        Full-Stack Web Developer
                    </Typography>
                    <br/>

                </div>

            </div>


        )

    }

}

export default HomePage;