import {configureStore} from "@reduxjs/toolkit"
import {hackerReducer} from "./reducers/hackerNewsReducer.js"
import {mediumReducer} from "./reducers/mediumReducer.js"
import { redditReducer } from "./reducers/redditReducer.js"

const store = configureStore({
    reducer: {
        hackerNews: hackerReducer,
        medium: mediumReducer,
        reddit: redditReducer
    }
})

export default store