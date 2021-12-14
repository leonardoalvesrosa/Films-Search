import styled from 'styled-components';

export const Menu = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  font-family: 'Roboto', sans-serif;
  font-size: 1.2em;

  background-color: #03071e;
  color: white;
  height: 80px;
  align-items: center;

  padding: 0 3em;

  span {
    font-size: 2em;
    font-weight: bold;
    cursor: pointer;
  }

  nav ul{
    display: flex;
    text-decoration: none;
    list-style: none;
  }

  nav ul li {
    margin-right: 2.5em;
    cursor: pointer;
  }

`;