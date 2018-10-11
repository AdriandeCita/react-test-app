import { combineReducers } from 'redux'
import videoCharacterFilter from './videoCharacterFilter'
import videoSorter from './videoSorter'
import modal from "./modal";

export default combineReducers({
    videoCharacterFilter,
    videoSorter,
    modal
})
