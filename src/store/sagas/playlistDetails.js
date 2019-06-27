/* eslint-disable no-console */
import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetail';
import { Creators as ErrorActions } from '../ducks/error';

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlaylistDetailsActions.getplaylistDetailsSuccess(response.data));
  } catch (error) {
    yield put(ErrorActions.setError('Não foi possivel obter os detalhes da playlist'));
  }
}
