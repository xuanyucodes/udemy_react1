import { map } from 'lodash';
import React from 'react';
import flv from 'flv.js';
import {connect} from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {

    // for FLV ref
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchStream(id)

        // only if you want player
        this.buildPlayer(); // attempt to build player
    }

    componentDidUpdate() { // if component is updated and rerenders, build player again. cos right now all the buildPlayer is in cDM() only.
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }
    
    buildPlayer() { // to show the video player
        if (this.player || !this.props.stream) { // if player is already built OR do not have the stream, return none
            return;
        }
        // flv player. not necessary this below part if you dont want video.
        const {id} = this.props.match.params;
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {
        if (!this.props.stream) { return <div>Loading...</div> }

        const {title, description} = this.props.stream;
        return (
            <div>
                <video ref={this.videoRef} style={{width: '100%'}} controls/>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);