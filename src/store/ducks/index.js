import { combineReducers } from 'redux';

import error from './error';
import player from './player';
import playlists from './playlist';
import playlistsDetails from './playlistDetail';

export default combineReducers({
  error,
  player,
  playlists,
  playlistsDetails,
});
