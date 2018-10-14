import { connect } from 'react-redux';
import {showPopover} from "../actions";
import ModalPoster from "../components/ModalPoster";

const mapDispatchToProps = (dispatch, ownProps) => ({
    showPopover: () => dispatch(showPopover('ADD_POSTER', ownProps))
});

export default connect(
    null,
    mapDispatchToProps
)(ModalPoster)