import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Menu } from './style';

export const Header: React.FC = () => {
  return (
    <Menu>

      <span>FILMS</span>

      <nav>
        <ul>
          <li>Filmes</li>
          <li>Documentários</li>
          <li>Séries</li>
          <li>Animes</li>
        </ul>
      </nav>
    </Menu>
  )
}