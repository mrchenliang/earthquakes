import * as actionTypes from './types';

export const loadCurrentEarthquake = (earthquake) => {
    return {
        type: actionTypes.LOAD_CURRENT_EARTHQUAKE,
        payload: earthquake
    }
}