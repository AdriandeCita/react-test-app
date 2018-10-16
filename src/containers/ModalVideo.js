import {connect} from 'react-redux';
import {showPopover} from "../actions";
import ModalVideo from "../components/ModalVideo";

const mapDispatchToProps = (dispatch, ownProps) => ({
    showPopover: () => dispatch(showPopover('ADD_TRAILER', ownProps))
});

export default connect(
    null,
    mapDispatchToProps
)(ModalVideo)