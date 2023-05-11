import { Routes, Route } from "react-router-dom";
import NotFound404 from "../../../../common/pages/NotFound404";
import ProfilePage from "../ProfilePage";


export default function UserRouter() {
    return (
        <Routes>
            <Route path="/" element={<ProfilePage />} />
            
            <Route path="*" element={<NotFound404 />} />
        </Routes>
    )
}