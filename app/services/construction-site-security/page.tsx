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
            text="CONSTRUCTION SITE SECURITY"
            slideDirection="right"
          />

          <div className="grid md:grid-cols-2">
            {" "}
            <div className="hidden md:flex items-center justify-center">
              <Image
                src="/const.jpg"
                alt=""
                width={400}
                height={400}
                className="object-cover"
              />
            </div>{" "}
            <div className="flex mx-10 md:hidden items-center justify-center">
              <Image
                src="/const.jpg"
                alt=""
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <Card className="rounded-md mx-10 shadow-lg text-center justify-center">
              <CardDescription className=" md:text-base p-10">
                At Eagle View Security, we understand the unique challenges and
                risks associated with construction sites. With our specialized
                security solutions, we ensure that your construction projects
                remain safe, secure, and protected from unauthorized access,
                theft, and vandalism. Our team of highly trained and experienced
                security professionals is dedicated to safeguarding your
                valuable assets, equipment, and personnel, allowing you to focus
                on the successful completion of your projects. With our
                cutting-edge technology, comprehensive risk assessments, and
                tailored security strategies, we provide a robust security
                umbrella that encompasses every aspect of your construction
                site, from perimeter protection to access control and
                surveillance. Trust Eagle View Security to be your reliable
                partner in construction site security, ensuring a safe and
                secure environment for your operations.
              </CardDescription>
            </Card>
          </div>
          <section className=" bg-transparent lg:m-32" id="features">
            <div className=" text-center  ">
              <div className="grid gap-7 md:grid-cols-2 items-center">
                <Card className="m-3 text-left  rounded-md shadow-lg justify-center">
                  <CardTitle className="p-4 text-xl">
                    Protect Your Construction Site & Equipment
                  </CardTitle>
                  <CardDescription className="p-4 text-sm lg:text-sm mb-10 ">
                    It may seem difficult for someone to remove heavy machinery,
                    equipment, and materials from your site in the middle of the
                    night – but this happens all too often. Thieves are well
                    equipped and prepared for such large-scale thefts. We can
                    help you secure the location and guard it against theft or
                    vandalism. We offer stationary security services
                    strategically placed at your site to make sure nothing
                    interrupts your construction project.
                  </CardDescription>
                </Card>
                <Card className="m-3 justify-sta3 text-left rounded-md shadow-lg">
                  <CardTitle className="p-4 text-xl">
                    The Benefits of Expanding Construction Security Beyond
                    Cameras
                  </CardTitle>
                  <CardDescription className="p-4 text-sm lg:text-sm mb-10 ">
                    Lights and cameras might help deter the theft of materials
                    and heavy equipment from construction sites, but it does not
                    replace the interaction and trained eye of a live security
                    guard. Implementing the addition of stationary and mobile
                    security guards at your construction site will give you a
                    better chance to catch criminal activity before it even
                    happens. Your assets will remain protected.
                  </CardDescription>
                </Card>
                <Card className="m-3 text-left  rounded-md shadow-lg justify-center">
                  <CardTitle className="p-4 text-xl">
                    Choose Full-Time Security or Off-Hours
                  </CardTitle>
                  <CardDescription className="p-4 text-sm lg:text-sm mb-10">
                    Our stationary security guards are available 24-hours a day,
                    or you can choose to have them at your location simply
                    during the off-hours when everything on the site is more
                    vulnerable. It’s an affordable way to make sure your project
                    will get done without any hindrances. Contact us here at
                    Eagle View Security and begin planning the security details
                    you need for your new or existing construction project
                    today.
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
