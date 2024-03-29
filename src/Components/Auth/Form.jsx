import { motion } from "framer-motion";
import { IoRemoveOutline as LineIcon } from "react-icons/io5";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Form = () => {

    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const location = useLocation();

    return (
        <div>
            <form className=" shadow-md rounded-[10px] px-[30px] py-[10px] w-[350px] h-auto border sm:my-[10%] mx-auto" >

                {
                    location.pathname === "/login" ? <h1 className="text-[20px] font-semibold text-center">Login Now</h1> : <h1 className="text-[20px] font-semibold text-center">Signup</h1>
                }


                <div className=" flex flex-col gap-4 my-[10%]">

                    {
                        location.pathname === "/signup" &&
                        <div className="flex flex-col">
                            <label htmlFor="name">Name:</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className=" rounded-[5px] p-2 border outline-none"
                                autoComplete="off"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>
                    }

                    <div className="flex flex-col">
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className=" rounded-[5px] p-2 border outline-none"
                            autoComplete="off"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className=" rounded-[5px] p-2 border outline-none"
                            autoComplete="off"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {
                    location.pathname === "/login" && <div className="text-gray-500 text-[12px] flex flex-row items-center gap-1">
                        <p>By login you agree to</p>
                        <p className=" underline cursor-pointer">Terms and Conditions</p>
                    </div>
                }

                {
                    location.pathname === "/login" &&
                    <div className="text-[14px] my-[10%]">
                        <div className="flex flex-row items-center justify-between ">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                className="flex flex-row items-center text-white bg-blue-600 rounded-[5px] px-[5%] py-[2%]"
                                type="button"
                                onClick={()=>{
                                    user.login(email, password);
                                    setEmail("");
                                    setPassword("");
                                }}
                            >Login Now &#160;<LineIcon /></motion.button>
                            <motion.p whileTap={{ scale: 0.7 }} className=" underline text-gray-500 mr-[5%] cursor-pointer">Forget Password</motion.p>
                        </div>
                        <div className="flex flex-row items-center justify-between my-[10%]">
                            <p>Doesn&apos;t have an account ?</p>
                            <Link to={"/signup"} className=" underline text-blue-600 mr-[5%]">Register</Link>
                        </div>
                    </div>

                }

                {
                    location.pathname === "/signup" &&
                    <div className=" text-[14px] my-[6%]">
                        <div>
                        <motion.p whileTap={{ scale: 0.7 }}
                            className=" text-white bg-blue-600 rounded-[5px] px-[5%] py-[2%] text-center cursor-pointer"
                            type="button"
                            onClick={()=>{
                                user.register(name, email, password);
                                setName("");
                                setEmail("");
                                setPassword("");
                            }}
                        >Register </motion.p>
                        </div>
                        
                        <div className="flex flex-row items-center justify-between my-[6%]">
                            <p>Already have an account ?</p>
                            <Link to={"/login"} className=" underline text-blue-600 mr-[5%]">Login</Link>
                        </div>

                    </div>
                }

            </form>
        </div>
    )
}

export default Form;