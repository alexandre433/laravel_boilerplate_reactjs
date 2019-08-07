import { FETCH_CONFIG } from './types';

export const getConfig = (language = 'en') => dispatch => {
    fetch('./api/lang/' + language)
        .then(res => res.json())
        .then(config => dispatch(
            {
                type: FETCH_CONFIG,
                payload: config
            }
        ))
};
