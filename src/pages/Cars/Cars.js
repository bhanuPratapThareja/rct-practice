import { useSelector, useDispatch } from 'react-redux';
import { Grid, TextField, Button } from "@mui/material";

import CarsList from './CarsList'
import { carsFormActions, carsListActions } from '../../store/slices/cars-slice'

function Cars() {
    const dispatch = useDispatch()
    const { name, cost } = useSelector(state => state.carsForm)

    function inputChangeHandler(event) {
        let { name, value } = event.target
        if (name === 'cost') value = parseInt(value)
        dispatch(carsFormActions.changeInput({ name, value }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        dispatch(carsListActions.addCar({ name, cost }))
    }

    return (
        <>
            <form onSubmit={handleSubmit}><br />
                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>

                    <Grid item xs={12} sm={4}>
                        <TextField
                            name="name"
                            label="Car Name"
                            variant="outlined"
                            className="w-full"
                            size="small"
                            value={name}
                            onChange={inputChangeHandler}
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextField
                            name="cost"
                            type="number"
                            label="Car cost"
                            variant="outlined"
                            className="w-full"
                            size="small"
                            value={cost || ''}
                            onChange={inputChangeHandler}
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Button
                            type="submit"
                            variant="outlined"
                            fullWidth
                        >
                            Submit
                        </Button>
                    </Grid>

                </Grid>
            </form>
            <hr style={{ border: '1px solid #ddd', width: '100%', marginTop: '2rem' }} />
            <br />
            <CarsList carName={name} />
        </>
    )
}
export default Cars