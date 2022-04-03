import { useState, createContext } from 'react'

export const ContainerContext = createContext()

export const ContainerContextProvider = ({ children }) => {
    const [containerId, setContainerId] = useState(0)

    const containerState = {
        containerId,
        setContainerId
    }

    return (
        <ContainerContext.Provider value={containerState}>
            {children}
        </ContainerContext.Provider>
    )
}