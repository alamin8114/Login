import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
          //custom use state 
          const [name,setname]=useState("")
          const [nameError,setnameError]=useState("")
          const [username,setusername]=useState("")
          const [usernameError,setusernameError]=useState("")
          const [email,setemail]=useState("")
          const [emaileerror,setemailerror]=useState("")
          const [phone,setphone]=useState("")
          const [Phonoeerror,setPhoneerror]=useState("")
          const [Password,setPassword]=useState("")
          const [Passworderror,setPassworderror]=useState("")
          const [confirmPassword,setconfirmPassword]=useState("")
          const [confirmPassworderror,setconfirmPassworderror]=useState("")
          const Navigate=useNavigate()
          


          // All function here
          const handelRegister=()=>{
            if(name == ""){
                setnameError("Error:Enter Your Full Name")
            }
            if(username == ""){
              setusernameError("Enter Your User Name")
            }
            if(email == ""){
              setemailerror("Enter Your Email")
            }
            if(phone == ""){
              setPhoneerror("Enter Your Phone Number")
            }
            if(Password == ""){
              setPassworderror("Enter Your Password")
            }
            if(confirmPassword == ""){
              setconfirmPassworderror("Enter Confirm Password")
            }
            else{
                setnameError("")
                setusernameError("")
                setPassworderror("")
                setPhoneerror("")
                setemailerror("")
                setconfirmPassworderror("")

                toast.success('Register success', {
                  position: "top-center",
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
  <div className="register h-screen w-full bg-gradient-to-r from-teal-400 to-yellow-200">
    <div className="container">
      <div className="main w-full h-screen flex justify-center items-center">
        <div className="main-box py-[10px] px-[10px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded">
            <div className="heading">
              <h1 className="text-[28px] font-bold text-black text-center ">Registration</h1>
              <div className="from flex flex-col gap-3">
                <div className="name flex gap-2">
                  {/* Name part start */}
                  <div className="full-name">
                    <h3 className="text-[22px] font-bold text-black mb-2">Full Name :</h3>
                    <input onChange={(e)=>{setname(e.target.value) , setnameError("")}}
                    placeholder="Enter your Full Name" className=" rounded text-[18px] pl-[10px] h-[40px] w-[250px]" type="text" />
                    <p className="text-[14px] font-semibold text-red-500">
                      {nameError}
                    </p>
                  </div>
                  <div className="User-Name">
                    <h3 className="text-[22px] font-bold text-black mb-2">User Name :</h3>
                    <input onChange={(e)=>{setusername(e.target.value) , setusernameError("")}}
                    placeholder="Enter your User Name" className=" rounded text-[18px] pl-[10px] h-[40px] w-[250px]" type="text" />
                    <p className="text-[14px] font-semibold text-red-500">
                      {usernameError}
                    </p>
                  </div>
                </div>
              {/* Name part start */}
              {/* Email part start */}
                <div className="Email flex gap-2">
                  <div className="Email">
                    <h3 className="text-[22px] font-bold text-black mb-2">Email :</h3>
                    <input onChange={(e)=>{setemail(e.target.value) , setemailerror("")}}
                    placeholder="Enter your Email" className=" rounded text-[18px] pl-[10px] h-[40px] w-[250px]" type="Email" />
                    <p className="text-[14px] font-semibold text-red-500">
                      {emaileerror}
                    </p>
                  </div>
                  <div className="Phone-number">
                    <h3 className="text-[22px] font-bold text-black mb-2">Phone Number :</h3>
                    <input onChange={(e)=>{setphone(e.target.value) , setPhoneerror("")}}
                    placeholder="Enter your number" className=" rounded text-[18px] pl-[10px] h-[40px] w-[250px]" type="Number" />
                    <p className="text-[14px] font-semibold text-red-500">
                      {Phonoeerror}
                    </p>
                  </div>
                </div>
              {/* Email part end */}
              {/* password part start */}
                <div className="Password flex gap-2">
                  <div className="Password">
                    <h3 className="text-[22px] font-bold text-black mb-2">Password :</h3>
                    <input onChange={(e)=>{setPassword(e.target.value) , setPassworderror("")}}
                    placeholder="Enter your Password" className=" rounded text-[18px] pl-[10px] h-[40px] w-[250px]" type="password" />
                    <p className="text-[14px] font-semibold text-red-500">
                      {Passworderror}
                    </p>
                  </div>
                  <div className="confirm-Password">
                    <h3 className="text-[22px] font-bold text-black mb-2">confirm Password :</h3>
                    <input onChange={(e)=>{setconfirmPassword(e.target.value) , setconfirmPassworderror("")}}
                    placeholder="Enter your confirm Password" className=" rounded text-[18px] pl-[10px] h-[40px] w-[250px]" type="password" />
                    <p className="text-[14px] font-semibold text-red-500">
                      {confirmPassworderror}
                    </p>
                  </div>
                </div>
              {/* password part end */}
              {/* mail part start here */}
                <h3 className="text-[22px] font-bold text-black mb-2">Gender :</h3>
                <div className="checkbox flex justify-around">
                <div className="mail flex gap-1">
                <input type="checkbox" name="male" /><span className="text-[18px] font-bold ">Male</span>
                </div>
                <div className="female text-[18px] font-bold">
                <input type="checkbox" name="Female" /><span>Female</span>
                </div>
                <div className="others text-[18px] font-bold">
                <input type="checkbox" name="Others" /><span>Others</span>
                </div>
                </div>
              {/* mail part end here */}
              {/* mail part end here */}
                <div className="button">
                  <button  onClick={handelRegister}
                  className="w-full block text-center py-1 rounded-lg text-[#FFF100] font-bold text-[24px] bg-gradient-to-r from-teal-400 to-yellow-200 mt-5 active:scale-[1.1]" >Register</button>
                </div>
              {/* mail part end here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Register