'use client';

import React, { createContext, useContext, useEffect } from 'react';
import useLocalStorageState from '@/hooks/useLocalStorageState';

const ThemeContext = createContext<{
    themeColor: string,
    setThemeColor: (v: string) => void,
    themeMode: string,
    setThemeMode: (v: string) => void,
}>({
    themeColor: "default",
    setThemeColor: () => {},
    themeMode: "light",
    setThemeMode: () => {},
})

const ThemeContextProvider = ({
    children,
} : {
    children: React.ReactNode,
}) => {
    const[themeColor, setThemeColor] = useLocalStorageState("default", "theme_color");
    const[themeMode, setThemeMode ] = useLocalStorageState("light", "theme_mode");

    useEffect(() => {
        let classNameList = [];
        document.body.classList.forEach(x => {
            if(!x.startsWith("theme-")) {
                classNameList.push(x);
            }
        });
        let themeClassName = "theme-" + themeColor + " theme-" + themeMode;
        classNameList.push(themeClassName);
        document.body.className = classNameList.join(" ");
    },
    [themeColor, themeMode]
    );

    return (
        <ThemeContext.Provider value={{themeColor, setThemeColor, themeMode, setThemeMode}}>
            {children}
        </ThemeContext.Provider>
    );
}

function useThemeContext() {
    const context = useContext(ThemeContext);
    if (context === undefined)
      throw new Error("ThemeContext was used outside of ThemeContextProvider");
    return context;
}

export {ThemeContextProvider, useThemeContext};