import { createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'
import { faker } from '@faker-js/faker'
import { pause } from '../../../utils/delay'

export const addUser = createAsyncThunk('users/add', async () => {
    const response = await axios.post('http://127.0.0.1:3005/users', {
        name: faker.name.fullName(),
        id: nanoid()
    })
    await pause(3000)
    return response.data
})