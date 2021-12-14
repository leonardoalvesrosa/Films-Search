import React from 'react';
import { api } from '../../services/api';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { Main, Container, Films } from './styles';

const Dashboard: React.FC = () => {

  interface IFilm {
    Poster: string,
    Title: string,
    Year: string,
    Runtime: string,
    Genre: [string],
    Actors: [string],
    Plot: string
  }

  const [newFilm, setNewFilm] = React.useState('');

  const [film, setFilm] = React.useState<IFilm[]>([]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setNewFilm(event.target.value)
  }

  async function handleAddRepo(event: React.FormEvent<HTMLFormElement>,): Promise<void> {

    event.preventDefault();

    try {
      // const response = await api.get<IFilm>(`t=${newFilm}`);
      const response = await api.get<IFilm>(`&t=${newFilm}`)
      const aux = response.data;

      await setFilm([...film, aux]);
    }
    catch {
      console.log(`Filme não encontrado`)
    }

  }


  return (
    <>
      <Header />



      <Main>
        <h2>Pesquise abaixo seu filme favorito...</h2>
        <form onSubmit={handleAddRepo}>
          <input type="text" onChange={handleInputChange} />
          <button type="submit">Buscar</button>
        </form>

        <Container>
          {
            ((film) &&
              film.map((item, indice) => (
                <Films>
                  <img src={item.Poster} />
                  <div>
                    <h3>{item.Title}</h3>
                    <p>{item.Year}</p>
                    <p>{item.Runtime}</p>
                    <p>{item.Genre}</p>
                    <p>{item.Actors}</p>
                    <p>{item.Plot}</p>
                  </div>
                </Films>
              )))
          }
        </Container>


      </Main>

      <Footer />
    </>
  )
}

export default Dashboard;