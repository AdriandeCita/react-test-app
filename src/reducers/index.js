import { combineReducers } from 'redux'
import videoCharacterFilter from './videoCharacterFilter'
import videoSorter from './videoSorter'

export default combineReducers({
    videoCharacterFilter,
    videoSorter
})
