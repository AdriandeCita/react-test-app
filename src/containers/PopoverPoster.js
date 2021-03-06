import {connect} from 'react-redux';
import PosterPopover from "../components/PosterPopover";
import {addPoster, hidePopover} from "../actions";

const mapStateToProps = (state, ownProps) => {
    if (state.popover.popoverType === 'ADD_POSTER') {
        return {
            popoverProps: state.popover.popoverProps,
            visible: true
        }
    } else {
        return {};
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    hidePopover: () => dispatch(hidePopover()),
    addPoster: (posterData) => dispatch(addPoster(posterData))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PosterPopover)