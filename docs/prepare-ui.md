We're going to add code to one of the pages—vehicles—to add a vehicle and list them out. We just generate random values for fields for now. And it won't be hooked up to the back end. But this will let us see how to update state and display the complete list. 

## First add Amplify dependencies

```
yarn add aws-amplify @aws-amplify/ui-react
```

We're not going to use these right off the bat, but let's do it while we're thinking of it.

## A little layout

Lets solve the ugly indentation of the "Vehicles" header. Actually, let's solve the problem for all pages at the same time. This is easy: Just add a simple style to `App.tsx`. 

Define a style before the function definition like this.

!!! note
    Remember this goes in `App.tsx`.

```typescript
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(15, 3, 0, 3),
  },
}));
```

Remember the `theme` argument lets us use spacing from the theme itself. We could use hard-coded pixel sizes, but we'd have to update all those manually every time the theme changes. That would be not only annoying, but in addition your pull request would be rejected and no one on your team will want to go to lunch with you today.

`makeStyles()` returns a function. We get the classNames from the result of calling this function like this

```typescript
function App() {
  const classes = useStyles();

  ...
```

Then we can use the styles in a top-level React element. If we replace the existing `<>` ... `</>` with a `<div>`, we can say the following to wrap everything in the style we defined in `makeStyles(...)` above.

```typescript
  return (
    <div className={classes.root}>
      <AppBar color="inherit">

      ...
```

We're just using the name of the class here. Test it worked. Well at least the margins are looking better.

## Now add some state for the list of vehicles

First let's generate the model code from our `schema.graphql`.

```shell
amplify codegen models
```

!!! note
    All this goes in `Vehicles.tsx`

Import the new `Vehicle` class

```typescript
import Vehicle from './models';
```

We're going to use React hooks for our state. Put this at the top of the function

```typescript
const [vehicles, setVehicles] = React.useState<Vehicle[]>([])
```

We'll be using random placeholders for fields: UUIDs are just the ticket.

```shell
yarn add uuidv4 @types/uuid 
```


Waaaaaaay too far ahead.


Here's the whole file, `Vehicles.tsx`. We'll go through it in a second.

```typescript
import React from 'react';
import { Grid, Button, List, ListItem, ListItemText } from '@material-ui/core';
import { Vehicle } from './DTOs';
import { uuid } from 'uuidv4';

function Vehicles() {
    const [vehicles, setVehicles] = React.useState<Vehicle[]>([])

    function addVehicle() {
        const make = uuid();
        const model = uuid();
        const mileage = Math.floor(Math.random() * 100000) + 1;
        const vehicle: Vehicle = {
            make,
            model,
            mileage
        }

        setVehicles([...vehicles, vehicle])
    }

    function onClick(event: React.MouseEvent) {
        console.log('event', event);

        addVehicle();

        event.preventDefault();
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} >
                <Button onClick={onClick}>Add vehicle</Button>
            </Grid>
            <Grid item xs={12} >
                <List>
                    {
                        vehicles.map((vehicle) => (
                            <ListItem key={vehicle.make}>
                                <ListItemText>{JSON.stringify(vehicle)}</ListItemText>
                            </ListItem>
                        ))
                    }
                </List>
            </Grid>
        </Grid>
    );
}

export default Vehicles;
```

We maintain state using React hooks. See <https://reactjs.org/docs/hooks-overview.html>. Hooks are so cool.

```typescript
    const [vehicles, setVehicles] = React.useState<Vehicle[]>([])
```

Then we need a function to add a random vehicle to the list, which calls `setVehicles()`.

```typescript
    function addVehicle() {
        const make = uuid();
        const model = uuid();
        const mileage = Math.floor(Math.random() * 100000) + 1;
        const vehicle: Vehicle = {
            make,
            model,
            mileage
        }

        setVehicles([...vehicles, vehicle])
    }
```

Then a simple handler for a button click.

```typescript
    function onClick(event: React.MouseEvent) {
        console.log('event', event);

        addVehicle();

        event.preventDefault();
    }
```

The `event.preventDefault();` is necessary because React decorates native DOM events and we don't want the browser to refresh or reload the window.

There's an outer `<Grid container spacing={1}>`, which spaces elements inside it with one theme unit. Then there are two inner `<Grid item xs={12} >` elements, which span a full-width row. Layout in React Material is based on rows of 12 columns. This makes our items full-width.

The first element is a `<Button>` that does something handy when you click it. The next item iterates over the vehicles and displays them in a `<List>`.

Try it and see.

## The upshot

We added an array of Vehicles as state, a button to add a new one with some random values for the fields for `make`, `model`, and `mileage`, and a list of them that updates as we add a vehicle.

If you feel up to making a simple change, you can add another button to delete all saved vehicles. Or you could try converting the `<List>` to a `<Table>`. It sure would be nicer if it wasn't JSON. 

## We took a stab at the suggested changes

```typescript
import React from 'react';
import { Grid, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Vehicle } from './DTOs';
import { uuid } from 'uuidv4';

function Vehicles() {
    const [vehicles, setVehicles] = React.useState<Vehicle[]>([])

    function addVehicle() {
        const make = uuid();
        const model = uuid();
        const mileage = Math.floor(Math.random() * 100000) + 1;
        const vehicle: Vehicle = {
            make,
            model,
            mileage
        }

        setVehicles([...vehicles, vehicle])
    }

    function onAdd(event: React.MouseEvent) {
        addVehicle();

        event.preventDefault();
    }

    function onDeleteAll(event: React.MouseEvent) {
        setVehicles([]);

        event.preventDefault();
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} >
                <Button onClick={onAdd}>Add vehicle</Button>
                <Button onClick={onDeleteAll}>Delete all vehicles</Button>
            </Grid>
            <Grid item xs={12} >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Make</TableCell>
                            <TableCell>Model</TableCell>
                            <TableCell align="right">Mileage</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            vehicles.map((vehicle) => (
                                <TableRow>
                                    <TableCell>{vehicle.make}</TableCell>
                                    <TableCell>{vehicle.model}</TableCell>
                                    <TableCell>{vehicle.mileage}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    );
}

export default Vehicles;
```

The table's pretty lame: There's no pagination, editing, sorting, or filtering. That's in our future.