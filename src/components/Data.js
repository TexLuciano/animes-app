import React, { useState } from 'react';

const Data = ({ data, loading, error, addFavorito }) => {
  const [mobile, setMobile] = useState(false)

function handleMobile(){
  setMobile(!mobile)
}
console.log(mobile);
  return (
    <>
      {data && data.data.length < 2 && <p>não encontrado</p>}
      {error && <p>{error}</p>}
      {loading && <div className="carregando"></div>}
      {data && (
        <ul className="container-grid">
          {data.data.map((item) => (
            <li  key={item.id}>
            <h5 className='title-anime'>{item.attributes.canonicalTitle}</h5>
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
              <div style={{display:'flex', alignSelf:'center'}}>
              <button
                className="add-favorito"
                value={item.attributes.canonicalTitle}
                onClick={addFavorito}
              >
                +Favorito
              </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Data;
