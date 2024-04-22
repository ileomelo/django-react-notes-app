/* eslint-disable react/prop-types */
import Footer from "../components/navigation/Footer"
import Navbar from "../components/navigation/Navbar"

const Layout = ({children}) =>{
    return(
        <>
            <div className="mx-auto container">
            <Navbar/>
            {children}
            <Footer/>

            </div>
        </>
    )
}

export default Layout