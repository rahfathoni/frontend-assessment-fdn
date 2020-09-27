import fdnApi from '../../api/fdn-api';

export const FETCH_MAIN_DATA = 'FETCH_MAIN_DATA';
export const FETCH_MAINDATA_LOADING = 'FETCH_MAINDATA_LOADING';

export const fetchMainData = () => {
    return (dispatch) => {
        dispatch(loadingState('start'))
        fdnApi({
            method: 'get',
        })
            .then(data => {
                dispatch(inputMainData(data.data))
                dispatch(loadingState("stop"))
            })
            .catch(err => {
                console.log('eeerrrrrrrrrrrrooooooorrrrrrr')
                console.log(err)
                dispatch(loadingState("error"))
            })
    }
}

export const inputMainData = (mainData) => {
    return {
        type: FETCH_MAIN_DATA,
        payload: mainData
    }
}

export const loadingState = (state) => {
    return {
        type: FETCH_MAINDATA_LOADING,
        payload: state
    }
}