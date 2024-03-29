import { RiMenu2Line as MenuIcon } from "react-icons/ri";
import { CiSearch as SearchIcon } from "react-icons/ci";
import { LuPlus as PlusIcon } from "react-icons/lu";
import { FaQuestion as QuestionIcon } from "react-icons/fa6";
import { IoIosNotifications as NotificationIcon } from "react-icons/io";
import { MdLightMode as LightIcon } from "react-icons/md";
import { IoMoon as DarkIcon } from "react-icons/io5";
import user from "../../../assets/Img/user.jpg";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../../Contexts/ThemeMode";

const Nav = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    
    useEffect(()=>{
        localStorage.setItem("theme",theme);
        const HTML = document.querySelector("html");
        HTML.classList.remove("dark", "light");
        HTML.classList.add(localStorage.getItem("theme"));
    },[theme]);

    const NotSelected = {
        "-webkit-user-select": "none",    
        "-moz-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
      };
    const [thememode, setThemeMode] = useState(localStorage.getItem("theme"));

    return (
        <div className="w-screen fixed top-0 z-50  bg-white text-black border shadow-lg dark:text-white dark:bg-black">
            <div className=" flex flex-row justify-between px-[3%] py-3 items-center text-[23px]" style={NotSelected}>

                <div className=" flex flex-row flex-1 justify-start gap-[5%] items-center">

                    <motion.div whileTap={{ scale: 0.6 }} className=" cursor-pointer">
                        <MenuIcon className="text-[23px]" />
                    </motion.div>
                    <motion.p whileTap={{scale:0.6}} className="p-1 rounded-[50%] text-[14px] cursor-pointer border border-gray-200 w-[30px] h-auto text-center bg-gray-200">S</motion.p>
                    {
                        thememode === "light" &&
                        <motion.div className=" duration-300 rounded-[50%] text-[22px] cursor-pointer p-1" whileTap={{ scale: 0.4 }} onClick={() => {
                            setThemeMode("dark");
                            setTheme("dark");
                        }}>
                            <LightIcon />
                        </motion.div>
                    }
                    {
                        thememode === "dark" &&
                        <motion.div className=" duration-300 rounded-[50%] text-[22px] cursor-pointer p-1" whileTap={{ scale: 0.4 }} onClick={() => {
                            setThemeMode("light");
                            setTheme("light");
                        }}>
                            <DarkIcon />
                        </motion.div>
                    }
                </div>

                <div className=" border rounded-[5px] overflow-hidden border-blue-200 px-2 w-[250px] py-1 bg-gray-100 relative flex flex-row items-center flex-[1]">
                    <input type="text" placeholder="Use your tools by searching.." className="border-none bg-gray-100 text-black outline-none text-[14px]  p-1 w-[90%]" />
                    <SearchIcon className="text-black text-[18px] cursor-pointer" />
                </div>

                <div className=" flex flex-row items-center flex-1 gap-[4%] justify-end">

                    <motion.div whileTap={{scale:0.6}} className=" rounded-[50%] text-[17px] bg-gray-200 border-gray-200 p-1 cursor-pointer border">
                        <PlusIcon  />
                    </motion.div>
                    <motion.div whileTap={{scale:0.6}} className=" rounded-[50%] text-[17px] bg-gray-200 border-gray-200 border p-1 cursor-pointer">
                        <QuestionIcon />
                    </motion.div>
                    <motion.div whileTap={{scale:0.6}} className=" rounded-[50%] text-[17px] bg-gray-200 border-gray-200 border p-1 cursor-pointer">
                        <NotificationIcon />
                    </motion.div>

                    
                </div>

            </div>
        </div>
    )
}

export default Nav;