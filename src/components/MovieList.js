import React    from 'react';
import './MovieList.css';
import MovieListItemContainer from "../containers/MovieListItem";

const MovieList = ({videos, onContainerDoubleClick}) => {

    const offsetParamsSequence = videos.map(element => element.rating);
    const offsetEdgeTop = Math.max(...offsetParamsSequence);
    const offsetEdgeBottom = Math.min(...offsetParamsSequence);

    return (
        <div
            className="films-container"
            onDoubleClick={onContainerDoubleClick}
        >
            <div className="wrapper">
                {videos.map((video, index) =>
                    <MovieListItemContainer
                        video={video}
                        key={index}
                        offsetTop={calculateOffsetTop(offsetEdgeTop, offsetEdgeBottom, video.rating)}
                    />
                )}
            </div>
        </div>
    )
};

const calculateOffsetTop = (top, bottom, current) => {
    return ((top - current) / ((top - bottom) / 100));
};

export default MovieList;
