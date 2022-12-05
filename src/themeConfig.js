import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import light from "@material-ui/core/colors/lightBlue";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[700n],
    },
    secondary: {
      main: light[500],
    },
  },
});

export default theme;
