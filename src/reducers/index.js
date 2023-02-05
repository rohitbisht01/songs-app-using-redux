import { combineReducers } from "redux";
// reducers

const songReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "4:55" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want it that way", duration: "2:55" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export const rootReducer = combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
