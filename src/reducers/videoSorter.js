import { VideoOrders } from '../actions';

const videoSorter = (state = VideoOrders.RELEASE_DATE, action) => {
    switch (action.type) {
        case 'SET_VIDEO_ORDER':
            return action.sorter;
        default:
            return state
    }
};

export default videoSorter;

