import {
    FETCH_MAIN_DATA
} from '../actions/index';

const initialState = {
    editorChoice: [],
    latestArticle: [],
    latestReview: []
}

const mainReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_MAIN_DATA:
            return {
                ...state,
                editorChoice: payload["editor's choice"],
                latestArticle: payload["latest articles"],
                latestReview: payload["latest review"]
            }
        default:
            return state
    }
}

export default mainReducer