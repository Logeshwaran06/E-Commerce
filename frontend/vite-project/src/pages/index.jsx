import { Link } from "react-router-dom"
import "./index.css"
// import UntitledDesign from '../Images/UntitledDesign1.png'; 

export default function Index()
{   

    const backgroundImage = {
        backgroundImage: `url('/Images/UntitledDesign.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh"
    }


    return <>
    <div style={backgroundImage}>
            <div className="indexContainer">
                <div className="innerContainer">
                    <h1 className="heading">Welcome to E-Commerce</h1>

                    <Link to="/e-commerce/log-in"><button className="buttons">Login</button></Link>
                    <Link to='/e-commerce/sign-up'><button className="buttons">Sign up</button></Link>
                </div>
            </div>
        </div>
    </>
}