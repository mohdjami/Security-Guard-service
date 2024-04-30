import FeatureCards from "@/components/Features";
import HeadingText from "@/components/heading-text";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import React from "react";
import { BsFire, BsLayoutTextWindowReverse } from "react-icons/bs";
import { RxActivityLog } from "react-icons/rx";
import { TbDeviceAnalytics } from "react-icons/tb";
import Image from "next/image";
import { Carousel2 } from "@/components/Carousel";
import HeadingAnimation from "@/components/motion-text";
const page = () => {
  return (
    <>
      <HeadingAnimation
        text="About Us"
        description="Eagle View Security"
        title="Professional Security Guards Services"
      />
      <section className="md:m-16 mt-10">
        {" "}
        <div className="grid m-4 md:grid-cols-2 md:gap-0">
          <div className="hidden md:flex items-center justify-center mt-4 h-auto w-auto">
            <Image
              src="/aboutmain.jpg"
              alt=""
              width={900}
              height={900}
              className="object-cover  rounded-sm shadow-sm shrink-0"
            />
          </div>{" "}
          <div className="flex mx-10 md:hidden items-center justify-center">
            <Image
              src="/aboutmain.jpg"
              alt=""
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <Card className="flex flex-grow flex-col justify-between gap-4 m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-auto">
            <CardDescription className=" md:text-base text-sm text-gray-900 text p-10">
              Eagle View Security Enterprise is a privately-owned security
              company based in Ontario, Canada. Proudly serving Ontario since
              2004, with over 1000+ security guards serving various diverse
              clients across the Ontario with offices in Mississauga, Ottawa,
              Hamilton, London and Sudbury. We are dedicated to making our
              clients feel safe and content. For this reason, we hire only the
              most professional Security Officers to handle all potential
              high-risk situations that require unique experience, training,
              knowledge and skill sets of the security guards, supervisors and
              managers. We are proud to be a multi-cultural and multi-ethnic
              company. Eagle View Security Enterprises is committed to creating
              a diverse environment and is proud to be an equal opportunity
              employer. All qualified applicants will receive consideration for
              employment without regard to race, color, religion, gender, gender
              identity or expression, sexual orientation, national origin,
              genetics, disability, age, or veteran status. Eagle View Security
              Enterprises is also committed to compliance with all fair
              employment practices regarding citizenship and immigration status.
              Our company and security guards are licensed with the Ontario
              Ministry of Community Safety and Correctional Services. The
              clients and sites we service are diverse, ranging from
              construction sites to bustling shopping malls to manufacturing and
              production facilities and even educational institutions and banks.
            </CardDescription>
          </Card>
        </div>
      </section>
      <section className=" md:m-16 mt-10 bg-gray-900">
        <div className="items-center space-y-8 p-4 text-center lg:mt-10">
          {" "}
          <h1 className="text-3xl py-5 text-white font-bold  lg:text-10xl">
            Client Testimonials
          </h1>
          <div className="container grid grid-cols-1 text-xl text-white font-light font-sans gap-4 md:grid-cols-1">
            Ontario&apos;s Trusted Security Guard Company
          </div>
          <div className="flex items-center justify-center ">
            {" "}
            <Carousel2
              className="md:basis-1/3"
              classNameCarousel="md:w-[1000px]"
            />
          </div>
        </div>{" "}
      </section>
    </>
  );
};

export default page;
