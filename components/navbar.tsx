"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { NavbarPreviewOptions } from "./preview/_components/navbar-preview-options";

// import { signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  return (
    <nav className="absolute w-full bg-background top-0 left-0 right-0 flex items-center h-16 justify-between px-8">
      <Link href="/" className="text-title text-2xl font-semibold">
        Resumr
      </Link>
      <div className="md:flex hidden">
        <NavbarPreviewOptions />
      </div>
      <div className="flex items-center gap-2">
        <div className="ml-2">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
