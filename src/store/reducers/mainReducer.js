import {
    FETCH_MAIN_DATA,
    FETCH_MAINDATA_LOADING
} from '../actions/index';

const initialState = {
    editorChoice: [],
    latestArticles: [],
    latestReview: [],
    loadingState: 'stop' 
}

const mainReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_MAIN_DATA:
            return {
                ...state,
                editorChoice: payload["editor's choice"],
                latestArticles: payload["latest articles"],
                latestReview: payload["latest review"]
            }
        case FETCH_MAINDATA_LOADING:
            return {
                ...state,
                loadingState: payload
            }
        default:
            return state
    }
}

export default mainReducer