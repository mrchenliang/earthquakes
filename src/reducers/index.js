import jsonData from '../data.json';
const INITIAL_STATE = {
    data: JSON.parse(JSON.stringify(jsonData)),
    currentProfile: {}
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default rootReducer;