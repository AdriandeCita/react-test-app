function characterForm(state = null, action) {
    switch (action.type) {
        case 'SHOW_CHARACTER_FORM':
            return action.flag;
        case 'HIDE_CHARACTER_FORM':
        default:
            return false;
    }
}

export default characterForm;