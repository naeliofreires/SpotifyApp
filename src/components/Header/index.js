import React from 'react';

import { Container, Search, User } from './style';

const Header = () => (
  <Container>
    <Search>
      <input type="text" placeholder="Search" />
    </Search>
    <User>
      <img src="https://avatars0.githubusercontent.com/u/16665625?v=4" alt="Avatar" />
      Naélio Freires
    </User>
  </Container>
);

export default Header;
