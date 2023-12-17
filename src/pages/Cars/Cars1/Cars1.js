import { Grid, TextField, Button } from "@mui/material";

import Cars1List from './Cars1List'

function Cars1() {
    return (
        <>
            <form><br />
                <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>

                    <Grid item xs={12} sm={4}>
                        <TextField
                            name="name"
                            label="Car Name"
                            variant="outlined"
                            className="w-full"
                            size="small"
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
            <Cars1List />
        </>
    )
}
export default Cars1