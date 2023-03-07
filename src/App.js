import { useState, useEffect } from 'react';
import './App.css';
<<<<<<< HEAD
import useFetch from './CustomHooks/useFech';
import Pagination from './components/Pagination';
import qs from 'qs';
import Catogorias from './components/Catogorias';
import NavBar from './components/Navbar';
import { FavoritosList } from './components/Favoritos';
import Data from './components/Data';
=======
import Search from './components/Search';
import useFetch from './CustomHooks/useFech';
import { Nav, Favoritos, Adicionado } from './style/style';
import logo from './img/icone.PNG';
import Pagination from './components/Pagination';
import qs from 'qs';
import hambuguer from './img/hamburger.png';
import Catogorias from './components/Catogorias';
import x from './img/x.png';
>>>>>>> 3ffbb6d9a7d794d4a3854b9379901fdd0f6809a1

const getDatafromLS = () => {
  const data = localStorage.getItem('anime');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function App() {
  const [text, setText] = useState('');
  const { data, loading, error, request } = useFetch();
  const [categoria, setCategoria] = useState(null);
  const [offset, setOffset] = useState(0);
  const [favorito, setFavorito] = useState(getDatafromLS());
  const [modalFavorito, setModalFavorito] = useState(false);
  const [adicionado, setAdicionado] = useState(false);
  const [mobile, setMobile] = useState(false);

<<<<<<< HEAD
  const LIMIT = 14;
=======
  const LIMIT = 12;
>>>>>>> 3ffbb6d9a7d794d4a3854b9379901fdd0f6809a1
  const query = {
    page: {
      limit: LIMIT,
      offset,
    },
  };

<<<<<<< HEAD
 

  console.log(data);
=======
  const apagarAnime = (index) => {
    const att = favorito.filter((item) => index !== item.id);
    setFavorito(att);
  };

console.log(data)
>>>>>>> 3ffbb6d9a7d794d4a3854b9379901fdd0f6809a1
  useEffect(() => {
    if (text) {
      query.filter = {
        text,
      };
    }

    request(`https://kitsu.io/api/edge/anime?${qs.stringify(query)}`);
  }, [request, text, offset]);

  useEffect(() => {
    if (categoria) {
      query.filter = {
        categories: categoria,
      };

      request(`https://kitsu.io/api/edge/anime?${qs.stringify(query)}`);
    }
  }, [request, categoria]);

  function modal() {
    setModalFavorito((modalFavorito) => !modalFavorito);
  }

  function addFavorito({ target }) {
    itemAdicionado();
    const novoAnime = { id: Math.random() * 100, name: target.value };
    setFavorito([...favorito, novoAnime]);
  }

  function itemAdicionado() {
    setTimeout(() => {
      setAdicionado(false);
    }, 1000);
    setAdicionado(true);
  }

<<<<<<< HEAD
=======
  function retorna() {
    if (offset !== 0) {
      setOffset((offset) => (offset = 0));
    }
  }

>>>>>>> 3ffbb6d9a7d794d4a3854b9379901fdd0f6809a1
  useEffect(() => {
    if (favorito) localStorage.setItem('anime', JSON.stringify(favorito));
  }, [favorito]);

  return (
    <div>
<<<<<<< HEAD
      <NavBar setText={setText} text={text} />
=======
      <Nav>
        <img src={logo} alt="logo" className="clicavel" onClick={retorna} />
        <Search value={text} onChange={(str) => setText(str)} />
        <button className="close-btn" onClick={() => setMobile(!mobile)}>
          <img className="close-img" src={mobile ? x : hambuguer} alt="" />
        </button>
      </Nav>
>>>>>>> 3ffbb6d9a7d794d4a3854b9379901fdd0f6809a1
      <div className={mobile ? 'menu-mobile' : 'btns'}>
        <button className="favoritos-btn " onClick={modal}>
          Favoritos
        </button>
<<<<<<< HEAD
        <Catogorias setCategoria={setCategoria} />
      </div>
      <FavoritosList
        favorito={favorito}
        setFavorito={setFavorito}
        modalFavorito={modalFavorito}
        setModalFavorito={setModalFavorito}
        adicionado={adicionado}
        setAdicionado={setAdicionado}
      />
      <Data data={data} loading={loading} error={error} addFavorito={addFavorito}/>
=======

        <Catogorias setCategoria={setCategoria} />
      </div>
      {adicionado && <Adicionado>Favorito Adicionado</Adicionado>}
      {modalFavorito ? (
        <Favoritos ativo={modalFavorito}>
          <li>
            <input type="button" value="x" onClick={modal} />
          </li>
          {favorito && favorito.length ? (
            favorito.map((item) => (
              <li key={item.id}>
                <p>{item.name}</p>
                <button onClick={() => apagarAnime(item.id)}>x</button>
              </li>
            ))
          ) : (
            <p>Você não tem Favoritos </p>
          )}
        </Favoritos>
      ) : null}

      {data && data.data.length < 2 && <p>não encontrado</p>}
      {error && <p>{error}</p>}
      {loading && <div className="carregando"></div>}
      {data && (
        <ul className="container-grid">
          {data.data.map((item) => (
            <li key={item.id}>
              <h5>{item.attributes.canonicalTitle}</h5>
              <div className="anime-info">
                <div className="overlay">
                  <p className="synopsis">
                    ➤Inicio:{item.attributes.startDate}
                    <br />
                    ➤Fim:
                    {item.attributes.endDate ? item.attributes.endDate : '?'}
                    <br />
                    <br />➤{item.attributes.description}
                  </p>
                </div>
                <img
                  src={item.attributes.posterImage.small}
                  alt={item.attributes.canonicalTitle}
                />
              </div>

              <button
                className="add-favorito"
                value={item.attributes.canonicalTitle}
                onClick={addFavorito}
              >
                +Favorito
              </button>
            </li>
          ))}
        </ul>
      )}

>>>>>>> 3ffbb6d9a7d794d4a3854b9379901fdd0f6809a1
      {}
      {data && data.meta ? (
        <Pagination
          data={data.meta}
          limit={LIMIT}
          total={data.meta.count}
          offset={offset}
          setOffset={setOffset}
        />
      ) : null}
    </div>
  );
}

export default App;
