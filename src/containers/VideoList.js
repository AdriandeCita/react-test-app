import { connect } from 'react-redux';
import { setVideoFilter } from '../actions';
import Films from '../components/Films';

const parseUniverseTime = (date) => {
    return parseInt(date) * (date.indexOf('BBY') >= 0 ? -1 : 1)
};

const sortFilms = (videos = [], sorter) => {
    switch (sorter) {
        case 'CHRONOLOGICAL':
            return videos.sort((prev, next) => {
                if (Date.parse(prev.release) > Date.parse(next.release)) {
                    return 1;
                }
                if (Date.parse(prev.release) < Date.parse(next.release)) {
                    return -1;
                }
                return 0;
            }).slice();
        case 'RELEASE_DATE':
        default:
            return videos.sort((prev, next) => {
                if (parseUniverseTime(prev.trivia.universeTimeline) > parseUniverseTime(next.trivia.universeTimeline)) {
                    return 1;
                }
                if (parseUniverseTime(prev.trivia.universeTimeline) < parseUniverseTime(next.trivia.universeTimeline)) {
                    return -1;
                }
                return 0;
            }).slice();
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        videos: sortFilms(ownProps.videos, state.videoSorter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCharacterClick: character => {
            dispatch(setVideoFilter(character))
        }
    }
};

const VideoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Films);

export default VideoList