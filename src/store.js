import {configureStore} from "@reduxjs/toolkit"
import {hackerReducer} from "./reducers/hackerNewsReducer.js"
import mediumReducer from "./reducers/mediumReducer.js"

configureStore({
    reducer: {
        hackerNews: hackerReducer,
        medium: mediumReducer
    }
})

export default configureStore