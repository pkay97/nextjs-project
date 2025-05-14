"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react";

export default function MainMenu() {
    const pathName = usePathname();

    return (
        <div className="flex justify-center mt-5">
            <div className="w-150 h-12 rounded-full bg-[#b4dbc8] flex items-center justify-between  space-x-1 pr-4 pl-4">
                <Link href="/" className={`hover:text-white ${pathName === "/"
                        ? "text-blue-600"
                        : ""
                    }`}>Home</Link>
                <Link href="/profile" className={`hover:text-white ${pathName === "/profile"
                        ? "text-blue-600"
                        : ""
                    }`}>Profile</Link>
                <Link href="/about" className={`hover:text-white ${pathName === "/about"
                        ? "text-blue-600"
                        : ""
                    }`}>About</Link>
                <Link href="/contactUs" className={`hover:text-white ${pathName === "/contactUs"
                        ? "text-blue-600"
                        : ""
                    }`}>Contact Us</Link>
            </div>
        </div>
    )
}