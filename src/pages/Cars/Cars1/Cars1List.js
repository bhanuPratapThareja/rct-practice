import classes from '../Cars.module.css'
import { Grid, Box, TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText, Button } from '@mui/material'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

function Cars1List() {
    const generateCarsList = [].map(() => {
        return <ListItem className={classes.list_item}>
            <ListItemAvatar>
                <Avatar>
                    <DirectionsCarIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Box>
                        {'car.name'}
                    </Box>
                }
                secondary={`$${'car.cost'}`}
                style={{ fontWeight: '900' }}
            />
            <Button
                variant="outlined"
                className={classes.delete_icon}>
                Delete
            </Button>
        </ListItem>
    })

    return (
        <>
            <Grid container item>
                <Grid item xs={6} sm={8} className="flex items-center">
                    <Box className={classes.my_cars}>
                        <p>My Cars 1</p>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <TextField
                        name="searchTerm"
                        label="Search"
                        variant="filled"
                        className="w-full"
                        size="small"
                    />
                </Grid>
            </Grid>
            <br />
            <List>
                {generateCarsList}
            </List>

            <Box className={classes.total_cost}>
                <h3>Total Cost: {'totalCost'}</h3>
            </Box>
        </>
    )
}
export default Cars1List