import { connect } from 'react-redux'
import { setVideoFilter, setVideoOrder } from '../actions'
import Films from '../components/Films'
​
const getFilteredFilms = (videos, filter) => {
    return filter ? videos.map() : videos
}

const sortFilms = (videos, sorter) => {
    switch (sorter) {
        case 'RELEASE_DATE':
            return videos;
        case 'CHRONOLOGICAL':
            return videos;
    }
}
​
const mapStateToProps = state => {
    return {
        videos: getFilteredFilms(
            sortFilms(state.videos, state.videoSortType),
            state.characterFilter
        )
    }
}
​
const mapDispatchToProps = dispatch => {
    return {
        onSortTypeClick: sortType => {
            dispatch(setVideoOrder(sortType))
        },
        onCharacterClick: character => {
            dispatch(setVideoFilter(character))
        }
    }
}
​
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Films)
​
export default VisibleTodoList