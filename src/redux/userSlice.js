import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        register: (state, actions) => {
            let copied = JSON.parse(JSON.stringify(state.value));
            copied.push(actions.payload);
            state.value = copied
        }
    }
})
export const { register } = userSlice.actions;
export default userSlice.reducer;