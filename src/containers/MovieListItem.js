import {connect} from 'react-redux';
import MovieListItem from "../components/MovieListItem";
import {setActiveVideo, showModal} from "../actions";

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
    showVideo: (video) => {
        dispatch(setActiveVideo(video));
        dispatch(showModal('VIEW_VIDEO', ownProps));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieListItem);