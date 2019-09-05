import styled from "styled-components";

import sizes from '../helpers/Sizes';

const AnimeHeader = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  color: #333;
  padding: 15px;
  height: 40px;
  
`;
const AnimeDesc = styled.div`
  height: 150px;
  overflow-y: hidden;
  padding: 15px;
  font-size: 1.3rem;
  margin: 10px 0;
`;
const GridCell = styled.div`
  grid-column-start: ${props => props.left};
  grid-row-start: ${props => props.top};
`;
const Span = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: ${props => (props.blue ? "#1e90ff" : "#6e859e")};
  
`;
const TimeCount = styled.span`
  font-size: 18px;
  display: block;
  font-weight: 500;
  
  color: #6e859e;
  ${sizes.down('xs')}{
    font-size:15px;
   
  }
`;

const AnimeHeaderContent = styled.div`
  ${sizes.down('xs')}{
    grid-column: 1 / -1;
  }
`;

const AnimeGenres = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  justify-content: center;
  color: #333;
  height: calc(300px - 287px);
`;
const DropDown = styled(GridCell)`
  background: white;
  align-self: flex-start;
  justify-self: flex-end;
  margin: 10px;
  z-index: 10;
  width: 150px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  ul {
    list-style: none;
    transition: all .4s;
  }
`;

const AnimeContainer = styled.div`
  display: grid;
  width: 460px;
  height: 300px;
  grid-template-columns: 180px auto;
  background-color: ${props => props.isDark ? '#2c2c33' : 'rgb(255, 255, 255)'};
  /* box-shadow: 0 5px 10px rgba(#000, 0.1); */
  box-shadow: ${props => props.isDark ? 'box-shadow: 3px 6px 21px -7px rgba(0,0,0,1)' : 'rgba(190, 190, 190, 0.5) 0px 2px 2px 0px'};
  border-radius: 3px;
  
  ${DropDown}{
    background-color: ${props => props.isDark ? '#2c2c33' : 'rgb(255, 255, 255)'};
    color:${props => props.isDark ? 'rgba(228, 228, 228,.8)' :'#333' };
  }
  ${AnimeHeader}{
  border-bottom: 1px solid ${ props => props.isDark ? 'rgba(20,20,24,.3)' : '#e5e5e5'};

  }
  ${AnimeGenres}{
    background-color:${props => props.isDark ? 'rgba(36,36,42,.9)' : 'rgba(41, 41, 41, 0.9)'};
  }
${AnimeDesc},${Span},${TimeCount}{
    color : ${props => props.isDark ? 'rgba(228, 228, 228,.8)' : '#6e859e'}
  }
  ${sizes.down('lg')}{
    width: 68rem;
   
  }
  ${sizes.down('sm')}{
    width: 50rem;
   
  }
  ${sizes.down('xs')}{
    width: 39rem;   
  }
  ${sizes.down('xs1')}{
    width: 31rem;
    grid-template-columns: 140px auto;

  }
`;


const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Overlay = styled(GridCell)`
  overflow: hidden;
  align-self: flex-end;
  padding: 10px;
  background-color: rgba(41, 41, 41, 0.9);
  width: 160px;
  z-index:20;
  a {
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    font-size: 1.4rem;
    font-family: "Roboto", sans-serif;

    display: block;
  }
  ${sizes.down('xs1')}{
    width: 31rem;
    width: 120px;

  }
`;
const Studio = styled.div`
  margin-top: 5px;
  a {
    color: #1e90ff;
  }
`;
const AnimeRank = styled(GridCell)`
  span {
    background-color: rgba(41, 41, 41, 0.9);
    padding: 3px 10px;
    margin: 10px 10px 5px 10px;

    width: 40px;
    height: 15px;
    border-radius: 20em;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;

    font-weight: 500;
    svg {
      margin-right: 5px;
      color: #ff4757;
    }
  }
`;




const AnimeTrailer = styled.div`
  grid-column: 2 / -1;
  height: 50px;
  position: relative;
  cursor: pointer;
  border-radius: 2px;
  ${sizes.down('xs')}{
    display:none;
   
  }
  img {
    border-radius: 2px;
  }
  svg {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 30px;
    color: rgba(255, 255, 255, 0.9);
  }
`;


const ListItem = styled.li`
  display: inline-block;
  margin-right: 10px;
  font-size: 1.2rem;
  font-weight:400;
  color: #eff7fb;
  padding:1px 5px;
  border:1px dashed ${props => props.color};
`;
const AddIcon = styled(GridCell)`
  color: #fff;
  justify-self: flex-end;
  /* border:1px solid #6e859e; */
  align-self: flex-start;
  transform: translate(50%, -50%);
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.color};
  font-size: .8rem;
  cursor: pointer;
`;


const DropDownItem = styled.li`
  font-size: 13px;
  color: inherit;
  padding: 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.4s;
  padding: 6px 10px;
  :hover{
      background:#1e90ff;
      color:#fff;
  }

  svg {
    padding: 5px;
    border-radius: 50%;
    background: ${props => props.color};
    font-size: 10px;
    color: white;
    margin-right: 8px;
  }
`;

export {
  GridCell,
  AnimeContainer,
  AnimeDesc,
  AnimeGenres,
  AnimeHeader,
  Overlay,
  DropDown,
  AddIcon,
  ListItem,
  TimeCount,
  Span,
  Studio,
  AnimeRank,
  AnimeTrailer,
    Img,
  DropDownItem,
  AnimeHeaderContent
};
