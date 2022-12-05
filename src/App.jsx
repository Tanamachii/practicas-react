import React from "react";
import {
  Container,
  Button,
  IconButton,
  ButtonGroup,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CardActions,
  CircularProgress,
  LinearProgress,
  Avatar,
  Icon,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Hidden,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Delete, Menu, Accessibility } from "@material-ui/icons";
import styled from "styled-components";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./themeConfig";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyle = makeStyles({
  botonStyle: {
    padding: "1rem",
    color: "red",
  },
});

const Basic = styled(AppBar)``;

export default function App() {
  const clases = useStyle();
  return (
    <Hidden xsDown>
      <ThemeProvider theme={theme}>
        <Container>
          <Basic position="fixed">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <Menu />
              </IconButton>
              <Avatar>T</Avatar>
              <Typography variant="h6" align="left">
                News
              </Typography>
              <Button color="inherit">Login</Button>
              <Accessibility />
            </Toolbar>
          </Basic>
          <Toolbar />
          <Icon>star</Icon>
          <Icon color="primary">add_circle</Icon>
          <TextField id="1" label="picame" value={""} />
          <Alert severity="error">This is an error message!</Alert>
          <Button variant="contained" color="primary" fullWidth>
            Estoy estirado
          </Button>
          <LinearProgress />
          <CircularProgress />
          <Typography variant="h3" align="center">
            Typography componente align center
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Typography componente align center body1
          </Typography>
          <Typography variant="button">
            Typography componente align centet button
          </Typography>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia mollitia ratione facere alias ea dolor incidunt amet
                blanditiis. Hic officiis unde ex facere ducimus assumenda quod
                saepe. Reiciendis, saepe. Ut?
              </Typography>
              <Typography color="textSecondary">adjective</Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Button
            variant="contained"
            color="primary"
            size="large"
            disableElevation
          >
            Press me
          </Button>
          <Button variant="contained" color="secondary" size="medium">
            Text button
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              alert("clicked");
            }}
          >
            Click me
          </Button>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<Delete />}
          >
            Delete
          </Button>
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
            orientation="vertical"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup color="secondary">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <Button
            className={clases.botonStyle}
            fullWidth="true"
            size="large"
            color="primary"
            variant="outlined"
          >
            Mi boton personalizado
          </Button>
          <List>
            <ListItem button>
              <ListItemIcon>
                <Accessibility></Accessibility>
              </ListItemIcon>
              <ListItemText>Hola</ListItemText>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <Delete></Delete>
              </ListItemIcon>
              <ListItemText primary="Borrar" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <Menu></Menu>
              </ListItemIcon>
              <ListItemText>Menu</ListItemText>
            </ListItem>
          </List>
        </Container>
      </ThemeProvider>
    </Hidden>
  );
}
