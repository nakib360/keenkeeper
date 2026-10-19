"use client"

import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";
import { LuClock3 } from "react-icons/lu";
import { TfiStatsUp } from "react-icons/tfi";
import { usePathname } from "next/navigation";
import { RiMenuUnfold2Line } from "react-icons/ri";
import { useState } from "react";


const Header = () => {
    const pathname = usePathname();
    const [isMenu, setIsMenu] = useState(false);

    return (
        <div className=" bg-white border-b border-b-gray-100 flex justify-between items-center px-10 py-5">
            <h1 className="text-[#1F2937] text-xl md:text-2xl"><span className="font-bold">Keen</span>Keeper</h1>
            <div className="hidden md:flex items-center gap-10">
                <Link href="/Home"><button className={`${pathname === "/Home" ? "bg-[#244D3F] text-white" : "text-[#64748B]" } transition-colors flex gap-2 items-center px-3 py-2 rounded-sm  hover:bg-[#244D3F] hover:text-white cursor-pointer`}><BiHomeAlt2 /> Home</button></Link>
                <Link href="/Timeline"><button className={`${pathname === "/Timeline" ? "bg-[#244D3F] text-white" : "text-[#64748B]" } transition-colors flex gap-2 items-center px-3 py-2 rounded-sm  hover:bg-[#244D3F] hover:text-white cursor-pointer`}><LuClock3 /> Timeline</button></Link>
                <Link href="/Stats"><button className={`${pathname === "/Stats" ? "bg-[#244D3F] text-white" : "text-[#64748B]" } transition-colors flex gap-2 items-center px-3 py-2 rounded-sm  hover:bg-[#244D3F] hover:text-white cursor-pointer`}><TfiStatsUp /> Stats</button></Link>
            </div>

            {/*=======small device===========*/}
            <div className="md:hidden">
                <div className="md:hidden text-2xl cursor-pointer">
                    <RiMenuUnfold2Line onClick={() => setIsMenu(!isMenu)} />
                </div>

                {isMenu &&
                    <div className="md:hidden absolute right-5 top-20 flex flex-col gap-5 bg-white rounded-sm p-2">
                        <Link href="/Home"><button className={`${pathname === "/Home" ? "bg-[#244D3F] text-white" : "text-[#64748B]" } transition-colors flex gap-2 items-center px-3 w-full py-2 rounded-sm  hover:bg-[#244D3F] hover:text-white cursor-pointer`}><BiHomeAlt2 /> Home</button></Link>
                        <Link href="/Timeline"><button className={`${pathname === "/Timeline" ? "bg-[#244D3F] text-white" : "text-[#64748B]" } transition-colors flex gap-2 items-center px-3 w-full py-2 rounded-sm  hover:bg-[#244D3F] hover:text-white cursor-pointer`}><LuClock3 /> Timeline</button></Link>
                        <Link href="/Stats"><button className={`${pathname === "/Stats" ? "bg-[#244D3F] text-white" : "text-[#64748B]" } transition-colors flex gap-2 items-center px-3 w-full py-2 rounded-sm  hover:bg-[#244D3F] hover:text-white cursor-pointer`}><TfiStatsUp /> Stats</button></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;