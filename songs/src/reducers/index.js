import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'I want it that way', duration: '3:26' },
        { title: 'Orinoco Flow', duration: '6:04' },
        { title: 'b99', duration: '4:49' },
        { title: 'cardigan', duration: '3:54' }
    ];        
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
