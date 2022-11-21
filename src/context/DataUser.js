import React from "react";
import { createContext, useContext, useState } from "react";

const DataContext = createContext(); 

export default function DataProvider({children}){ 

    const [userName, setUserName] = useState(null);
    const [token, setToken] = useState(null);

    return (
        <DataContext.Provider value={{userName, setUserName, token, setToken}}> 
            {children}
        </DataContext.Provider>
    );
};

export function useDataUser() { 

    const context = useContext(DataContext);
    const {userName, setUserName, token, setToken} = context;

    return (
        {userName, setUserName, token, setToken}
    );
};
