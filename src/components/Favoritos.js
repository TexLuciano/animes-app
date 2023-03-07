import React from 'react';
import { Favoritos, Adicionado } from '../style/style';

export const FavoritosList = ({
  favorito,
  setFavorito,
  modalFavorito,
  setModalFavorito,
  setAdicionado,
  adicionado
}) => {
  function closeModal() {
    setModalFavorito(false);
  }

  const apagarAnime = (id) => {
    const att = favorito.filter((item) => id !== item.id);
    setFavorito(att);
  };

  return (
    <>
      {modalFavorito ? (
        <Favoritos ativo={modalFavorito}>
          <li>
            <input type="button" value="x" onClick={closeModal} />
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
   
      {adicionado && <Adicionado>Favorito Adicionado</Adicionado>}
    </>
  );
};
