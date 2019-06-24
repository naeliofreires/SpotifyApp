/* eslint-disable no-console */
import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistsActions } from '../ducks/playlist';

export function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists');

    yield put(PlaylistsActions.getPlayListSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
