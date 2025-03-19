"use client"

import { useState } from "react"
import Image from "next/image"
import { Languages } from "@/types/languages";
import { useTranslation } from "react-i18next";

export default function LanguageDropDown(){
    const [  visible , setVisibility ] =  useState(false)
    const [  language , setLanguage ] =  useState("GE");

    const { t, i18n } = useTranslation();

    const languages:Languages[] = [
        {
            name:"Georgian",
            shortName:"ge",
            flagIcon:"/flags/ge.svg"
        },
        {
            name:"English",
            shortName:"en",
            flagIcon:"/flags/gb.svg"
        },
        {
            name:"Russian",
            shortName:"ru",
            flagIcon:"/flags/ru.svg"
        },
    ]

    function onToggle(){
        setVisibility(!visible)
        console.log(">> visibility", visible)
    }

    function closeDropdown(){
        setVisibility(false)
    }

    function selectLanguage(language:string){
        i18n.changeLanguage(language);
        setLanguage(language);
        closeDropdown();
    }

    return(
        <div className="flex items-center relative">
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
                            className="w-full pt-1"
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