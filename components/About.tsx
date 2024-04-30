import React from "react";
import { Card, CardDescription, CardFooter, CardTitle } from "./ui/card";
import HeadingText from "./heading-text";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";

const About = () => {
  return (
    <>
      <section className="bg-gray-900 text-white px-6 py-8 md:h-[550px] z-10 ">
        <div className="container mx-auto">
          {/* <div className="p-10 grid items-center bg-slate-200  bg-opacity-90 grid-rows-2">
            {" "}
            <Link
              href="tel:+1 (514) 560‑5863"
              className="grid text-5xl mx-4 md:text-7xl   text-slate-200 font-bold mx-4 md:ml-15 hover:text-red-600"
            >
              +1 (514) 560‑5863
            </Link>
            <HeadingText className="text-red-800">
              Call us for a Quote. We&apos;re here 24/7
            </HeadingText>
          </div> */}

          <div className="grid gap-6 mx-4 md:grid-cols-3">
            <Card className="grid gap-6 md:m-4 mx-4 md:w-[200px] pt-5 h-auto md:h-[250px]  bg-transparent border-0">
              <CardTitle className="mx-4 md:text-xl text-slate-200 text-left">
                Quick Links
              </CardTitle>
              <CardDescription className=" mx-4 md:text-lg mb-10 ">
                <Link
                  href="/"
                  className="flex text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  Home
                </Link>{" "}
                <Link
                  href="/benefits"
                  className="flex text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  Our Benefits
                </Link>{" "}
                <Link
                  href="/about"
                  className="flex text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg rounded-lg "
                >
                  About Us
                </Link>{" "}
                <Link
                  href="/careers"
                  className="flex text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  Careers
                </Link>{" "}
                <Link
                  href="/contact"
                  className="flex text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  Contact
                </Link>{" "}
                <Link
                  href="tel:+1 (514) 560‑5863"
                  className="flex text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  Privacy Policy
                </Link>{" "}
              </CardDescription>
            </Card>
            <Card className="grid gap-6 md:m-4 mx-4 md:w-[300px] pt-5 h-auto md:h-[250px]  bg-transparent border-0">
              <CardTitle className="mx-4 md:text-xl text-slate-200 text-left">
                Security Guard Services
              </CardTitle>
              <CardDescription className="mx-4 md:text-lg text-left mb-10 ">
                <Link
                  href="/services/loss-prevention"
                  className="flex text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  Loss Prevention
                </Link>{" "}
                <Link
                  href="/services/concierge-security-services"
                  className="flex text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  Concierge Security Services
                </Link>{" "}
                <Link
                  href="/services/commercial-high-rise-security"
                  className="flex text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  Commercial High-Rise Security
                </Link>{" "}
                <Link
                  href="/services/construction-site-security"
                  className="flex text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  Construction Site Security
                </Link>{" "}
                <Link
                  href="/services/fire-watch-security"
                  className="flex text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  Fire Watch Security
                </Link>{" "}
                <Link
                  href="/services/mobile-patrol"
                  className="flex text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  Mobile Patrol
                </Link>{" "}
                <Link
                  href="/services/access-control-security"
                  className="flex text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  Access Control Security
                </Link>{" "}
                <Link
                  href="/services/cctv-security-camera-installation"
                  className="flex text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  CCTV Security Camera Installation
                </Link>{" "}
                <Link
                  href="/services/it-security"
                  className="fle text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  IT Security
                </Link>{" "}
                <Link
                  href="/services/private-investigation-and-serveillance-services"
                  className="flex  text-le text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  Private Investigation & Surveillance Services
                </Link>
              </CardDescription>
            </Card>

            <Card className="grid gap-4 mt-10 mx-4 md:m-4 w-[100px]  md:w-[200px] pt-5 h-auto md:h-[250px]  bg-transparent border-0">
              <CardTitle className="mx-4 md:text-xl text-slate-200 text-left">
                Contact Information
              </CardTitle>
              <CardDescription className="text-lg mb-10 ">
                <Link
                  href="tel:+1 (514) 560‑5863"
                  className="flex text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  +1 (514) 560‑5863
                </Link>{" "}
                <Link
                  href="https://www.google.com/maps/place/4+Tullamore+Rd,+Brampton,+ON+L6W+1J7,+Canada/data=!4m2!3m1!1s0x882b3e263bf59b7b:0xe2650be50d3d6459?sa=X&ved=1t:242&ictx=111"
                  className="flex  text-le text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  4 Tullamore rd , Brampton, Ontario
                </Link>{" "}
                <Link
                  href="mailto:info@eagleviewsecurity.ca"
                  className="flex  text-le text-l mx-4 md:text-lg text-white font-normal hover:text-gray-900 hover:bg-white p-1/2 px-1 rounded-lg"
                >
                  info@eagleviewsecurity.ca
                </Link>{" "}
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
