import FeatureCards from "@/components/Features";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { BsFire, BsLayoutTextWindowReverse } from "react-icons/bs";
import { RxActivityLog } from "react-icons/rx";
import { TbDeviceAnalytics } from "react-icons/tb";
import Image from "next/image";
import HeadingText from "@/components/heading-text-services";
const page = () => {
  return (
    <>
      <section className="md:ml-32 mt-10">
        <div className="grid mb-10 justify-center text-center text-4xl sm:grid-cols-1">
          <HeadingText
            text=" CCTV SECURITY CAMERA INSTALLATON"
            slideDirection="right"
          />{" "}
          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/cctvv.jpg"
              alt=""
              width={400}
              height={400}
              className="object-cover"
            />
          </div>{" "}
          <div className="flex mx-10 md:hidden items-center justify-center">
            <Image
              src="/cctvv.jpg"
              alt=""
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <section className=" bg-transparent lg:m-32" id="features">
            <div className="grid gap-7 md:grid-cols-2 items-center">
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-[400px]">
                <CardDescription className=" md:text-sm text-sm text p-10">
                  Closed Caption Television or CCTV is a common feature that
                  businesses choose to add a layer of protection to the existing
                  security measures already in place. At Eagle View Security, we
                  offer some of the best CCTV cameras available on the market
                  and quality installation to ensure you get the best video.
                </CardDescription>
              </Card>
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-[400px]">
                <CardTitle className="p-4 text-xl">
                  Quit Worrying About Intrusion, Theft, or Vandalism
                </CardTitle>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  Theft and vandalism to your property can cost a fortune over
                  time. Broken windows, slashed tires, missing equipment, or
                  break-ins can all lead to the possibility of a violent
                  confrontation. You can minimize this risk by adding a CCTV
                  system. It provides you an opportunity to see what&nbsp;s
                  going on inside and outside your business at any time. You can
                  monitor employees to ensure everything is going well.
                  It&nbsp;s perfect for businesses running more than one
                  location.
                </CardDescription>
              </Card>
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-[400px]">
                <CardTitle className="p-4 text-xl">
                  Proper Placement of Equipment
                </CardTitle>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  Our security system installation specialists will study the
                  layout of your business and discuss your needs before choosing
                  the best locations for cameras. You can feel confident that
                  the placement will be perfect and capture the right area from
                  the correct angles. You&nbsp;ll be able to see what&nbsp;s
                  going on clearly and without any hindrances in the
                  environment. We make sure you&nbsp;re happy with the results
                  before leaving your business.
                </CardDescription>
              </Card>
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-[400px]">
                <CardTitle className="p-4 text-xl">
                  Get the Equipment You Need for Indoor and Outdoor Use
                </CardTitle>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  All of the CCTV equipment we install is of excellent quality.
                  We have cameras perfect for indoor and outdoor use. We will
                  match your CCTV monitoring needs with the perfect equipment.
                  Not every camera works to get the images you need in crowded
                  or darker areas. Our installation process will get you the
                  best results possible. Call on us at Eagle View Security
                  Security to get the perfect CCTV security system installed
                  right away.
                </CardDescription>
              </Card>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default page;
