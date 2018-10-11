function viewVideo(state = null, action) {
    switch (action.type) {
        case 'SET_CURRENT_VIEW_VIDEO_ID':
            return action.id;
        default:
            return state;
    }
}

export default viewVideo;