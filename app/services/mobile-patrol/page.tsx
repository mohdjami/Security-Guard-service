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
          {" "}
          <HeadingText text="MOBILE PATROL" slideDirection="right" />
          <div className="grid grid-cols-1 m-2 gap-20 lg:grid-cols-2 lg:ml-[100px]">
            {" "}
            <div className="hidden md:flex items-center justify-center">
              <Image
                src="/securityy.jpeg"
                alt="Security"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>{" "}
            <div className="flex mx-10 md:hidden items-center justify-center">
              <Image
                src="/securityy.jpeg"
                alt=""
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <Card className="rounded-md mx-10 shadow-lg text-center justify-center">
              <CardDescription className=" md:text-base p-10">
                Mobile patrol security services offer advantages over placing
                several guards in several locations. Eagle View Security can
                dispatch a mobile security unit to your location and they can
                travel quickly from one area of your operation to another.
              </CardDescription>
            </Card>
          </div>
          <section className=" bg-transparent md:m-20" id="features">
            <div className=" text-center  ">
              <div className="grid gap-7 md:grid-cols-2 items-center">
                <Card className="m-3 text-left  rounded-md shadow-lg justify-center">
                  <CardTitle className="p-4 text-xl">
                    Monitoring and Patrolling the Desired Perimeters
                  </CardTitle>
                  <CardDescription className="p-4 text-sm lg:text-sm mb-10 ">
                    Our mobile vehicle security specialists have the ability to
                    patrol wider areas than companies that use mere foot
                    patrols. Every perimeter of your property can be checked and
                    monitored at all hours of the day and night.
                  </CardDescription>
                </Card>
                <Card className="m-3 justify-sta3 text-left rounded-md shadow-lg">
                  <CardTitle className="p-4 text-xl">
                    Fast Alarm Response
                  </CardTitle>
                  <CardDescription className="p-4 text-sm lg:text-sm mb-10 ">
                    One key to keeping your property and assets secure is to
                    make sure you have a quick and real-time response to alarms.
                    Mobile security services ensure the fastest response times
                    and are available to check on unusual activity and alarms.
                    Get situations under control quickly for the best results.
                  </CardDescription>
                </Card>
                <Card className="m-3 justify-sta3 text-left rounded-md shadow-lg">
                  <CardTitle className="p-4 text-xl">
                    Loss Prevention and Traffic Control
                  </CardTitle>
                  <CardDescription className="p-4 text-sm lg:text-sm mb-10 ">
                    Controlling access to your property can be done easily using
                    mobile vehicle security services. Properties without
                    traditional barriers, such as fencing or gates, are prime
                    areas for theft of equipment or materials. Mobile security
                    experts can ride through these areas and monitor everything
                    frequently. It&nbsp;s also a useful tool for traffic control
                    with large events and gatherings.
                  </CardDescription>
                </Card>{" "}
                <Card className="m-3 justify-sta3 text-left rounded-md shadow-lg">
                  <CardTitle className="p-4 text-xl">
                    Perfect Solution for Extensive or Multiple Properties
                  </CardTitle>
                  <CardDescription className="p-4 text-sm lg:text-sm mb-10 ">
                    If you are the owner of large lots, buildings, or have
                    several properties protect, then it is a good idea to hire
                    mobile security services. We can move from one area to
                    another with ease and keep the areas monitored and
                    well-protected. Contact us at Eagle View Security today and
                    explore the security options we offer for mobile services.
                  </CardDescription>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default page;
