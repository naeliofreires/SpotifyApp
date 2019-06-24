import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlaylistsActions } from '../ducks/playlist';

import { getPlaylists } from './playlists';

export default function* rootSaga() {
  yield all([takeLatest(PlaylistsActions.GET_REQUEST, getPlaylists)]);
}
