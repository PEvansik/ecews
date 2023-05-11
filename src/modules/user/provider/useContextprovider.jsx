import { createContext, useState } from "react";



export const UserProvider = createContext()

export const UserContextProvider = ({children}) => {
    
    const [user, setUser] = useState(null)

    // we will find in the user model, which user matches the user tryig to login
    async function loginWithUserName(userName) {
        const userRes = await fetch("/users.json")
        const userData = await userRes.json()
        
        const matchingUser = userData.find((user) => user.userName === userName)

        if(matchingUser) {
            setUser(prev => prev = matchingUser)
        }
 
    }

    return (
        <UserProvider.Provider value={{ user, loginWithUserName}} >
            {children}
        </UserProvider.Provider>
    )
}