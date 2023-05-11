import Footer from "./Footer";
import Navbar from "./Navbar";


// if ts children will  be react node
export default function MainLayout({children}) {
    return <>
        <Navbar />
        {children}
        <Footer />
    </>
}