
import styled from 'styled-components';

const SkeletonImg = styled.div`
height: 100%;
width: 100%;
background-color:#e8ecf0;

`;
const SkeletonHeader = styled.div`
background: #cad2db;
height: 71px;


`;
const SkeletonText = styled.div`
height: 150px;
margin: 10px 0;
padding: 15px;
`;
const SkeletonTextArea = styled.span`
height: 14px;
margin: 1rem 0;
background: #e8ecf0;
display: block;
width: ${props => props.width};
`;

const SkeletonFooter = styled.div`
height: calc(300px - 287px);
padding: 8px;
background-color: #cad2db;
`;

const TestingContainer = styled.div`

    ${SkeletonImg}{
        background-color:${props => props.isDark ? 'rgba(20,20,24,.3)' : '#e8ecf0'};
    }
    ${SkeletonFooter}{
        background-color:${props => props.isDark ? 'rgba(36,36,42,.9)' : '#cad2db'};
    }
    ${SkeletonHeader}{
        background-color:${props => props.isDark ? '#2c2c33' : '#cad2db'};
        border-bottom: 1px solid ${ props => props.isDark ? 'rgba(20,20,24,.3)' : '#e5e5e5'};

    }
    ${SkeletonTextArea}{
        background-color:${props => props.isDark ? 'rgba(20,20,24,.3)' : '#e8ecf0'};
    }

`;





export {SkeletonFooter,TestingContainer,SkeletonHeader,SkeletonImg,SkeletonText,SkeletonTextArea};