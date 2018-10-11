export const getImageSrc = (characterMedia) => {
    if (typeof characterMedia !== 'undefined') {
        for (let i = 0; i < characterMedia.length; i++) {
            if (characterMedia[i].type === 'image') {
                return characterMedia[i].src;
            }
        }
    }

    return '';
};