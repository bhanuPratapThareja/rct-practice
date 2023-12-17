import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { pause } from '../../../utils/delay'

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://127.0.0.1:3005/users')

    await pause(1000)

    return response.data
})


export { fetchUsers }