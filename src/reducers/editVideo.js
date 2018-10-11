function editVideo(state = null, action) {
    switch (action.type) {
        case 'SET_CURRENT_EDIT_VIDEO_ID':
            return action.id;
        default:
            return state;
    }
}

export default editVideo;