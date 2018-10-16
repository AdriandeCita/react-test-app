import {connect} from 'react-redux';
import {showCharacterForm} from "../actions";
import ModalCast from "../components/ModalCast";

const mapDispatchToProps = (dispatch, ownProps) => ({
    showCharacterForm: () => dispatch(showCharacterForm(true))
});

export default connect(
    null,
    mapDispatchToProps
)(ModalCast)