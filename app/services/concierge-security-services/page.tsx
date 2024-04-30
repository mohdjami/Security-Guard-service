import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import HeadingText from "@/components/heading-text-services";
const page = () => {
  return (
    <>
      <section className="md:ml-32 mt-10">
        <div className="grid mb-10 justify-center text-center text-4xl sm:grid-cols-1">
          <HeadingText
            text="CONCIERGE SECURITY SERVICES"
            slideDirection="right"
          />{" "}
          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/concierge.jpg"
              alt=""
              width={1000}
              height={1000}
              className="object-cover"
            />
          </div>{" "}
          <div className="flex mx-10 md:hidden items-center justify-center">
            <Image
              src="/concierge.jpg"
              alt=""
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <section className=" bg-transparent lg:m-32" id="features">
            <div className="grid gap-7 md:grid-cols-2 items-center">
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-[350px]">
                <CardDescription className=" md:text-sm text-sm text p-10">
                  Condominiums and apartment buildings with security concierge
                  are popular for those wanting the feeling of extra protection
                  from the dangers of the outside world. It helps reduce the
                  odds of anyone breaking in, vandalizing property, or stealing.
                  Eagle View Security provides security concierge experts that
                  become a valued member of your organization and community..
                </CardDescription>
              </Card>{" "}
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-[350px]">
                <CardTitle className="p-4 text-xl">
                  Verify Visitor Access
                </CardTitle>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  Condominiums with front door points of access are made safer
                  with the addition of a concierge security guard. Your tenants
                  will never be surprised by unexpected or unwanted guests. You
                  can feel confident that loitering and break-ins are less
                  likely to happen.
                </CardDescription>
              </Card>
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-[350px]">
                <CardTitle className="p-4 text-xl">
                  Accept Deliveries of Mail and Packages
                </CardTitle>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  Our concierge specialists will receive and check any resident
                  mail or packages so they are kept safe and easily accessible.
                  It&nbsp;s perfect for residents who working long hours or are
                  away on vacation. Packages can be kept in a safe location for
                  the rightful recipient until it can be picked up.
                </CardDescription>
              </Card>{" "}
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-[350px]">
                <CardTitle className="p-4 text-xl">
                  Core Concierge Responsibilities
                </CardTitle>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  The condominium concierge is crucial in overseeing daily
                  operations within the residential community. Responsibilities
                  include providing initial assistance to residents, ensuring
                  building security through inspections, managing visitor entry
                  and parking permits, coordinating elevator usage, documenting
                  observations and incidents, responding to emergencies, and
                  communicating maintenance issues to management.
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
