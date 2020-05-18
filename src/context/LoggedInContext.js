import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';

export const LoggedInContext = createContext();

export function LoggedInProvider(props) {
    const [isLoggedIn, toggleLoggedInState] = useToggleState(false);
    return (
        <LoggedInContext.Provider value={{isLoggedIn, toggleLoggedInState}}>
            {props.children}
        </LoggedInContext.Provider>
    )
}