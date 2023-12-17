import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from '../thunks/users/fetchUsers'
import { addUser } from '../thunks/users/addUser';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        isCreatingUser: false,
        error: null
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, state => {
            state.isLoading = true
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        });

        builder.addCase(addUser.pending, state => {
            state.isCreatingUser = true
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isCreatingUser = false
            state.data.push(action.payload)
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.isCreatingUser = false
            state.error = action.error
        });
    }
})

export const userActions = usersSlice.actions
export default usersSlice.reducer