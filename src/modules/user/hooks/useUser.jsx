import { useContext } from "react";
import { UserProvider } from "../provider/useContextprovider";


export default function User() {
    return useContext(UserProvider)
}

