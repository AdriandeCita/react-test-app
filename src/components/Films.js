import React    from 'react';
import './Films.css';
import VideoItem from "../containers/VideoItem";

const Films = ({ videos }) => {

    const offsetParamsSequence = videos.map(element => element.rating);
    const offsetEdgeTop = Math.max(...offsetParamsSequence);
    const offsetEdgeBottom = Math.min(...offsetParamsSequence);

    return (
        <div className="films-container">
            <div className="wrapper">
                {videos.map((video, index) =>
                    <VideoItem
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

export default Films;
