import React from 'react'
const Catogorias = ({setCategoria}) => {
  
  const alfa = ['adventure', 'action', 'comedy', 'drama', 'mystery', 'romance	'];

  function letrass({ target }) {
    setCategoria(target.value);
  }

  return (
    <>
    {alfa.map((categoria) => (
      <button
        className="anima-button"
        key={categoria}
        value={categoria}
        onClick={letrass}
      >
        {categoria}
      </button>
    ))}
  </>
  )
}

export default Catogorias