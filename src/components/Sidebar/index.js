import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistActions } from '../../store/ducks/playlist';

import { Container, NewPlayList, Nav } from './styles';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {
  static propTypes = {
    getPlayList: PropTypes.func.isRequired,
    playlist: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ).isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { getPlayList } = this.props;

    getPlayList();
  }

  render() {
    const {
      playlist: { data: playlists },
    } = this.props;

    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <a href="#id">Rádio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="#id">Seu Daily Mix</a>
            </li>
            <li>
              <a href="#id">Tocados recentemente</a>
            </li>
            <li>
              <a href="#id">Musicas</a>
            </li>
            <li>
              <a href="#id">Álbums</a>
            </li>
            <li>
              <a href="#id">Artistas</a>
            </li>
            <li>
              <a href="#id">Estações</a>
            </li>
            <li>
              <a href="#id">Arquivos locais</a>
            </li>
            <li>
              <a href="#id">Vídeos</a>
            </li>
            <li>
              <a href="#id">Podcasts</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLISTS</span>
            </li>
            {playlists.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlist/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlayList>
          <img src={AddPlayListIcon} alt="adicionar playlist" />
          Nova Playlist
        </NewPlayList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlist: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
