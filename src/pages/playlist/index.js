import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as playlistDetailActions } from '../../store/ducks/playlistDetail';
import { Creators as playerActions } from '../../store/ducks/player';

import Loading from '../../components/Loading';

import {
  Container, Header, SongList, SongItem,
} from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({}),
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    getplaylistDetailsRequest: PropTypes.func.isRequired,
    loadSong: PropTypes.func.isRequired,
    currentSong: PropTypes.shape({
      status: PropTypes.bool.isRequired,
    }).isRequired,
  };

  state = {
    selectedSong: null,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    if (prevProps.match.params.id !== id) this.loadPlaylistDetails();
  }

  loadPlaylistDetails = () => {
    const {
      match: {
        params: { id },
      },
      getplaylistDetailsRequest,
    } = this.props;

    getplaylistDetailsRequest(id);
  };

  renderDetails = () => {
    const {
      loadSong,
      playlistDetails: { data },
    } = this.props;

    return (
      <Container>
        <Header>
          <img src={data.thumbnail} alt="Playlist" />

          <div>
            <span>PLAYLIST</span>
            <h1>{data.title}</h1>
            {!!data.songs && <p>{`${data.songs.length} musicas`}</p>}
            <button type="button">Play</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Título</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th>
              <img src={ClockIcon} alt="Duração" />
            </th>
          </thead>
          <tbody>
            {!data.songs ? (
              <tr>
                <td colSpan="5">Nenhuma musica cadastrada :(</td>
              </tr>
            ) : (
              data.songs.map(music => (
                <SongItem
                  key={music.id}
                  onDoubleClick={() => loadSong(music)}
                  onClick={() => this.setState({ selectedSong: music.id })}
                  selected={this.state.selectedSong === music.id}
                  playing={this.props.currentSong && this.props.currentSong.id === music.id}
                >
                  <td>
                    <img src={PlusIcon} alt="Adicionar" />
                  </td>
                  <td>{music.title}</td>
                  <td>{music.author}</td>
                  <td>{music.album}</td>
                  <td>00:00</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    const {
      playlistDetails: { loading },
    } = this.props;

    return loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistsDetails,
  currentSong: state.player.currentSong,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...playlistDetailActions,
    ...playerActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
