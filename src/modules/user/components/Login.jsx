import { useState } from "react"
import User from "../hooks/useUser"


export default function Login() {
    const [username, setUsername] = useState('')

    const {user, loginWithUserName} =  User()
    // console.log(userContext)

    function onSubmit(e) {
        e.preventDefault()

        loginWithUserName(username)
        console.log(user)
        console.log(username)
    }

    const handleInput = (e) => {
        setUsername(e.target.value)
    }


    return (
        <>        
            <p>Sign in to access ECEWS</p>
            <form action="#" onSubmit={onSubmit}>
                <input 
                type="text"
                placeholder="username"
                name="username"
                value={username}
                onInput={(e) => handleInput(e)}
                />

                <button type="submit">Login</button>
            </form>
        </>

    )
}