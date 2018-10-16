import {connect} from 'react-redux';
import {showDescriptionForm} from "../actions";
import ModalDescription from "../components/ModalDescription";

const mapStateToProps = (state, ownProps) => ({
    visibleDescriptionForm: state.descriptionForm
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    showDescriptionForm: () => dispatch(showDescriptionForm(true))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalDescription)