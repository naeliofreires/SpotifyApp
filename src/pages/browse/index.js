import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browser = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlist/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Rock</strong>
        <p>Venha curtir um pouco de rock!</p>
      </Playlist>

      <Playlist to="/playlist/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Rock</strong>
        <p>Venha curtir um pouco de rock!</p>
      </Playlist>

      <Playlist to="/playlist/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Rock</strong>
        <p>Venha curtir um pouco de rock!</p>
      </Playlist>

      <Playlist to="/playlist/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Rock</strong>
        <p>Venha curtir um pouco de rock!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browser;
