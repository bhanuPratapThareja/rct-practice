import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { Grid, Typography, TextField, Button } from "@mui/material";

import { validateInput, validateForm } from "../../../utils/validations";

const INITIAL_USER_DATA = {
    userName: {
        name: 'userName',
        value: '',
        type: 'text',
        required: true,
        error: '',
    },
    password: {
        name: 'password',
        value: '',
        type: 'password',
        required: true,
        error: ''
    },
    form: {
        formHasError: false
    }
}

const userReducer = (state, action) => {
    const { payload } = action
    const newUserState = { ...state }
    switch (action.type) {
        case 'INPUT_CHANGE':
            newUserState[payload.name].value = payload.value
            newUserState[payload.name].error = ''
            newUserState['form']['formHasError'] = false
            return newUserState
        case 'INPUT_BLUR':
            const error = validateInput(payload)
            if (error) {
                const field = state[payload.name].error = error
                return { ...state, ...state[field] }
            }
            return state
        case 'IS_FORM_VALID':
            newUserState.form.formHasError = payload
            return { ...newUserState }
        default:
            return state
    }
}

const Login = () => {
    const dispatch = useDispatch()
    const [userState, dispatchUser] = useReducer(userReducer, INITIAL_USER_DATA)

    const onChangeHandler = (...rest) => {
        const [name, value] = rest
        // const { name, value } = e.target
        const payload = { name, value }
        dispatchUser({
            type: 'INPUT_CHANGE',
            payload
        })
    }

    const onBlurHandler = e => {
        const { target: { name, value, type, required } } = e
        const payload = { name, value, type, required }
        dispatchUser({
            type: 'INPUT_BLUR',
            payload
        })
    }

    const handleSubmit = event => {
        event.preventDefault()

        for (let key in userState) {
            if (key === 'form') {
                continue;
            }
            const { name, value, type, required } = userState[key]
            const payload = { name, value, type, required }
            dispatch({
                type: 'INPUT_BLUR',
                payload
            })
        }

        validateForm(userState)

        // dispatch({
        //     type: 'IS_FORM_VALID',
        //     payload: formHasError
        // })

        // if(!formHasError) {
        //     dispatch(userActions.login(userState))
        // }
    }

    return (
        <form onSubmit={handleSubmit}><br />
            <Typography variant="h5">Login</Typography><br />
            <Grid container spacing={3}>

                <Grid container item>
                    <Grid item xs={0} sm={2}></Grid>
                    <Grid item xs={12} sm={8}>
                        <TextField
                            type={userState.userName.type}
                            name={userState.userName.name}
                            value={userState.userName.value}
                            onChange={e => onChangeHandler(e.target.name, e.target.value, e)}
                            onBlur={onBlurHandler}
                            label="User Name"
                            variant="standard"
                            className="w-full"
                            required={userState.userName.required}
                            minLength={4}
                        />
                        <small
                            style={{ height: '1rem', visibility: userState.userName.error ? 'visible' : 'hidden' }}
                            className="flex text-red-600 font-bold">
                            {userState.userName.error}
                        </small>
                    </Grid>
                    <Grid item xs={0} sm={2}></Grid>
                </Grid>

                <Grid container item>
                    <Grid item xs={0} sm={2}></Grid>
                    <Grid item xs={12} sm={8}>
                        <TextField
                            type={userState.password.type}
                            name={userState.password.name}
                            value={userState.password.value}
                            onChange={e => onChangeHandler(e.target.name, e.target.value, e.target.type)}
                            onBlur={onBlurHandler}
                            label="Password"
                            variant="standard"
                            className="w-full"
                            required={userState.password.required}
                        />
                        <small
                            style={{ height: '1rem', visibility: userState.password.error ? 'visible' : 'hidden' }}
                            className="flex text-red-600 font-bold">
                            {userState.password.error}
                        </small>
                    </Grid>
                    <Grid item xs={0} sm={2}></Grid>
                </Grid>

                <Grid container item>
                    <Grid item xs={0} sm={2}></Grid>
                    <Grid item xs={12} sm={8}>
                        <small style={{ visibility: userState.form.formHasError ? 'visible' : 'hidden' }} className="flex text-red-600 font-bold">
                            Invalid Form
                        </small>
                    </Grid>
                    <Grid item xs={0} sm={2}></Grid>
                </Grid>

                <Grid container item style={{ marginTop: '2rem' }}>
                    <Grid item xs={0} sm={3}></Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                        // disabled={userState.form.formIsInvalid}    
                        >
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={0} sm={3}></Grid>
                </Grid>
            </Grid>
        </form>
    )
}
export default Login