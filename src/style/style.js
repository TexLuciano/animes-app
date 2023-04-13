import styled from 'styled-components';

export const Lista = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  list-style: none;
  align-items: center;
  justify-items: center;
  gap: 2rem 1.5rem;
  margin: 100px 80px;
  padding: 0;
  opacity: 0;
  transform: translateX(-30px);
  animation: animeLeft 0.5s forwards;

  li {
    text-align: center;
    list-style: none;
    opacity: 0;
    transform: translateX(-30px);
    animation: animeLeft 0.5s forwards;
  }

  img {
    max-width: 100%;
    border-radius: 10px;
    background-color: black;
    border: solid;
    cursor: pointer;
  }

  h2 {
    text-align: center;
  }

  h5 {
    text-align: center;
    margin: 0;
    padding: 0;
    height: 60px;
    font-size: 1rem;
  }

  button {
    border-radius: 4px;
    padding: 2px;
    cursor: pointer;
    &:hover {
      background-color: #84af97;
    }
  }
  div {
    bottom: 0;
    width: 100%;
    height: 200px;
    padding: 1rem;
    background-color: rgba(212, 187, 163, 0.9);
    border-radius: 10rem 3rem 0 0;
    text-align: justify;
    display: none;
    transition: 0.5s;
    bottom: 80px;
    position: absolute;
  }
`;

export const Nav = styled.nav`
  background: black;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 60px;
  gap: 10px;

  input {
    width: 250px;
    height: 35px;
    align-self: center;
  }
  button {
    align-self: center;
  }
  h1 {
    background: black;
    color: #84af97;
    padding: 10px;
    font-size: 2rem;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    padding: 5px;
  }
  @media (max-width: 400px) {
    h1{
      font-size: 1.5rem;
    }
  }
`;
export const Favoritos = styled.ul`
  padding: 20px;
  position: relative;
  margin-left: 70px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: #000;
  animation: zoom 0.3s forwards;
  border-radius: 10px;
  margin-top: 30px;
  @keyframes zoom {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 900px) {
    margin-top: 15px;
    margin: 10px;
  }

  li {
    background: #000;
    list-style: none;
    display: grid;
    grid-template-columns: 300px, 50px;
    border-bottom: #daf3ea solid 0.1rem;
  }
  p {
    color: #84af97;
    max-width: 60ch;
    background: #000;
  }
  button {
    justify-self: end;
    grid-column: 2;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    &:hover {
      background-color: #c02c20;
    }
  }

  input {
    box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.4);
    background: #84af97;
    width: 40px;
    height: 40px;
    justify-self: end;
    border-radius: 50%;
    position: absolute;
    right: -20px;
    top: -20px;

    &:hover {
      background-color: #c02c20;
    }
  }
`;
export const Adicionado = styled.div`
  text-align: center;
  width: 200px;
  padding: 10px;
  border-radius: 7px;
  background: #cef781;
  position: absolute;
  margin-left: 80px;
  margin-top: 10px;
  z-index: 1;
  animation: zoom 0.3s forwards;
`;
