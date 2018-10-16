import {connect} from 'react-redux';
import FormVideoDescription from "../components/FormVideoDescription";
import {hideDescriptionForm} from "../actions";

const mapStateToProps = (state, ownProps) => ({
    visibleDescriptionForm: state.descriptionForm
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    hideDescriptionForm: () => dispatch(hideDescriptionForm())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormVideoDescription)