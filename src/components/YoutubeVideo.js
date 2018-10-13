import React, { Component } from 'react';
import YouTube from "react-youtube";
import "./YoutubeVideo.css";
import ButtonRound from "./ButtonRound";

class YoutubeVideo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            rendered: false,
            videoSrc: getVideoContent(this.props.video.media)
        };
    }

    beginPlaying = () => {
        this.setState({playing: true});
    };

    componentDidMount = () => {
        if (this.state.videoSrc) {
            this.props.successRender();
        }
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
                    <div
                        className="player-poster"
                        style={{backgroundImage: `url("https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg")`}}>
                    </div>
                    <ButtonRound
                        onClick={this.beginPlaying}
                        type="play"
                        customClassName="player-custom-controls"
                        caption="Play Trailer"
                    />
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
