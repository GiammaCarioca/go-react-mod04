import React from 'react';

import { Container, Title, List, Playlist } from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist href="">
        <img
          src="https://toomuchmusic.files.wordpress.com/2012/07/rihanna-rated-r.jpg"
          alt="Playlist"
        />
        <strong>This is Rihanna</strong>
        <p>Os maiores sucessos de Rihanna</p>
      </Playlist>
      <Playlist href="">
        <img
          src="https://toomuchmusic.files.wordpress.com/2012/07/rihanna-rated-r.jpg"
          alt="Playlist"
        />
        <strong>This is Rihanna</strong>
        <p>Os maiores sucessos de Rihanna</p>
      </Playlist>
      <Playlist href="">
        <img
          src="https://toomuchmusic.files.wordpress.com/2012/07/rihanna-rated-r.jpg"
          alt="Playlist"
        />
        <strong>This is Rihanna</strong>
        <p>Os maiores sucessos de Rihanna</p>
      </Playlist>
      <Playlist href="">
        <img
          src="https://toomuchmusic.files.wordpress.com/2012/07/rihanna-rated-r.jpg"
          alt="Playlist"
        />
        <strong>This is Rihanna</strong>
        <p>Os maiores sucessos de Rihanna</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
