import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/sidebar/LeftSidebar";
import { ConverastionProvider } from "@/contexts/ConversationsContext";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <ConverastionProvider>
      <main className="w-full bg-dark-800">
        <Navbar />
        <div className="flex w-full">
          <LeftSidebar />
          <section className="min-h-screen w-full pb-6 pt-32">
            <div className="w-full px-10">{children}</div>
          </section>
        </div>
      </main>
    </ConverastionProvider>
  );
};
export default Layout;
