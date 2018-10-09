const videoCharacterFilter = (state = '', action) => {
    switch (action.type) {
        case 'SET_VIDEO_FILTER':
            return action.filter;
        default:
            return state
    }
};

export default videoCharacterFilter;

