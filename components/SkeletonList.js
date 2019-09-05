import React,{useContext} from 'react';
import Skeleton from './Skeleton';
import {Container} from '../styles/AnimeListStyles';
import {ThemeContext} from '../contexts/theme.context';


function SkeletonList({maxSkeleton}){
    const {isDarkMode} = useContext(ThemeContext);

    let sk = [];
    for(let i = 0; i < maxSkeleton;i++){
        sk.push(<Skeleton isDark={isDarkMode} key={i} />);
    }

    return(
        <Container  style={{paddingTop:isDarkMode ? '60px' : '80px' }} tRow='none'>
            {sk}
        </Container>
    )

}

export default SkeletonList;