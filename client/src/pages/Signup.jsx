export default function SignUp() {
    return <>
        <div className="signUpContainer">
            <div className="signUpDetails grid grid-col justify-center item-center w-full h-40 bg-gray-200">
                <input className="mb-6 p-3 font-3 w-fit rounded" type="text" placeholder="Enter your e-mail"/>
                {/* <br /> */}
                <input className="mb-6 p-3 font-3 w-fit rounded" type="password" placeholder="Enter your Password"/>
                <button className="signUpViaGoogle border bg-black-400">signup with Google</button>
                <button className="signUpViaFacebook border-black-800 bg-black-400">signup with Facebook</button>
                <p className="turnToSignUp">Already have an account ? <a href="">Log In</a></p>
            </div>
        </div>
    </>
}