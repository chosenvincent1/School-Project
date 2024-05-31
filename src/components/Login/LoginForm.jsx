import { Link } from "react-router-dom"
import { useState } from "react"

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase/firebase";


export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);


    const handleSubmit = async (e)=> {
        e.preventDefault();
        setIsLogin(true)
        try {
            const loginData = await signInWithEmailAndPassword(auth, email, password);

            if(loginData) {
                setIsLogin(false)
                window.location.href = "/dashboard"
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <section className="md:w-[50%] flex flex-col md:justify-center ">
            <div className="text-center mb-[50px] md:max-w-[360px] md:mx-auto ">
                <h2 className="text-[#101828] text-[30px] font-[600] ">Student Login</h2>
                <p className="text-[#667085] text-[16px] font-[400] ">Welcome back! Please enter your details.</p>
            </div>

            <form onSubmit={handleSubmit} className="md:max-w-[360px] md:mx-auto " >
                <div className="flex flex-col mb-[25px] gap-[5px] ">
                    <label htmlFor="email" className="text-[#344054] text-[14px] font-[500] ">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="border-[
                            #D0D5DD] border-[1px] py-[10px] px-[14px] rounded-[8px] outline-0 "
                    />
                </div>

                <div className="flex flex-col mb-[25px] gap-[5px] ">
                    <label htmlFor="password" className="text-[#344054] text-[14px] font-[500] ">Password</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        className="border-[
                            #D0D5DD] border-[1px] py-[10px] px-[14px] rounded-[8px] outline-0 "
                    />
                </div>


                <div className="mb-[20px] flex justify-between gap-[20px] ">
                    <div className="flex items-center gap-[10px] ">
                        <input 
                            type="checkbox" 
                            name="rememberMe" 
                            id="rememberMe" 
                        />
                        <label htmlFor="rememberMe" className="text-[14px] font-[500] ">Remember for 30 days</label>
                    </div>

                    <a href="" className="text-[14px] text-[#6941C6] font-[600] ">Forgot Password?</a>
                </div>

                {isLogin ?
                    <button className="bg-[#101720] py-[10px] px-[18px] w-full text-[#fff] text-[16px] font-[600] rounded-[8px] ">Loading...</button>
                    :
                    <button className="bg-[#101720] py-[10px] px-[18px] w-full text-[#fff] text-[16px] font-[600] rounded-[8px] ">Log In</button>
                }


                <div className="flex gap-[10px] justify-center text-[14px] ">
                    <p>Don&apos;t have an account?</p>
                    <a href={'/signup'} className="text-[#27779B] font-[600] ">Sign Up</a>
                </div>
            </form>
        </section>
    )
}