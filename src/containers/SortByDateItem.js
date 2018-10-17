import {connect} from 'react-redux'
import {setVideoOrder} from '../actions'
import SortByDateItem from "../components/SortByDateItem";

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.sorter === state.videoSorter,
    activeModal: state.modal
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVideoOrder(ownProps.sorter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortByDateItem)
