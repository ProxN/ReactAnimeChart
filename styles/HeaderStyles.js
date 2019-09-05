import styled from 'styled-components';
import sizes from '../helpers/Sizes';

const HeaderContainer = styled.div`
height: 64px;
background: #181a16;
`;
const HeaderContent = styled.div`
margin: 0 auto;
max-width: 1490px;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
${sizes.down('xs')}{
    justify-content: center;

  }
`;
const Heading = styled.a`
font-size: 2rem;
color: #fff;
text-transform: uppercase;
font-family: "Roboto";
text-decoration: none;
font-weight: 700;
span {
  color: #f1c40f;
  font-weight: 300;
}
${sizes.down('xs')}{
    display:none;

  }
`;
const LinkTitle = styled.a`
color: rgba(255,255,255,.7);
font-size: 1.4rem;
font-weight: 400;
cursor: pointer;
font-family: "Roboto";
margin: 0 14px;
transition:color .3s;
:hover{
  color: rgba(255,255,255,.9);

}
${sizes.down('xs')}{
    margin: 0 7px;
    font-size:1.3rem;

  }
`;

export {LinkTitle,Heading,HeaderContainer,HeaderContent};