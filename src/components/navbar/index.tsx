"use client";

import { useTheme } from "@/context/theme-context";
import Link from "next/link";
import React, { useRef } from "react";
import { FiSearch, FiSun, FiMoon } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Navbar () {
    const { theme, toggleTheme, setSearch } = useTheme();
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const handleKeyPress = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (inputRef.current) {
            setSearch(inputRef.current.value);
        }

        router.push("/");
    };

    return <nav  className={`flex items-center justify-between p-4 shadow-md ${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}`}>
        <div className="text-lg font-bold">
            <Link href="/">Dashboard</Link>
        </div>
        <form className="relative w-full max-w-[300px]" onSubmit={handleKeyPress}>
            <FiSearch className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 max-[1015px]:size-5" />
            <input type="text" placeholder="Search..." ref={inputRef} className="flex w-full items-center gap-3.5 rounded-full border bg-gray-2 py-3 pl-[53px] pr-5 outline-none transition-colors focus-visible:border-primary dark:border-dark-3 dark:bg-dark-2 dark:hover:border-dark-4 dark:hover:bg-dark-3 dark:hover:text-dark-6 dark:focus-visible:border-primary"  />
        </form>
        <div  className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <button onClick={toggleTheme}>
                {theme ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-600" />} 
            </button>
        </div>
    </nav>
}
