import { combineReducers } from 'redux';

import error from './error';
import playlists from './playlist';
import playlistsDetails from './playlistDetail';

export default combineReducers({
  error,
  playlists,
  playlistsDetails,
});
