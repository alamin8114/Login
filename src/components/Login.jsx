import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
 
    // use state part here
    const [Email,setEmail]=useState("")
    const [EmailError,setEmailError]=useState("")
    const [password,setpassword]=useState("")
    const [passwordError,setpasswordError]=useState("")
    const Navigate=useNavigate()



    // function part start
    const handelEmail =(item)=>{
        setEmail(item.target.value)

        setEmailError("")
    }

    const handelSubmit=(e)=>{
        e. preventDefault()
        if(Email == ""){
            setEmailError("Enter Your Email")
        }
        if(password == ''){
            setpasswordError("Enter Your Password")
        }
        else{
            setEmailError("")
            setpasswordError("")
            toast.success('Login Success', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
                Navigate("/")
        }
    }

return (
    <>
    <div className="w-full h-screen bg-[url(./images/bg-login.jpg)] bg-center bg-cover bg-no-repeat">
        <div className="container">
            <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[400px] bg-black py-3 px-5 rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <h1 className="text-[24px] font-bold text-center mt-2 text-white">
                    login
                </h1>
                <form>
                    {/* email */}
                <h4 className="font-bold text-[18px] text-white mt-3">Email</h4>
                <input onChange={(e)=>{handelEmail(e)}}
                className="w-full bg-gray-300 h-[30px] pl-4 font-semibold text-[20px]" type="text" />
                <p className="error text-red-500">
                    {EmailError}
                </p>
                {/* password */}
                <h4 className="font-bold text-[18px] text-white mt-3">Password</h4>
                <input onChange={(e)=>{setpassword(e.target.value) , setpasswordError("")}}
                className="w-full bg-gray-300 h-[30px] pl-4 font-semibold text-[20px]" type="text" />
                <p className="error text-red-500">
                    {passwordError}
                </p>
                <div className="flex justify-end mt-3">
                <button onClick={handelSubmit} className="px-5 py-2 bg-[#F09319] rounded text-[18px] text-white active:scale-[1.1]" type="submit">Login</button>
                </div>
                </form>
                <p className="text-[14px] font-bold text-white">Do Not Have an Account?<Link to="/Register" className="text-[16px] text-green-500">Register</Link></p>
            </div>
            </div>
        </div>
    </div>
    </>
)
}

export default Login