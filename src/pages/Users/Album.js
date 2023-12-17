import classes from './Users.module.css'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';

function Album() {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <CancelIcon />
                <Typography className={classes.album__name}>Album #1</Typography>
            </AccordionSummary>
            <Box className="flex justify-between px-8">
                <h3>Photos in Album #1</h3>
                <Button variant="outlined" startIcon={<AddIcon />}>Add Photo</Button>
            </Box>
            <AccordionDetails>
                <p>Photos here</p>
            </AccordionDetails>
        </Accordion>
    )
}
export default Album