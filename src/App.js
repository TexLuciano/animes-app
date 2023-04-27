import { useState, useEffect } from 'react';
import './App.css';
import useFetch from './CustomHooks/useFech';
import Pagination from './components/Pagination';
import qs from 'qs';
import Catogorias from './components/Catogorias';
import NavBar from './components/Navbar';
import { FavoritosList } from './components/Favoritos';
import Data from './components/Data';

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

  const LIMIT = 14;
  const query = {
    page: {
      limit: LIMIT,
      offset,
    },
  };

 


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

  useEffect(() => {
    if (favorito) localStorage.setItem('anime', JSON.stringify(favorito));
  }, [favorito]);

  return (
    <div style={{  background: "#daf3ea"}}>
      <NavBar setText={setText} text={text} mobile={mobile} setMobile={setMobile}/>
      <div className={mobile ? 'menu-mobile' : 'btns'}>
        <button className="favoritos-btn " onClick={modal}>
          Favoritos
        </button>
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
