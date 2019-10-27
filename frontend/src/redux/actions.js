export const GETTING_DATA = 'GETTING_DATA';
export const GOT_DATA = 'GOT_DATA';
export const ERROR_GET_DATA = 'ERROR_GET_DATA';

export const gettingData = () => ({ type: GETTING_DATA });
export const gotData = data => ({ type: GOT_DATA, data });
export const errorGetData = (e) => ({ type: ERROR_GET_DATA, error: e });

// getData is a redux thunk and requests co2 data from backend
export const getData = () => {
        return async (dispatch) => {
                dispatch(gettingData());
                const options = {
                        method: 'GET',
                        headers: {
                                Accept: 'application/json',
                        },
                };
                try {
                        const res = await fetch('http://localhost:8080/api/co2', options);
                        if (!res.ok) {
                                dispatch(errorGetData());
                        } else {
                                const d = await res.json();
                                dispatch(gotData(d.data));
                        }
                } catch (e) {
                        dispatch(errorGetData(e));
                }
        }
};