import { connect } from 'react-redux'
import {setVideoFilter} from '../actions'
import FilterActionItem from "../components/FilterActionItem";

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.videoCharacterFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVideoFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterActionItem)
