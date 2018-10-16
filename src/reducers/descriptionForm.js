function descriptionForm(state = null, action) {
    switch (action.type) {
        case 'SHOW_DESCRIPTION_FORM':
            return action.flag;
        case 'HIDE_DESCRIPTION_FORM':
        default:
            return false;
    }
}

export default descriptionForm;