import { useState, useRef } from 'react'
import { Grid, Typography, TextField } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const INITIAL_USER_DATA = {
    userName: '',
    password: '',
    email: '',
    google: false,
    friend: false,
    other: false,
    gender: '',
    profile: '',
    tnc: false
}

const Register = function () {
    const userNameRef = useRef()
    const [userData, setUserData] = useState(INITIAL_USER_DATA)

    const onChangeHandler = event => {
        let { name, value, type, checked } = event.target
        setUserData(userData => {
            // const newUserData = { ...userData }
            if (type === 'checkbox') value = checked
            console.log(name, value, type, checked)
            // newUserData[name] = value
            // return newUserData
            console.log( { ...userData, [name]: value })
            return { ...userData, [name]: value }
        })
    }

    const handleRegister = event => {
        // console.log(userNameRef)
        userNameRef.current.style.border = '1px solid red'
        // const classes = userNameRef.current.className + ' asdf'
        // userNameRef.current.classList.add('hello00', 'hello11', 'hello22', 'hello33')
        userNameRef.current.className += ' abcde'
        // console.log(classes)
        // console.log(userData)

        event.preventDefault()
        const fd = new FormData(event.target)
        // console.log(fd)
        // const userName = fd.get('userName')
        // console.log({ userName})

        console.log(Object.fromEntries(fd.entries()))
        setTimeout(() => {
            console.log('resetting form')
            event.target.reset()
        }, 1000);
    }


    return (
        <form noValidate onSubmit={handleRegister}><br />
            <Typography variant="h5">Register</Typography><br />
            <Grid container spacing={3}>
                <Grid container item>
                    <Grid item xs={0} sm={2}></Grid>
                    <Grid item xs={12} sm={8}>
                        <TextField ref={userNameRef} name="userName" value={userData.userName} label="User Name" variant="standard" sx={{ width: '100%' }} onChange={onChangeHandler} required />
                    </Grid>
                    <Grid item xs={0} sm={2}></Grid>
                </Grid>

                <Grid container item>
                    <Grid item xs={0} sm={2}></Grid>
                    <Grid item xs={12} sm={8}>
                        <TextField type="password" name="password" value={userData.password} label="Password" variant="standard" sx={{ width: '100%' }} onChange={onChangeHandler} />
                    </Grid>
                    <Grid item xs={0} sm={2}></Grid>
                </Grid>

                <Grid container item>
                    <Grid item xs={0} sm={2}></Grid>
                    <Grid item xs={12} sm={8}>
                        <TextField type="email" name="email" value={userData.email} label="Email" variant="standard" sx={{ width: '100%' }} onChange={onChangeHandler} />
                    </Grid>
                    <Grid item xs={0} sm={2}></Grid>
                </Grid>

                <Grid container item>
                    <Grid item xs={2} sm={2}></Grid>
                    <Grid item xs={8} sm={6}>
                        <label>Acquisition Channel</label>
                        <FormControlLabel name="google" checked={userData.google} style={{ display: 'flex' }} control={<Checkbox />} label="Google" onChange={onChangeHandler} />
                        <FormControlLabel name="friend"  checked={userData.friend} style={{ display: 'flex' }} control={<Checkbox />} label="Friend" onChange={onChangeHandler} />
                        <FormControlLabel name="other"  checked={userData.other} style={{ display: 'flex' }} control={<Checkbox />} label="Other" onChange={onChangeHandler} />
                    </Grid>
                    <Grid item xs={2} sm={3}></Grid>
                </Grid>

                <Grid container item>
                    <Grid item xs={0} sm={2}></Grid>
                    <Grid item xs={6} sm={4}>
                        <FormControl style={{ display: 'flex' }}>
                            <FormLabel style={{ display: 'flex' }}>Gender</FormLabel>
                            <RadioGroup row name="gender" value={userData.gender} onChange={onChangeHandler}>
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Female"
                                    labelPlacement="start"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Profile</InputLabel>
                            <Select
                                name="profile"
                                value={userData.profile}
                                label="Profile"
                                onChange={onChangeHandler}
                                type="select"
                            >
                                <MenuItem value="" disabled>Select a profile</MenuItem>
                                <MenuItem value="admin">Administrator</MenuItem>
                                <MenuItem value="guest">Guest</MenuItem>
                                <MenuItem value="dev">Developer</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={0} sm={2}></Grid>
                </Grid>


                <Grid container item>
                    <Grid item xs={2} sm={2}></Grid>
                    <Grid item xs={8} sm={6}>
                        <FormControlLabel name="tnc" checked={userData.tnc} style={{ display: 'flex' }} required control={<Checkbox />} label="Terms and conditions" onChange={onChangeHandler} />
                    </Grid>
                    <Grid item xs={2} sm={3}></Grid>
                </Grid>

                <Grid container item>
                    <Grid item xs={2} sm={3}></Grid>
                    <Grid item xs={8} sm={6}>
                        <Button type="submit" variant="contained" fullWidth>Register</Button>
                        <Button type="reset" onClick={() => setUserData(INITIAL_USER_DATA)} variant="contained" fullWidth>Reset</Button>
                    </Grid>
                    <Grid item xs={2} sm={3}></Grid>
                </Grid>

            </Grid >
        </form>
    )
}

export default Register