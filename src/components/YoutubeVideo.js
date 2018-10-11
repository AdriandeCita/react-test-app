import React, { Component } from 'react';
import YouTube from "react-youtube";
import "./YoutubeVideo.css";

class YoutubeVideo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            videoSrc: getVideoContent(this.props.video.media)
        };
    }

    beginPlaying = () => {
        this.setState({playing: true});
    };

    render() {

        if (this.state.videoSrc) {

            const videoId = this.state.videoSrc.split('?v=').slice(-1)[0];
            const opts = {
                height: '670',
                width: '1200',
                playerVars: {
                    autoplay: 1
                }
            };

            if (this.state.playing) {
                return (
                    <YouTube
                        videoId={videoId}
                        opts={opts}
                        onReady={this._onReady}
                    />
                )
            }

            return (
                <div className="player-wrapper" style={{height: `${opts.height}px`}}>
                    <div className="player-poster" style={{backgroundImage: `url("https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg")`}}>

                    </div>
                    <button onClick={this.beginPlaying} className="player-custom-controls">
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="#f8f7f8"/></svg>
                        <span className="caption">Play Trailer</span>
                    </button>
                </div>
            )
        }

        return '';
    }
}

const getVideoContent = (media) => {
    if (typeof media !== 'undefined') {
        for (let i = 0; i < media.length; i++) {
            if (media[i].type === 'youtube') {
                return media[i].src;
            }
        }
    }

    return null;
};

export default YoutubeVideo;
