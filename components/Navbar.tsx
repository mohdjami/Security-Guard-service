"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Image from "next/image";
import { ServicesMenu } from "./service-menu-navig";

import { Mail, MenuIcon } from "lucide-react";

import { FaFacebook } from "react-icons/fa";

import { BsTelephone } from "react-icons/bs";

import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
const Navbar = () => {
  return (
    <section className="bg-gray-900 p-2">
      <div className="flex p-4 lg:space-x-60 justify-center">
        <div className="flex items-center justify-center gap-3">
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="flex font-sans text-xl text-white font-bold hover:text-gray-900 hover:bg-white hover:rounded-md hover:p-1"
            >
              Home
            </Link>
            <Link href="/services">
              <ServicesMenu className="text-white grid" />
            </Link>
            <Link
              href="/benefits"
              className="flex font-sans text-xl text-red text-white font-bold hover:text-gray-900 hover:bg-white hover:rounded-md hover:p-1"
            >
              Our Benefits
            </Link>{" "}
            <Link
              href="/about"
              className="flex font-sans text-xl text-red font-bold text-white font-bold hover:text-gray-900 hover:bg-white hover:rounded-md hover:p-1"
            >
              About Us{" "}
            </Link>{" "}
            <Link
              href="/careers"
              className="flex font-sans text-xl text-red font-bold text-white font-bold hover:text-gray-900 hover:bg-white hover:rounded-md hover:p-1"
            >
              Careers{" "}
            </Link>{" "}
            <Link
              href="/contact"
              className="flex font-sans text-xl text-red font-bold text-white font-bold hover:text-gray-900 hover:bg-white hover:rounded-md hover:p-1"
            >
              Contact
            </Link>{" "}
          </nav>
        </div>
        <Button className="hidden md:inline-flex" variant="secondary">
          Get a Quote
        </Button>
        <div className="flex md:hidden justify-between items-end space-x-10">
          <span className="text-xl font-sans md:hidden font-bold text-white">
            Eagle View Security
          </span>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" variant="outline">
                <MenuIcon className="h-6 w-6 text-gray-900" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-gray-900 text-white p-6" side="left">
              <div className="flex flex-col gap-4">
                <Image
                  src="/logomain.png"
                  width={80}
                  height={80}
                  alt=""
                  className="block lg:hidden"
                />
                <Link className="hover:underline" href="/">
                  Home
                </Link>
                <Link className="hover:underline" href="/services">
                  Services
                </Link>{" "}
                <Link className="hover:underline" href="/benefits">
                  Benefits
                </Link>{" "}
                <Link className="hover:underline" href="/careers">
                  Careers
                </Link>
                <Link className="hover:underline" href="/about">
                  About
                </Link>
                <Link className="hover:underline" href="#">
                  Contact
                </Link>
                <Button className="w-full" variant="secondary">
                  Get a Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>{" "}
        </div>
      </div>

      <div className="bg-white py-2 px-10 w-full  hidden lg:flex items-end justify-between ">
        {" "}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/logomain.png"
              width={100}
              height={100}
              alt=""
              className="hidden lg:block"
            />
          </Link>
          <span className="text-4xl font-sans font-bold text-gray-900">
            Eagle View Security
          </span>
        </div>
        <div className="grid grid-rows-2 gap-3 justify-center ">
          <div className="hidden lg:flex items-center border p-2 bg-gray-900 text-white  justify-center space-x-10">
            <FaFacebook className=" text-white hover:bg-white hover:text-black w-8 h-8" />
            <TwitterLogoIcon className=" text-white hover:bg-white hover:text-black w-8 h-8" />
            <LinkedInLogoIcon className=" text-white hover:bg-white hover:text-black w-8 h-8" />
            <InstagramLogoIcon className=" text-white hover:bg-white hover:text-black w-8 h-8" />
          </div>
          <div className="hidden lg:block">
            <div className="flex mx-5 space-x-4 justify-end">
              <Link
                href="info@eagleviewsecurity.ca"
                className="flex font-sans justify-center text-xl font-bold hover:text-gray-400 text-gray-900   "
              >
                <Mail className="mr-2 h-8 w-8 " />
                info@eagleviewsecurity.ca
              </Link>
              <Link
                href="tel:+1 (514) 560‑5863"
                className="flex font-sans justify-center text-xl font-bold hover:text-gray-400 text-gray-900   "
              >
                <BsTelephone className="mr-2 h-8 w-8" />
                +1 (514) 560‑5863
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden justify-center items-center border">
        <Image
          src="/logomain.png"
          width={100}
          height={100}
          alt=""
          className="block lg:hidden"
        />
      </div>
    </section>
  );
};

export default Navbar;
