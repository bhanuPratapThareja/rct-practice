import classes from '../Users.module.css'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';

import Album1 from './Album1'

function User({ user }) {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <CancelIcon />
                <Typography className={classes.user__name}>{'user.name'}</Typography>
            </AccordionSummary>
            <Box className="flex justify-between px-8">
                <h3>Albums by {'user.name'}</h3>
                <Button variant="outlined" startIcon={<AddIcon />}>Add Album</Button>
            </Box>
            <AccordionDetails>
                <Album1 />
            </AccordionDetails>
        </Accordion>

    )
}
export default User