import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
    children
}:Readonly<{
    children :React.ReactNode
}>){
    return (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      );
}