import {combineReducers} from 'redux'
import videoCharacterFilter from './videoCharacterFilter'
import videoSorter from './videoSorter'
import modal from "./modal";
import popover from "./popover";
import descriptionForm from "./descriptionForm";
import characterForm from "./characterForm";
import video from "./video"

export default combineReducers({
    videoCharacterFilter,
    videoSorter,
    descriptionForm,
    characterForm,
    modal,
    popover,
    video
})
