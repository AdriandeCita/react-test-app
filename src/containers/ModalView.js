import {connect} from 'react-redux';
import {hideModal, setActiveVideo, showDescriptionForm} from "../actions";
import ModalViewVideo from "../components/ModalViewVideo";

const mapStateToProps = (state, ownProps) => ({
    video: state.video,
    visibleDescriptionForm: state.descriptionForm
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    hideModal: () => {
        dispatch(hideModal());
        dispatch(setActiveVideo());
    },
    showDescriptionForm: () => dispatch(showDescriptionForm(true)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalViewVideo)