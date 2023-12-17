import classes from './Users.module.css'
import { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Box, Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components'
import User from './User'
import { fetchUsers } from '../../store/thunks/users/fetchUsers'
import { addUser } from '../../store/thunks/users/addUser'
import SkeletonLoader from '../../components/Skeleton/Skeleton'

const MessageBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%; 
    width: 50%;
    transform: translate(-50%, -50%);
`

function Users() {
    const dispatch = useDispatch()
    const users = useSelector(({ users }) => users)
    const { isLoading, data, error, isCreatingUser } = users

    useEffect(() => {
        dispatch(fetchUsers())
            .unwrap()
            .then((res) => console.log('success: ', res))
            .catch((err) => console.log('error: ', err))
            .finally(() => console.log('finally'))
    }, [])

    const onAddUser = () => {
        dispatch(addUser())
    }

    if (error) {
        return (
            <MessageBox>
                Error Fetching Data...
            </MessageBox>
        )
    }

    return (
        <>
            <Grid container spacing={4}>
                <Grid item className={classes.users__header}>
                    <Box><h4 className="font-semibold hover:font-bold">List Of Users</h4></Box>
                    <Box>
                        <Button variant="outlined" onClick={onAddUser} sx={{ width: '150px'}}>
                            {isCreatingUser ? <CircularProgress size={24} thickness={4} />: 
                            <span style={{ marginLeft: '8px' }}>Add User</span>}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <br />

            <Fragment>
                {isLoading ? <SkeletonLoader times={3} /> : !data.length ?
                    <MessageBox>
                        <h3 className="font-semibold">No Users Added.</h3>
                    </MessageBox> :
                    data.map((user, i) =>
                        <Fragment key={user.id}>
                            <User user={user} />
                        </Fragment>
                    )}
            </Fragment>
        </>
    )
}

export default Users