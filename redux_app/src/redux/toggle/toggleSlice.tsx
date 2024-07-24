import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface toggleState {
    value: boolean;
}

const initialState: toggleState = {
    value: true
}

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value
        },
        setToggleValue: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        }

    }
})

export const { toggle, setToggleValue } = toggleSlice.actions
export default toggleSlice.reducer