export const setVideoFilter = filter => ({
    type: 'SET_VIDEO_FILTER',
    filter
});

export const setVideoOrder = sorter => ({
    type: 'SET_VIDEO_ORDER',
    sorter
});

export const VideoOrders = {
    RELEASE_DATE: 'RELEASE_DATE',
    CHRONOLOGICAL: 'CHRONOLOGICAL'
};
