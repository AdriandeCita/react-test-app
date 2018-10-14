export const getMediaSrc = (mediaSource, mediaType) => {
    if (typeof mediaSource !== 'undefined') {
        for (let i = 0; i < mediaSource.length; i++) {
            if (mediaSource[i].type === mediaType) {
                return mediaSource[i].src;
            }
        }
    }

    return '';
};