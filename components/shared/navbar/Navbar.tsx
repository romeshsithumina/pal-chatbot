"use client";

import { Button } from "@/components/ui/button";
import { SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import MobileLeftSidebar from "../sidebar/MobileLeftSidebar";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="flex-between fixed z-10 w-full gap-5 border-b border-dark-300 bg-dark-800 px-6 py-5 sm:px-12">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/pal-logo.png" width={40} height={40} alt="Pal" />

        <p className="font-spaceGrotesk text-[24px] text-light-800 max-sm:hidden">
          Pal
        </p>
      </Link>

      <div className="lg:flex-between hidden lg:flex">
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-10 w-10",
            },
            variables: {
              colorPrimary: "#146DFF",
            },
          }}
          afterSignOutUrl="/"
        />
      </div>

      <div className="flex-between flex gap-5 lg:hidden">
        <Button
          className="mr-4 rounded-full border border-primary bg-transparent text-white"
          disabled={pathname === "/"}
          onClick={() => router.push("/")}
        >
          New Chat
        </Button>
        <MobileLeftSidebar />
      </div>

      <SignedOut>
        <div className="ml-auto flex gap-5">
          {" "}
          <Link href="/signin">
            <Button className="min-h-[41px] rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="lg:hidden"
              />
              <span className="text-light-800 max-lg:hidden">Log In</span>
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="lg:hidden"
              />
              <span className="text-light-800 max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </nav>
  );
};
export default Navbar;
