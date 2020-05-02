import React, { useEffect } from 'react';
import { Button, Table, TableHead, TableRow, TableCell, TableBody, Grid } from '@material-ui/core';
import { Vehicle } from './models';
import { uuid } from 'uuidv4';
import { DataStore, SubscriptionMessage } from '@aws-amplify/datastore';

function Vehicles() {
    const [vehicles, setVehicles] = React.useState<Vehicle[]>([]);

    function fetchAll() {
        DataStore
            .query(Vehicle)
            .then(setVehicles)
            .catch(console.error);
    };

    useEffect(() => {
        fetchAll();

        function subscriber(subscriptionMessage: SubscriptionMessage<Vehicle>) {
            console.log('subscriptionMessage', subscriptionMessage);
    
            fetchAll();
        }
    
        const subscription = DataStore
            .observe(Vehicle)
            .subscribe(subscriber);

        return () => { subscription.unsubscribe(); };
    }, []);

    function addVehicle() {
        const make = uuid();
        const model = uuid();
        const mileage = Math.floor(Math.random() * 100000) + 1
        const vehicle = new Vehicle({ make, model, mileage });

        DataStore.save(vehicle);
    }

    function onClick(event: React.MouseEvent) {
        addVehicle();

        event.preventDefault();
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
                <Button onClick={onClick}>Add vehicle</Button>
            </Grid>
            <Grid item xs={12} sm={9}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Make</TableCell>
                            <TableCell>Model</TableCell>
                            <TableCell>Mileage</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            vehicles.map((vehicle) => (
                                <TableRow>
                                    <TableCell>{vehicle.make}</TableCell>
                                    <TableCell>{vehicle.model}</TableCell>
                                    <TableCell align="right">{vehicle.mileage}</TableCell>
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
