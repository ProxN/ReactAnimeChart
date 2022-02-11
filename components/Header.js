import React, { useContext } from 'react';
import NextLink from 'next/link';
import {
  LinkTitle,
  Heading,
  HeaderContainer,
  HeaderContent,
  LinksContainer,
} from '../styles/HeaderStyles';
import Switch from 'react-switch';
import { ThemeContext } from '../contexts/theme.context';

function Header() {
  const { isDarkMode, changeTheme } = useContext(ThemeContext);
  return (
    <HeaderContainer>
      <HeaderContent>
        <Heading href="/">
          Anime.<span>Chart</span>
        </Heading>
        <LinksContainer>
          <NextLink href="/winter">
            <LinkTitle>Winter</LinkTitle>
          </NextLink>
          <NextLink href="/spring">
            <LinkTitle>Spring</LinkTitle>
          </NextLink>
          <NextLink href="/summer">
            <LinkTitle>Summer</LinkTitle>
          </NextLink>
          <NextLink href="/fall">
            <LinkTitle>Fall</LinkTitle>
          </NextLink>

          <Switch
            onChange={changeTheme}
            onHandleColor="#1E90FF"
            activeBoxShadow="none"
            onColor="#2C2C33"
            checked={isDarkMode}
            width={30}
            height={12}
            checkedIcon={false}
            uncheckedIcon={false}
            handleDiameter={16}
          />
          <span
            style={{
              color: 'rgba(228, 228, 228,.8)',
              fontSize: '1.2rem',
              paddingLeft: '5px',
            }}>
            Dark Mode
          </span>
        </LinksContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
