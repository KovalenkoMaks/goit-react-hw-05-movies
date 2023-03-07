import styled from '@emotion/styled';

const FilmListEl = styled.ul`
  list-style: none;
`;
const FilmItem = styled.li`
  position: relative;

  a {
    @media screen and (min-width: 768px) {
      &:hover::after,
      &:focus::after {
        content: '';
        background-image: ${props => `url('${props.children.props.cover}')`};
        background-size: cover;
        width: 160px;
        height: 200px;
        display: block;
        border-radius: 4px;
        border: 1px solid rgba(43, 134, 197);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 50;
        left: 400px;
        z-index: 1;
      }
    }
  }
`;
export { FilmListEl, FilmItem };
