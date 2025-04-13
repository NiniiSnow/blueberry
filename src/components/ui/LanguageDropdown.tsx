"use client"

import { useState } from "react"
import Image from "next/image"
import { Languages } from "@/types/languages";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export default function LanguageDropDown(){
    const [  visible , setVisibility ] =  useState(false)
    const router = useRouter()

    const { t, i18n } = useTranslation();

    const languages:Languages[] = [
        {
            name:"georgian",
            shortName:"ge",
            flagIcon:"/flags/ge.svg"
        },
        {
            name:"english",
            shortName:"en",
            flagIcon:"/flags/gb.svg"
        },
        {
            name:"russian",
            shortName:"ru",
            flagIcon:"/flags/ru.svg"
        },
    ]

    function onToggle(){
        setVisibility(!visible)
    }

    function closeDropdown(){
        setVisibility(false)
    }

    function selectLanguage(selectedLanguage:string){
        i18n.changeLanguage(selectedLanguage);
        router.push(`/${selectedLanguage}`); 
        closeDropdown();
    }

    return(
        <div className="flex items-center relative z-50">
            <button
            onClick={onToggle}
            >
                <Image
                src={"/icons/language.svg"}
                width={24}
                height={24}
                alt="language icon"
                className="cursor-pointer"
                />
            </button>
            {
                visible && (
                <ul className="absolute top-5 right-0.5 rounded-md py-2 px-3 shadow-md min-w-fit w-40 bg-purple-50">
                    {
                        languages.map((language) => (
                            <li
                            key={language.name}
                            className="w-full pt-1 hover:bg-gray-300 p-1 rounded-md"
                            >
                                <button
                                className="flex flex-row gap-1 cursor-pointer"
                                onClick={() => selectLanguage(language.shortName)}
                                >
                                    <Image
                                    src={language.flagIcon}
                                    width={30}
                                    height={24}
                                    alt={language.name + " flag"}
                                    />
                                    <p>
                                        {t(language.name)}
                                    </p>
                                </button>
                            </li>
                        ))
                    }
                </ul>
                )
            }   
        </div>
    )
}