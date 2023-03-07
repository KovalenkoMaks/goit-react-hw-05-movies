import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  gap: 40px;
  margin: 40px;

  &::after {
    content: '';
    position: fixed;
    top: 0px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100vh + 10px);
    background-image: ${props => {
      // console.log(props);
      return `url(${props.children[0].props.src})`;
    }};
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: blur(5px);
    z-index: -1;
    opacity: 0.35;
  }

  img {
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 10px;
    align-self: flex-start;
  }
`;

const LinkContainer = styled.div`
  font-size: 20px;
  display: flex;
  gap: 30px;
  padding: 20px;

  a {
    text-decoration: none;
    color: black;
  }
`;

export { Container, LinkContainer };
// url(../images/bg/headermobale-bgi.jpg)
