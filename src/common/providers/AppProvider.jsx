import { UserContextProvider } from "../../modules/user/provider/useContextprovider";
import RootRouter from "../routers/RootRouter";


export default function AppProvider() {
    return (
        <UserContextProvider>
            <RootRouter />
        </UserContextProvider>
    )
}