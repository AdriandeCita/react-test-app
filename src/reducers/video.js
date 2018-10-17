const defaultVideoModel = {
    title: '',
    media: [],
    cast: []
};

const copyState = stateObject => {
    let newState = {};
    Object.keys(stateObject).forEach((key) => {
        if (Array.isArray(stateObject[key])) {
            newState[key] = stateObject[key].slice();
        } else if (typeof stateObject[key] === 'object') {
            newState[key] = {...stateObject[key]};
        } else {
            newState[key] = stateObject[key];
        }
    });

    return newState;
};

const video = (state = defaultVideoModel, action) => {
    let newState;

    switch (action.type) {
        case 'SET_ACTIVE_VIDEO':
            return action.data ? action.data : defaultVideoModel;
        case 'ADD_POSTER':
            newState = copyState(state);
            newState.media.push(action.data);
            return newState;
        case 'ADD_TRAILER':
            newState = copyState(state);
            newState.media.push(action.data);
            return newState;
        case 'SET_DESCRIPTION':
            return Object.assign(state, action.data);
        case 'ADD_CHARACTER':
            newState = copyState(state);
            newState.characters.push(action.data);
            return newState;
        default:
            return state
    }
};

export default video;

