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

export const showPopover = (popoverType, popoverProps) => {
    return {
        type: 'SHOW_POPOVER',
        popoverType: popoverType,
        popoverProps: popoverProps
    };
};

export const hidePopover = () => {
    return {
        type: 'HIDE_POPOVER'
    };
};

export const VideoOrders = {
    RELEASE_DATE: 'RELEASE_DATE',
    CHRONOLOGICAL: 'CHRONOLOGICAL'
};

export const showDescriptionForm = flag => {
    return {
        type: 'SHOW_DESCRIPTION_FORM',
        flag: flag
    };
};

export const hideDescriptionForm = flag => {
    return {
        type: 'HIDE_DESCRIPTION_FORM',
        flag: flag
    };
};

export const showCharacterForm = flag => {
    return {
        type: 'SHOW_CHARACTER_FORM',
        flag: flag
    };
};

export const hideCharacterForm = flag => {
    return {
        type: 'HIDE_CHARACTER_FORM',
        flag: flag
    };
};

export const setActiveVideo = video => {
    return {
        type: 'SET_ACTIVE_VIDEO',
        data: video
    };
};

export const addPoster = posterData => {
    return {
        type: 'ADD_POSTER',
        data: posterData
    };
};

export const addTrailer = trailerData => {
    return {
        type: 'ADD_TRAILER',
        data: trailerData
    };
};

export const setDescription = descriptionData => {
    return {
        type: 'SET_DESCRIPTION',
        data: descriptionData
    };
};

export const addCharacter = characterData => {
    return {
        type: 'ADD_CHARACTER',
        data: characterData
    };
};
