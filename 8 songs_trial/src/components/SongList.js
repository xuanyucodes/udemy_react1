import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    };

    render() {
        console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

// basically whatever info from the store you need, you get it via mSTP by passing it as a prop into the component
// state contains all the data inside the redux store. any time a change is made, mapStateTP will rerun with the newly created state obj
const mapStateToProps = (state) => {
    console.log(state);
    return {songs: state.songs};
}

// create an instance of Connect() component (this is actually a React component!) to tell Provider to retrieve the list of songs
// mapStateToProps helps to scoop up all the states from the central repository store (via Provider) and returns them / the needed ones as props to SongList
// it also returns a dispatch() function that it will autorun, to dispatch an action after calling an action creator. dispatch() is used to change some data inside store by passing in an action.
// we are passing the action creator fn selectSong via connect() because it will turn the action into a prop to be inserted into SongList, and when called, will help us call dispatch() on the action creator and effect any changes.
// if we do not pass as such, the output result will not be communicated to the central repository store. (altho this can be fixed by directly calling dispatch())
export default connect(mapStateToProps, {selectSong: selectSong})(SongList);