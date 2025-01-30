import { configureStore } from "@reduxjs/toolkit"
import activeTabReducer from './features/activeTabSlice'

const store = configureStore({
    reducer: {
        activeTab : activeTabReducer
    }
})

export default store