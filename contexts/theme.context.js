import React,{createContext,useState} from 'react';


export const ThemeContext = createContext();



export  function ThemeProvider(props){

    const [isDarkMode,setDarkMode] = useState(true);

    const changeTheme = () =>{
        setDarkMode(!isDarkMode);
    }

    return(

        <ThemeContext.Provider value={{isDarkMode,changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}