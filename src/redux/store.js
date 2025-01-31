import { configureStore } from "@reduxjs/toolkit"
import activeTabReducer from './features/activeTabSlice'
import themeReducer from './features/themeSlice'

const store = configureStore({
    reducer: {
        activeTab : activeTabReducer,
        theme : themeReducer
    }
})

export default store