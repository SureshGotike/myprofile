import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';
import blueGrey from '@material-ui/core/colors/blueGrey';

const baseTheme = createMuiTheme({
    palette: {
        primary: {
            // c100: red[100],
            // c200: red[200],
            // light: red[300],
            main: "#00bcd4"
            // dark: red[700]
        },
        secondary: {
            light: purple[300],
            main: purple[500],
            dark: purple[700]
        }
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500
    },
    anchor: {
        main: blue[500],
        selected: blue[700]
    },
});

export default baseTheme;