import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ItemData } from '../../interfaces/SecondInterface';

interface ItemContextType {
    item: ItemData;
    setItem: React.Dispatch<React.SetStateAction<ItemData>>;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const useItemContext = () => {
    const context = useContext(ItemContext);
    if (!context) {
        throw new Error('useItemContext must be used within an ItemContextProvider');
    }
    return context;
};

interface ItemContextProviderProps {
    children: ReactNode;
}

export const ItemContextProvider: React.FC<ItemContextProviderProps> = ({ children }) => {
    const [item, setItem] = useState<ItemData>({
        name: 'Bread',
        qty: 20,
        price: '$3',
    });

    useEffect(() => { }, [item]);

    return (
        <ItemContext.Provider value={{ item, setItem }}>
            {children}
        </ItemContext.Provider>
    );
};
