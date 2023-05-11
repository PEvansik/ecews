import { useContext } from "react";
import MainLayout from "../../../common/layout/MainLayout";
import Login from "../components/Login";
import User from "../hooks/useUser";


export default function ProfilePage() {

    const userContext = User()

    return (
        <MainLayout>
            <main>
                {userContext?.user ? <h1>Hello {userContext?.user.userName}</h1> : <Login />}
            </main>
        </MainLayout>
    )

}