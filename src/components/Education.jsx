import React from 'react';
import {Typography} from "@material-ui/core";


class Education extends React.Component{

    render() {

        return(
            <div>
                <Typography>
                    Siddiqui High School
                    Jillella, Andhra Pradesh, India.
                    ZipCode: 518563
                </Typography>

                <Typography>
                    Ravindra Junior College
                    Kurnool, Andhra Pradesh, India.
                    Zipcode: 518563
                </Typography>

                <Typography>
                    JNT University,
                    Andhra Pradesh, India
                    Bachelor of Technology in Information Technology
                    2010
                </Typography>

            </div>
        );

    }

}

export default Education;