import React, {Component} from 'react';
import YouTube from "react-youtube";
import "./YoutubeVideoView.css";
import ModalButtonRound from "./ModalButtonRound";

class YoutubeVideoView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            rendered: false,
            videoSrc: this.props.video,
            videoId: this.props.video.split('?v=').slice(-1)[0],
            opts: {
                height: '670',
                width: '1200',
                playerVars: {
                    autoplay: 1,
                }
            }
        };
    }

    beginPlaying = () => {
        this.setState({playing: true});
    };

    render() {

        if (this.state.playing) {
            return (
                <div className="player-wrapper">
                    <YouTube
                        videoId={this.state.videoId}
                        opts={this.state.opts}
                    />
                </div>
            )
        }

        return (
            <div className="player-wrapper">
                <div
                    className="player-poster"
                    style={{backgroundImage: `url("https://i.ytimg.com/vi/${this.state.videoId}/maxresdefault.jpg")`}}>
                </div>
                <ModalButtonRound
                    onClick={this.beginPlaying}
                    type="play"
                    customClassName="player-custom-controls"
                    caption="Play Trailer"
                />
            </div>
        );
    }
}

export default YoutubeVideoView;
