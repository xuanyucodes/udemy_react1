// action creator - any time you wanna edit some state data, you MUST use an action and its creator!
export const selectSong = song => {
    // return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};