import ClientOnly from "@/components/shared/ClientOnly";
import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/sidebar/LeftSidebar";
import { ConverastionProvider } from "@/contexts/ConversationsContext";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <ConverastionProvider>
      <ClientOnly>
        <main className="w-full bg-dark-800">
          <Navbar />
          <div className="flex w-full">
            <LeftSidebar />
            <section className="min-h-screen w-full px-5 pb-6 pt-32 sm:px-10">
              <div className="w-full ">{children}</div>
            </section>
          </div>
        </main>
      </ClientOnly>
    </ConverastionProvider>
  );
};
export default Layout;
