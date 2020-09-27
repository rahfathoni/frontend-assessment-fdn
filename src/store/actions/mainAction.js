import fdnApi from '../../api/fdn-api';

export const FETCH_MAIN_DATA = 'FETCH_MAIN_DATA';

export const fetchMainData = () => {
    // console.log('jalannnnnnn')
    return (dispatch) => {
        fdnApi({
            method: 'get',
        })
            .then(data => {
                dispatch(inputMainData(data.data))
            })
            .catch(err => {
                console.log('eeerrrrrrrrrrrrooooooorrrrrrr')
                console.log(err)
            })
    }
}

export const inputMainData = (mainData) => {
    return {
        type: FETCH_MAIN_DATA,
        payload: mainData
    }
}