import { GETTING_DATA, GOT_DATA, ERROR_GET_DATA } from './actions';

export const reduce = (state = {}, action) => {
        switch (action.type) {
                case GETTING_DATA: {
                        return { loading: true, error: false, data: null };
                }
                case GOT_DATA: {
                        return { loading: false, error: false, data: action.data };
                }
                case ERROR_GET_DATA: {
                        return { loading: false, error: true, data: null };
                }
                default: {
                        return { ...state, data: null };
                }
        }
};