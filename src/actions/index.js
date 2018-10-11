export const setVideoFilter = filter => ({
    type: 'SET_VIDEO_FILTER',
    filter
});

export const setVideoOrder = sorter => ({
    type: 'SET_VIDEO_ORDER',
    sorter
});

export const showModal = (modalType, modalProps) => {
    return {
        type: 'SHOW_MODAL',
        modalType: modalType,
        modalProps: modalProps
    };
};

export const hideModal = () => {
    return {
        type: 'HIDE_MODAL'
    };
};

export const VideoOrders = {
    RELEASE_DATE: 'RELEASE_DATE',
    CHRONOLOGICAL: 'CHRONOLOGICAL'
};
