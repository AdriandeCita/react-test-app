import {connect} from 'react-redux';
import AddCharacterForm from "../components/AddCharacterForm";
import {hideCharacterForm} from "../actions";

const mapStateToProps = (state, ownProps) => ({
    visibleCharacterForm: state.characterForm
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    hideCharacterForm: () => dispatch(hideCharacterForm())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCharacterForm)