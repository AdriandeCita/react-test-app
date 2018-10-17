import {connect} from 'react-redux'
import {setVideoFilter} from '../actions'
import FilterByCharacterItem from "../components/FilterByCharacterItem";

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.character.id === state.videoCharacterFilter,
        activeModal: state.modal
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVideoFilter(ownProps.character.id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterByCharacterItem)
