import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<{user: string}|undefined>(undefined);


export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <ThemeContext.Provider value={{user: 'Abass'}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
