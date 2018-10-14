const initialState = {
    popoverType: null,
    popoverProps: {}
};

function modal(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_POPOVER':
            return {
                popoverType: action.popoverType,
                popoverProps: action.popoverProps
            };
        case 'HIDE_POPOVER':
            return initialState;
        default:
            return state
    }
}

export default modal;