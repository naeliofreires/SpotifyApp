import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlaylistsActions } from '../ducks/playlist';
import { Types as PlaylisDetailsActions } from '../ducks/playlistDetail';

import { getPlaylists } from './playlists';
import { getPlaylistDetails } from './playlistDetails';

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsActions.GET_REQUEST, getPlaylists),
    takeLatest(PlaylisDetailsActions.GET_REQUEST, getPlaylistDetails),
  ]);
}
