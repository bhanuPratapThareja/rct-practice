import classes from '../Users.module.css'
import { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Box, Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components'
import User1 from './User1'
import SkeletonLoader from '../../../components/Skeleton/Skeleton'

const MessageBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%; 
    width: 50%;
    transform: translate(-50%, -50%);
`

export default function Users1() {
    return (
        <>
            <Grid container spacing={4} style={{ marginTop: '90px'}}>
                <Grid item className={classes.users__header}>
                    <Box><h4 className="font-semibold hover:font-bold">List Of Users</h4></Box>
                    <Box>
                        <Button variant="outlined">
                            <span style={{ marginLeft: '8px' }}>Add User</span>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <br />


            <User1 />

        </>
    )
}
