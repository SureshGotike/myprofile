const baseStyles = muiBaseTheme =>({

    root:{
      flexGrow:1,
    },
    card: {
        height: "100%",
        maxWidth: 1000,
        // paddingLeft: '20%',
        paddingTop: '0.5%',
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }

    },
    media: {
        height: 400,
        // maxWidth: '100%',
        paddingTop: '1%',
        // paddingLeft: '0%',
        // paddingRight: '10%',

    },
    content:{
        // height:100,
        // maxWidth: '100%',
        // paddingTop:"1%",
        // paddingLeft:"40%",
        textAlign: "left",
        padding: muiBaseTheme.spacing.unit * 3
    },
    contentTitle:{
        color:"#00bfa5",
        fontWeight:"bold",
    },
    contentBody:{
        color:"#424242",
        fontWeight:"normal",
    },
    // contentRating:{
    //     color:"#304ffe",
    //     fontWeight:"bold",
    // },

    // bookTicketButton:{
    //     color:"#4a148c",
    //     fontWeight:"bold",
    // },
    mood:{
        color:"#4caf50",
    },
    badmood:{
        color:"#ef5350",
    },
    star:{
        color:"#ffd600",
    },
    companyName:{
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 25,
        fontWeightRegular: 400,
        color:"#f44336"
    },
    duration:{
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 20,
        fontWeightMedium: 500,
        color: "#e91e63"
    },
    projectName:{
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 20,
        fontWeightRegular: 400,
        color:"#9c27b0"
    },
    projectSubHeader:{
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 15,
        fontWeightRegular: 400,
        color:"#00bcd4"
    },
    heading1:{
        fontFamily: '"Roboto"',
        fontSize: 50,
        fontWeight: 700,
        color: "#f44336"
    },
    heading2:{
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 30,
        fontWeight: 500,
        color:"#9c27b0"
    },
    heading3:{
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 25,
        fontWeight: 400,
        color:"#00bcd4"
    },
    headingColorFill:{
        // color:"#00bcd4",
        backgroundColor:"#3d5afe",
        // align:"center"
    },
    alignCenter:{
        align:"center"
    }


});

export default baseStyles;