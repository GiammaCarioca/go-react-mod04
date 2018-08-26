import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://toomuchmusic.files.wordpress.com/2012/07/rihanna-rated-r.jpg"
        alt="Playlist"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Rainha do Pop</h1>
        <p>23 músicas</p>

        <button>PLAY</button>
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
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>The Last Song</td>
          <td>Rihanna</td>
          <td>Rated R</td>
          <td>4:16</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>The Last Song</td>
          <td>Rihanna</td>
          <td>Rated R</td>
          <td>4:16</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>The Last Song</td>
          <td>Rihanna</td>
          <td>Rated R</td>
          <td>4:16</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>The Last Song</td>
          <td>Rihanna</td>
          <td>Rated R</td>
          <td>4:16</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>The Last Song</td>
          <td>Rihanna</td>
          <td>Rated R</td>
          <td>4:16</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>The Last Song</td>
          <td>Rihanna</td>
          <td>Rated R</td>
          <td>4:16</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>The Last Song</td>
          <td>Rihanna</td>
          <td>Rated R</td>
          <td>4:16</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>The Last Song</td>
          <td>Rihanna</td>
          <td>Rated R</td>
          <td>4:16</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
