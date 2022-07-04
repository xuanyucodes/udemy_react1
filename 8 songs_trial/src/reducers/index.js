import {combineReducers} from 'redux';

// job is to return a list of songs
const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        {title: 'I Want It That Way', duration: '1:45'}
    ];
};

// job is to return a selectedsong that was clicked on
// all actions will go through all reducers, but for this reducer, it only cares about the action type SONG_SELECTED, then we want to capture this new selected song
// other actions will be ignored
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

// the keys of this obj will be the keys in the state obj
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});