import { combineReducers } from 'redux';

import playlists from './playlist';
import playlistsDetails from './playlistDetail';

export default combineReducers({
  playlists,
  playlistsDetails,
});
