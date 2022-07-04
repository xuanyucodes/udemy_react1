import {combineReducers} from 'redux';

// retuurns list of songs
const songsReducers = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        {title: 'I Want It That Way', duration: '1:45'}
    ];
};

// returns info about a selected song
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducer
});