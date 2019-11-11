import React, { useContext } from "react";
import {
  LinkTitle,
  Heading,
  HeaderContainer,
  HeaderContent,
  LinksContainer
} from "../styles/HeaderStyles";
import Switch from "react-switch";
import { ThemeContext } from "../contexts/theme.context";
import Link from "../lib/withRouter";
function Header() {
  const { isDarkMode, changeTheme } = useContext(ThemeContext);
  return (
    <HeaderContainer>
      <HeaderContent>
        <Heading href='/'>
          Anime.<span>Chart</span>
        </Heading>
        <LinksContainer>
          {/* <WithRouter href='/anime?name=WINTER' as='/WINTER'>
            <LinkTitle>test</LinkTitle>
          </WithRouter> */}
          <Link href='/anime?name=WINTER' as='/WINTER'>
            <LinkTitle>WINTER</LinkTitle>
          </Link>
          <Link href='/anime?name=SPRING' as='/SPRING'>
            <LinkTitle>SPRING</LinkTitle>
          </Link>
          <Link href='/anime?name=SUMMER' as='/SUMMER'>
            <LinkTitle>SUMMER</LinkTitle>
          </Link>
          <Link href='/anime?name=FALL' as='/FALL'>
            <LinkTitle>FALL</LinkTitle>
          </Link>
          <Switch
            onChange={changeTheme}
            onHandleColor='#1E90FF'
            activeBoxShadow='none'
            onColor='#2C2C33'
            checked={isDarkMode}
            width={30}
            height={12}
            checkedIcon={false}
            uncheckedIcon={false}
            handleDiameter={16}
          />
          <span
            style={{
              color: "rgba(228, 228, 228,.8)",
              fontSize: "1.2rem",
              paddingLeft: "5px"
            }}>
            Dark Mode
          </span>
        </LinksContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
