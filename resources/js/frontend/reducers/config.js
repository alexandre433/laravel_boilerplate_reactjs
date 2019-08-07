import { FETCH_CONFIG } from '../actions/types';

const initialState = {};

export default function (state = initialState, action)
{
    switch (action.type) {
        case FETCH_CONFIG:
            return {
                ...state,
                payload: action.payload
            };

        default:
            return state;
    }
}
