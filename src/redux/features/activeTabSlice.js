import { createSlice } from "@reduxjs/toolkit"

const activeTabSlice = createSlice({

    name : "activeTab",
    initialState : 'explore',
    reducers : {
        setActiveTab : (state, action) => action.payload
    }
})

export const { setActiveTab } = activeTabSlice.actions

export default activeTabSlice.reducer