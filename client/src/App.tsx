import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Vehicles from './Vehicles';
import Owners from './Owners';
import Services from './Services';
import Parts from './Parts';
import WorkOrders from './WorkOrders';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(15, 3, 0, 3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit">
        <Toolbar>
          <Typography variant="h4" >Welcome to C-19 Autobody</Typography>
        </Toolbar>
        <div>
          <Link to="/" component={Button}>Home</Link>
          <Link to="/vehicles" component={Button}>Vehicles</Link>
          <Link to="/owners" component={Button}>Owners</Link>
          <Link to="/services" component={Button}>Services</Link>
          <Link to="/parts" component={Button}>Parts</Link>
          <Link to="/workorders" component={Button}>Work Orders</Link>
        </div>
      </AppBar>

      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/vehicles" component={Vehicles} />
          <Route path="/owners" component={Owners} />
          <Route path="/services" component={Services} />
          <Route path="/parts" component={Parts} />
          <Route path="/workorders" component={WorkOrders} />
        </Switch>
      </main>
    </div>
  );
}

export default App;