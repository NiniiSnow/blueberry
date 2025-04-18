import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
    children,
    language
  }:Readonly<{
    children :React.ReactNode,
    language:string
}>){

    return (
        <div className="flex flex-col min-h-screen">
          <Header lang={language}/>
          <main className="flex-grow">{children}</main>
          <Footer lang={language}/>
        </div>
      );
}