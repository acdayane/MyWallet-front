import React from "react";
import { createContext, useContext, useState } from "react";

const DataContext = createContext(); 

export default function DataProvider({children}){ 

    const [userPhoto, setUserPhoto] = useState(null);
    const [token, setToken] = useState(null);

    return (
        <DataContext.Provider value={{userPhoto, setUserPhoto, token, setToken}}> 
            {children}
        </DataContext.Provider>
    )
}

export function useDataUser() { 

    const context = useContext(DataContext);
    const {userPhoto, setUserPhoto, token, setToken} = context;

    return (
        {userPhoto, setUserPhoto, token, setToken}
    )
}
