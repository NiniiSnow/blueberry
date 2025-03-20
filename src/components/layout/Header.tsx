import Link from "next/link";
import Image from "next/image";
import LanguageDropDown from "../ui/LanguageDropdown";
import BurgerMenu from "../ui/BurgerMenu";

export default function Header (){
    return (
        <div className="flex flex-row justify-between items-center bg-white shadow-md">
            <Link
            href={"/"}
            >
                <Image
                src={"/logos/blueberry-logo.svg"}
                width={250}
                height={250}
                alt="main logo blueberry"
                />
            </Link>
            <div className="font-semibold flex gap-8 max-md:hidden">
                <Link
                href={"/"}
                className="text-blue-main hover:text-green-main"
                >
                    Home
                </Link>
                <Link
                href={"/contact"}
                className="text-blue-main hover:text-green-main"
                >
                    Contact
                </Link>
                <Link
                href={"/about"}
                className="text-blue-main hover:text-green-main"
                >
                    About
                </Link>
            </div>
            <div className="pr-8 flex gap-8">
                <Image
                src={"/icons/search-icon.svg"}
                width={24}
                height={24}
                alt="search icon"
                className="cursor-pointer max-md:hidden"
                />
                <Image
                src={"/icons/account.svg"}
                width={24}
                height={24}
                alt="account icon"
                className="cursor-pointer max-md:hidden"
                />
                <Image
                src={"/icons/cart.svg"}
                width={24}
                height={24}
                alt="cart icon"
                className="cursor-pointer max-md:hidden"
                />
                <BurgerMenu/>
                <LanguageDropDown/>
            </div>
        </div>
    )
}