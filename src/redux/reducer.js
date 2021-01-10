import * as actionTypes from './types';

const jsonData = fetch('https://github.com/mrchenliang/earthquakes/build/data.json');
const INITIAL_STATE = {
    site: JSON.parse(JSON.stringify(jsonData)).site,
    profile: JSON.parse(JSON.stringify(jsonData)).profile,
    data: JSON.parse(JSON.stringify(jsonData)).data,
    currentEarthquake: {}
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.LOAD_CURRENT_EARTHQUAKE:
            return {
                ...state,
                currentEarthquake: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;