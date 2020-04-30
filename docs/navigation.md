!!! note
    If you get turned around with the sequence of updates we're going to make with files, or if you'd rather the TL;DR, click "The upshot" on the right to see what's what.

Well, first we need to be able to get to pages for all the things you'll be dealing with in an autobody shop: _vehicles_, _owners_, _services_, _parts_, and _work orders_.

Let's set up a row of buttons for that. They won't be plugged in yet. We'll get to that shortly.

Replace `App.tsx` with

```typescript
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core';

function App() {
  return (
    <>
      <AppBar color="inherit">
        <Toolbar>
          <Typography variant="h4" >Welcome to C-19 Autobody</Typography>
        </Toolbar>
        <div>
          <Button>Home</Button>
          <Button>Vehicles</Button>
          <Button>Owners</Button>
          <Button>Services</Button>
          <Button>Parts</Button>
          <Button>Work Orders</Button>
        </div>
      </AppBar>
    </>
  );
}

export default App;
```

Try it. 

Getting better. We can argue about spacing later. The out-of-the-box spacing is at least not completely wrong.

## Create stubs for all the components

For the Home component, simply add the file `Home.tsx` in the `src` directory with the content below. We're going to add routing to these in bit.

```typescript
import React from 'react';
import { Typography } from '@material-ui/core';

function Home() {
    return (
        <Typography variant="h3">Home</Typography>
    );
}

export default Home;
```

Do the same for `Vehicles`, `Owners`, `Services`, `Parts`, and `WorkOrders`.

!!! note
    Remember there are 3 places you need to change the name of each component.

## Add routes to those stubs

First add the `react-router-dom` dependency and TypeScript definitions.

```shell
yarn add react-router-dom @types/react-router-dom
```

Now wrap the `App` component in a `<BrowserRouter>` ... `</BrowserRouter>`. The easiest place to do this is in `index.tsx`.

!!! note 
    Make these changes in `index.tsx`

Add the import

```typescript
import { BrowserRouter } from "react-router-dom";
```

And then wrap the existing `<App />` like this

```typescript
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

## Add some actual routing

It's actually pretty easy now we have the stub components and the `<BrowserRouter>` wrapper.

!!! note 
    Make these changes in `App.tsx`

Replace the `<Button>`s in the `<AppBar>` with `<Link>`s and the bindings from routes to the components.

We'll need a few more imports. See the complete `App.tsx` in the upshot below.

Try it with `yarn start`.

Wait what? 

Why can't I see the stubs the text of the stubs? Here's a clue: Change one of the subs to be taller. Like 

```typescript
function Home() {
    return (
        <>
            <Typography variant="h3">Home</Typography>
            <Typography variant="h3">Home</Typography>
            <Typography variant="h3">Home</Typography>
            <Typography variant="h3">Home</Typography>
            <Typography variant="h3">Home</Typography>
            <Typography variant="h3">Home</Typography>
            <Typography variant="h3">Home</Typography>
        </>
    );
}
```

We can see the bottom 5 plus a sliver headers. We're going to fix this ugliness in the next chapter.

## The upshot

After all our changes, here's where we ended up.

`index.tsx` is

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import { BrowserRouter } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

`App.tsx` is

```typescript
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Vehicles from './Vehicles';
import Owners from './Owners';
import Services from './Services';
import Parts from './Parts';
import WorkOrders from './WorkOrders';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
```

We defined components for _Home_, _Vehicles_, _Owners_, _Services_, _Parts_, and _Work Orders_ in files in `src` called `Home.tsx` and so on, with the pattern

```typescript
import React from 'react';
import { Typography } from '@material-ui/core';

function Home() {
    return (
        <>
            <Typography variant="h3">Home</Typography>
        </>
    );
}

export default Home;
```

For Work Orders, call the file `WorkOrders.tsx`.