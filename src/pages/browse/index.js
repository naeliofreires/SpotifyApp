import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistActions } from '../../store/ducks/playlist';

import Loading from '../../components/Loading';

import {
  Container, Title, List, Playlist,
} from './styles';

class Browser extends Component {
  static propTypes = {
    getPlayList: PropTypes.func.isRequired,
    playlist: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          thumbnail: PropTypes.string,
          description: PropTypes.string,
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
      playlist: { data, loading },
    } = this.props;

    return (
      <Container>
        <Title>
          Navegar
          {loading && <Loading />}
        </Title>

        <List>
          {data.map(play => (
            <Playlist key={play.id} to={`/playlist/${play.id}`}>
              <img src={play.thumbnail} alt="Playlist" />
              <strong>{play.title}</strong>
              <p>{play.description}</p>
            </Playlist>
          ))}
        </List>
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
)(Browser);
