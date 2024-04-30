import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { JSX, SVGProps } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import Image from "next/image";
import { ServicesMenu } from "./service-menu-navig";
import { BiLogoGmail } from "react-icons/bi";

import { Mail } from "lucide-react";

import { FaFacebook } from "react-icons/fa";

import { BsTelephone } from "react-icons/bs";

import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import FeatureCards from "./Features";
import { Carousel2 } from "./Carousel";
import ContactForm from "./contact-me-form";
export default function Hero() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <h1 className="text-4xl block lg:hidden lg:text-white lg:bg-gray-900 text-gray-900 text-center md:text-5xl lg:text-6xl font-bold">
        LEADING CANADA’S SECURITY SERVICES
      </h1>
      <main className="flex-1">
        <section className="bg-gray-900 text-white py-20 md:py-32 lg:py-20">
          <div className="lg:mb-10">
            <h1 className="text-4xl hidden lg:block lg:text-white lg:bg-gray-900 text-gray-900 text-center md:text-5xl lg:text-6xl font-bold">
              LEADING CANADA’S SECURITY SERVICES
            </h1>
          </div>
          <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Secure Your Business with Reliable Security Guards
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl">
                Our experienced security guards provide top-notch protection for
                your business, ensuring the safety of your employees and
                customers.
              </p>
              <div className="flex gap-4">
                <Button variant="secondary">Get a Quote</Button>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                alt="Security Guard"
                className="rounded-lg shadow-lg"
                height={500}
                src="/mall-security.jpg"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width={500}
              />
            </div>
          </div>
        </section>
        <section className="bg-white py-20 md:py-32 lg:py-40">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                alt="Security Camera"
                className="rounded-lg shadow-lg"
                height={500}
                src="/commercial.jpg"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width={500}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Cutting-Edge Security Technology
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl">
                Our security solutions include advanced surveillance cameras,
                access control systems, and alarm monitoring to keep your
                business safe.
              </p>
              <div className="flex gap-4">
                <Button variant="secondary">Learn More</Button>
                <Button variant="secondary">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 text-white py-20 md:py-32 lg:py-40">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Trusted by Businesses Across the Country
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl">
                Our security guards have protected businesses of all sizes, from
                small shops to large corporations. See what our clients have to
                say.
              </p>
              <Carousel2
                className="md:basis-1/2"
                classNameCarousel="md:w-[600px]"
              />
            </div>
            <div className="flex justify-center">
              <img
                alt="Security Team"
                className="rounded-lg shadow-lg"
                height={500}
                src="/concierge.jpg"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width={500}
              />
            </div>
          </div>
        </section>
        <section className="w-full bg-white  py-12 md:py-24 lg:py-32">
          <FeatureCards />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-20 bg-gray-100 dark:bg-gray-800">
          <ContactForm />
        </section>
      </main>
      <footer className="bg-gray-900 text-white px-6 py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Eagle View Security</span>
          </div>
          <nav className="flex items-center gap-6 mt-4 md:mt-0">
            <Link className="hover:underline" href="#">
              Privacy
            </Link>
            <Link className="hover:underline" href="#">
              Terms
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function ShieldIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}

function BriefcaseIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
