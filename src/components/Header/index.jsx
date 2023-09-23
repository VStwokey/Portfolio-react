import styled from 'styled-components';
import './header.css'

const NavEstilizada = styled.nav `
    display: grid;
`

const Header = () => {
  return (
    <>
      <NavEstilizada>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Sobre mim</a>
          </li>
          <li>
            <a href="">Habilidades</a>
          </li>
          <li>
            <a href="">Projetos</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </NavEstilizada>
    </>
  );
};

export default Header;
