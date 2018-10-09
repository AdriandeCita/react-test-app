import { connect } from 'react-redux'
import { setVideoOrder } from '../actions'
import SortActionItem from "../components/SortActionItem";

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.sorter === state.videoSorter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVideoOrder(ownProps.sorter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortActionItem)
