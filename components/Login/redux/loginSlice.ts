import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginData {
    authorized: boolean | null;
}
const initialState: loginData = {
    authorized: null
}
export const loginSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        saveLoginData: (state, action: PayloadAction<boolean>) => {
            state.authorized = action.payload
        },
        logout: (state) => {
            state.authorized = null
        }
    }
})

export const { saveLoginData, logout } = loginSlice.actions;
export default loginSlice.reducer;