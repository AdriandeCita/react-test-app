import {connect} from 'react-redux';
import {showPopover} from "../actions";
import ModalVideoView from "../components/ModalVideoView";

const mapDispatchToProps = (dispatch, ownProps) => ({
    showPopover: () => dispatch(showPopover('ADD_TRAILER', ownProps))
});

export default connect(
    null,
    mapDispatchToProps
)(ModalVideoView)