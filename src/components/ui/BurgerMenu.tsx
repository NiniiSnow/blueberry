"use client"

import Image from "next/image"
import Link from "next/link";
import { useState } from "react"
import { useTranslation } from "react-i18next";


export default function BurgerMenu(){
    const [isOpen , openState] = useState(false);

    function onToggle(){
        openState(!isOpen)
    }

    return (
        <div className="md:hidden">
            <button
            onClick={onToggle}
            >
             <Image
              src={"/icons/menu.svg"}
              width={24}
              height={24}
              alt="burger menu"
              className="cursor-pointer"
              />
            </button>
             {
                isOpen && <NavigationMenu/>
             }
        </div>
    )
}

export function NavigationMenu(){
    const { t } = useTranslation();

    const [ searchText , setSearchText] = useState('')

    return(
        <div className="absolute top-20  left-0 bg-white w-full h-fit py-6">
            <div>
                <input 
                type="text" 
                name="searchInput"
                placeholder={t("search")}
                className="w-full border rounded-md outline-none border-gray-200 h-12 py-1 px-1.5"
                />
            </div>
            <div className="flex flex-col justify-center items-center">
                <Link
                href={"/"}
                className="text-blue-main hover:text-green-main"
                >
                    {t("home")}
                </Link>
                <Link
                href={"/about"}
                className="text-blue-main hover:text-green-main"
                >
                    {t("about")}
                </Link>
                <Link
                href={"/contact"}
                className="text-blue-main hover:text-green-main"
                >
                    {t("contact")}
                </Link>
                <Link
                href={"/"}
                className="text-blue-main hover:text-green-main"
                >
                    {t("login")}
                </Link>
                <Link
                href={"/"}
                className="text-blue-main hover:text-green-main"
                >
                   {t("shop")}
                </Link>
            </div>
        </div>
    )
}