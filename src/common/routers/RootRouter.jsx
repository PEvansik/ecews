import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MainFeed from "../../modules/posts/pages/MainFeed";
// import PostsRouter from "../../modules/posts/pages/postrouters/PostsRouter";
import UserRouter from "../../modules/user/pages/userrouters/UserRouter";
import Home from "../pages/Home";
import NotFound404 from "../pages/NotFound404";


export default function RootRouter() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/posts/*" element={<PostsRouter />}/> */}
            <Route path="/user/*" element={<UserRouter />}/>


            <Route path="*" element={<NotFound404/>}/>
        </Routes>
    </BrowserRouter>)

}