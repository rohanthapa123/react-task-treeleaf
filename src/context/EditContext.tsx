import React, { createContext, ReactNode, useState } from 'react';

interface EditContextProps {
    id: string | undefined;
    setId: (id: string | undefined) => void;
}

export const EditContext = createContext<EditContextProps | undefined>(undefined);



export const EditDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [id, setId] = useState<string | undefined>(undefined);

    return (<EditContext.Provider value={{ id, setId }}>
        {children}
    </EditContext.Provider>)
}