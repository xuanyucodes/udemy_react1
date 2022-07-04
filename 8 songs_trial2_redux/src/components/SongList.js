import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends Component {
    
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            onClick={() => this.props.selectSong(song)}
                            className="ui button primary">Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    };

    render() {
        console.log("SongList running within render()", this.props);
        return (
            <div className="ui divided list">{this.renderList()}</div>
        )
    };
};

const mapStateToProps = (state) => {
    console.log("SongList running within mapStateToProps", state);
    return { songs: state.songs }; // return only the store's list of songs. 
    // if you run this.props in the component, will return exactly this.
    // this is how you get data out of the Redux store into React component 
};

export default connect(mapStateToProps, {selectSong: selectSong})(SongList);