import classes from './Cars.module.css'
import { useMemo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Box, TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText, Button } from '@mui/material'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import { carsListActions } from '../../store/slices/cars-slice';

function CarsList(props) {
    const dispatch = useDispatch()
    const searchTerm = useSelector(state => state.carsList.searchTerm)
    let totalCost = 0

    const cars = useSelector(({ carsList: { cars } }) => {
        let filteredCars = [...cars]
        filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
        calculateTotalCost(filteredCars)
        return filteredCars
    })

    function calculateTotalCost(filteredCars) {
        totalCost = filteredCars.reduce((acc, currentCar) => {
            return acc + currentCar.cost
        }, 0)
    }

    const handleDeleteCar = useCallback((id) => {
        dispatch(carsListActions.removeCar(id))
    }, [dispatch])

    const handleSearchTerm = event => {
        dispatch(carsListActions.changeSearchTerm(event.target.value))
    }

    const generateCarsList = useMemo(() => cars.map(car => {
        return <ListItem className={classes.list_item} key={car.id}>
            <ListItemAvatar>
                <Avatar>
                    <DirectionsCarIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Box
                        sx={{ fontWeight: props.carName.toLowerCase() === car.name.toLowerCase() ? 'bold' : 'medium' }}>
                        {car.name}
                    </Box>
                }
                secondary={`$${car.cost}`}
                style={{ fontWeight: '900' }}
            />
            <Button
                variant="outlined"
                className={classes.delete_icon}
                onClick={() => handleDeleteCar(car.id)}>
                Delete
            </Button>
        </ListItem>
    }), [cars, handleDeleteCar, props.carName])

    return (
        <>
            <Grid container item>
                <Grid item xs={6} sm={8} className="flex items-center">
                    <Box className={classes.my_cars}>
                        <p>My Cars</p>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <TextField
                        name="searchTerm"
                        value={searchTerm}
                        label="Search"
                        variant="filled"
                        className="w-full"
                        size="small"
                        onChange={handleSearchTerm}
                    />
                </Grid>
            </Grid>
            <br />
            <List>
                {generateCarsList}
            </List>

            <Box className={classes.total_cost}>
                <h3>Total Cost: {totalCost}</h3>
            </Box>
        </>
    )
}
export default CarsList