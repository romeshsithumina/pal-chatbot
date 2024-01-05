import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/sidebar/LeftSidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative bg-dark-800">
      <Navbar />
      <div className="flex ">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col pt-32 pb-6">
          <div className=" w-full max-w-5xl">{children}</div>
        </section>
      </div>
    </main>
  );
};
export default Layout;
