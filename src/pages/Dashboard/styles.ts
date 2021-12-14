import styled from 'styled-components';

export const Main = styled.main`
  max-width: 800px;
  margin: 50px auto;

  font-family: 'Roboto', sans-serif;
  font-size: 1.2em;

  form {
    display: flex;
    align-items: center;
    margin-top: 30px;
  }

  input {
    font-size: 1em;
    height: 50px;
    border: none;
    padding: 20px;
    border-radius: 3px;
    width: 60%;
  }

  button {
    font-size: 1em;
    border: none;
    cursor: pointer;
    height: 50px;
    background: #222;
    color: #eee;
    border-radius: 3px;
    padding:0 20px;
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding-bottom: 50px;
`;

export const Films = styled.div`
  display: flex;  
  background: white;

  width: 800px;
  height: 400px;

  border-radius: 5px;
  box-shadow: 6px 6px #ddd;
  margin-bottom: 2em;

  div p, h3 {
    padding: 10px;
  }
`;