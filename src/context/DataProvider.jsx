import React, { createContext, useState } from 'react'

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [movieData, setMovieData] = useState([]);
    return (
        <div>
            <DataContext.Provider value={movieData}>
                {children}
            </DataContext.Provider>
        </div>
    )
}

export default DataProvider