import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/theme.context';

function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? '#1c1c21' : '#F0F0F0',
        minHeight: 'calc(100vh - 64px)',
      }}>
      {props.children}
    </div>
  );
}

export default PageContent;
