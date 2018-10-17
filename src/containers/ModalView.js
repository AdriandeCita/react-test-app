import {connect} from 'react-redux';
import {
    hideModal,
    hidePopover,
    setActiveVideo,
    showDescriptionForm
} from "../actions";
import ModalView from "../components/ModalView";

const mapStateToProps = (state, ownProps) => ({
    video: state.video,
    visibleDescriptionForm: state.descriptionForm
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    hideModal: () => {
        dispatch(hideModal());
        dispatch(setActiveVideo());
        dispatch(hidePopover())
    },
    showDescriptionForm: () => dispatch(showDescriptionForm(true)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalView)