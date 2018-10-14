import { combineReducers } from 'redux'
import videoCharacterFilter from './videoCharacterFilter'
import videoSorter from './videoSorter'
import modal from "./modal";
import popover from "./popover";

export default combineReducers({
    videoCharacterFilter,
    videoSorter,
    modal,
    popover
})
