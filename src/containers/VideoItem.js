import {connect} from 'react-redux';
import MovieBlock from "../components/MovieBlock";
import {showModal} from "../actions";

const isVideoAcceptedByFilter = (video, filter) => {
    for (let i = 0; i < video.cast.length; i++) {
        if (video.cast[i].id === filter) {
            return true;
        }
    }
    return false;
};

const mapStateToProps = (state, ownProps) => {
    return {
        selected: state.videoCharacterFilter ? isVideoAcceptedByFilter(ownProps.video, state.videoCharacterFilter) : true,
        activeModal: state.modal
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    showVideo: () => dispatch(showModal('VIEW_VIDEO', ownProps))
});

const VideoItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieBlock);

export default VideoItem