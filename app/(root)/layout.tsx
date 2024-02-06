import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/sidebar/LeftSidebar";
import { ConverastionProvider } from "@/contexts/ConversationsContext";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <ConverastionProvider>
      <main className="relative bg-dark-800">
        <Navbar />
        <div className="flex ">
          <LeftSidebar />
          <section className="flex min-h-screen flex-1 flex-col pb-6 pt-32">
            <div className=" w-full max-w-5xl">{children}</div>
          </section>
        </div>
      </main>
    </ConverastionProvider>
  );
};
export default Layout;
