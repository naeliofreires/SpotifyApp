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
              <a href="">Navegar</a>
            </li>
            <li>
              <a href="">Rádio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="">Seu Daily Mix</a>
            </li>
            <li>
              <a href="">Tocados recentemente</a>
            </li>
            <li>
              <a href="">Musicas</a>
            </li>
            <li>
              <a href="">Álbums</a>
            </li>
            <li>
              <a href="">Artistas</a>
            </li>
            <li>
              <a href="">Estações</a>
            </li>
            <li>
              <a href="">Arquivos locais</a>
            </li>
            <li>
              <a href="">Vídeos</a>
            </li>
            <li>
              <a href="">Podcasts</a>
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
