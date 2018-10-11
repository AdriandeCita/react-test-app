const videoCharacterFilter = (state = '', action) => {
    switch (action.type) {
        case 'SET_VIDEO_FILTER':
            return action.filter && action.filter === state
                ? ''
                : action.filter;
        default:
            return state
    }
};

export default videoCharacterFilter;

