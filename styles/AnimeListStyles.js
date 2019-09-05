import styled from "styled-components";

import sizes from '../helpers/Sizes';


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 46rem);
  justify-content: center;
  grid-column-gap: 50px;
  grid-row-gap: 30px;
  grid-template-rows: ${props => props.tRow};
  padding-top: 30px;
  padding-bottom: 30px;

  ${sizes.down('lg')}{
    grid-template-columns: repeat(auto-fit, 68rem);
  }
  ${sizes.down('sm')}{
    grid-template-columns: repeat(auto-fit, 50rem);
  }
  ${sizes.down('xs')}{
    grid-template-columns: repeat(auto-fit, 39rem);
  }
  ${sizes.down('xs1')}{
    grid-template-columns: repeat(auto-fit, 31rem);
  }
`;

const Heading = styled.h2`
  font-size: 2.4rem;
  color: ${props => props.isDark ? '#fff' : '#333'};
  grid-row: 1 /2;
  grid-column: 1 / -1;
  position: relative;
  padding-left: 2.4rem;
  line-height: 2.4rem;
  ::before {
    content: "";
    position: absolute;
    background: #1e90ff;
    height: 4px;
    width: 20px;
    top: 50%;

    left: 0;
  }
`;
export { Container, Heading };
