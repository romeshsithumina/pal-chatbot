import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b border-dark-300 flex-between fixed z-50 w-full gap-5 p-6 bg-dark-800 sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="Pal"
        />

        <p className="text-[24px] font-spaceGrotesk text-light-800 max-sm:hidden">
          Pal
        </p>
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
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
        </SignedIn>
      </div>

      <SignedOut>
        <div className="ml-auto flex gap-5">
          {" "}
          <Link href="/signin">
            <Button className="small-medium btn-secondary min-h-[41px] rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="text-light-800 max-lg:hidden">Log In</span>
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
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
