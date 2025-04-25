export default function Login() {
    return <>
        <div className="loginContainer">
            <div className="loginDetails grid grid-col justify-center item-center w-full h-40 bg-gray-200">
                <input className="mb-6 p-3 font-3 w-fit rounded" type="text" placeholder="Enter your e-mail"/>
                {/* <br /> */}
                <input className="mb-6 p-3 font-3 w-fit rounded" type="password" placeholder="Enter your Password"/>
                <button className="loginViaGoogle border bg-black-400">Login with Google</button>
                <button className="loginViaFacebook border-black-800 bg-black-400">Login with Facebook</button>
                <p className="turnToSignUp">Haven't an account ? <a href="">Sign Up</a></p>
            </div>
        </div>
    </>
}