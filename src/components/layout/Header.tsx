import Link from "next/link";
import Image from "next/image";
import LanguageDropDown from "../ui/LanguageDropdown";
import BurgerMenu from "../ui/BurgerMenu";
import { getServerTranslation } from "@/utils/getServerTranslation";

export default async function Header({ lang }: { lang: string }) {
  const headerTranslations = await getServerTranslation(lang, "common");
  
  return (
    <div className="flex flex-row justify-between items-center bg-white shadow-md max-h-20 sticky top-0 z-50">
      <Link href={`/${lang}`}>
        <Image
          src={"/logos/blueberry-logo.svg"}
          width={250}
          height={78}
          alt="main logo blueberry"
          priority={true}
          loading="eager"
        />
      </Link>
      <div className="font-semibold flex gap-8 max-md:hidden">
        <Link href={`/${lang}`} className="text-blue-main hover:text-green-main">
          {headerTranslations ? headerTranslations("home") : "Home"}
        </Link>
        <Link
          href={`/${lang}/about`}
          className="text-blue-main hover:text-green-main"
        >
          {headerTranslations ? headerTranslations("aboutUs") : "About"}
        </Link>
        <Link
          href={`/${lang}/blogs`}
          className="text-blue-main hover:text-green-main"
        >
          {headerTranslations ? headerTranslations("blog") : "Blogs"}
        </Link>
        <Link
          href={`/${lang}/recipes`}
          className="text-blue-main hover:text-green-main"
        >
          {headerTranslations ? headerTranslations("recipes") : "Recipes"}
        </Link>
        <Link
          href={`/${lang}/contact`}
          className="text-blue-main hover:text-green-main"
        >
          {headerTranslations ? headerTranslations("contact") : "Contact"}
        </Link>
      </div>
      <div className="pr-8 flex gap-8">
        {/* <Image
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
          className="cursor-pointer max-md.hidden"
        /> */}
        <BurgerMenu
        lang={lang}
        />
        <LanguageDropDown />
      </div>
    </div>
  );
}
