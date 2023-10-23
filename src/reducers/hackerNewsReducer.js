import axios from 'axios'

const initialState = {
    loading: false,
    articles: []
}

const PENDING = 'PENDING'
const REQUEST_ARTICLES = 'REQUEST_ARTICLES'

const requestArticles = async (dispatch) => {
    dispatch({type: PENDING})

    let response = await axios.get('/api/hacker-news')

    dispatch({
        type: REQUEST_ARTICLES,
        payload: response.data
    })

}

const hackerReducer = (state = initialState, action) => {

    switch (action.type) {
        case PENDING:
            return {
                ...state,
                loading: true
            }

        case REQUEST_ARTICLES:
            return {
                ...state,
                loading: false,
                articles: action.payload
            }

        default:
            return state
    }
}

export {hackerReducer, requestArticles}