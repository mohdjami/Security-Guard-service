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
      <section className=" md:ml-32 mt-10">
        <div className="grid  mb-10 justify-center text-center text-4xl sm:grid-cols-1">
          <HeadingText
            text="COMMERCIAL HIGH RISE SECURITY"
            slideDirection="right"
          />

          <div className="grid md:grid-cols-2 md:gap-0">
            {" "}
            <div className="hidden md:flex items-center justify-center">
              <Image
                src="/commercial.jpg"
                alt=""
                width={400}
                height={400}
                className="object-cover shadow-sm rounded-md"
              />
            </div>{" "}
            <div className="flex mx-10 md:hidden items-center justify-center">
              <Image
                src="/commercial.jpg"
                alt=""
                width={500}
                height={500}
                className="object-cover shadow-sm rounded-md"
              />
            </div>
            <Card className="rounded-md mx-10 shadow-lg text-center justify-center">
              <CardDescription className=" md:text-base p-10">
                At Eagle View Security, we specialize in providing comprehensive
                security solutions tailored to the unique demands of commercial
                high-rise properties. Our team of highly trained professionals
                understands the complexities involved in securing multi-story
                buildings, ensuring the safety of tenants, visitors, and
                valuable assets. With our state-of-the-art technology, including
                advanced access control systems, integrated surveillance
                networks, and cutting-edge monitoring capabilities, we create a
                secure environment that inspires confidence. Our proactive
                approach to risk assessment and threat mitigation allows us to
                identify and address potential vulnerabilities before they
                become issues. From lobby and elevator monitoring to
                floor-by-floor patrols and emergency response protocols, we
                leave no stone unturned in our commitment to protecting your
                commercial high-rise property. Trust Eagle View Security to be
                your reliable partner in maintaining a safe and secure
                environment for your tenants, employees, and visitors.
              </CardDescription>
            </Card>
          </div>
          <section className=" bg-transparent lg:m-32" id="features">
            <div className=" text-center  ">
              <div className="grid gap-7 md:grid-cols-2 items-center">
                <Card className="m-3 text-left  rounded-md border-0  justify-center">
                  <CardTitle className="p-4 text-xl">
                    Providing a Professional Appearance
                  </CardTitle>
                  <CardDescription className="p-4 text-sm lg:text-sm mb-10 ">
                    Security is often the first face visitors to your building
                    see. You’ll find that every security professional sent to
                    your location represents your corporation well. All
                    personnel conduct themselves as if they were part of your
                    organization. The uniforms look sharp and well-suited for
                    the job at hand.
                  </CardDescription>
                </Card>
                <Card className="m-3 text-left  rounded-md border-0  justify-center">
                  <CardTitle className="p-4 text-xl">
                    Access Control and CCTV Monitoring
                  </CardTitle>
                  <CardDescription className="p-4 text-sm lg:text-sm mb-10 ">
                    You can count on security specialists experienced in
                    assessing the threat risk in any situation. All problems and
                    potential problems will be handled as discreetly and
                    completely as possible. You’ll receive full documentation in
                    timely written reports for any necessary inspections. All
                    daily reports are done and made available when needed.
                  </CardDescription>
                </Card>
                <Card className="m-3 text-left  rounded-md border-0  justify-center">
                  <CardTitle className="p-4 text-xl">
                    Grounded and Mobile Capabilities
                  </CardTitle>
                  <CardDescription className="p-4 text-sm lg:text-sm mb-10 ">
                    Eagle View Security can provide both stationary and mobile
                    security specialists. Mobile units can patrol the outside
                    and any associated parking areas. You’ll get complete
                    security flexibility with one company. All security guards
                    are able to handle emergency situations both in and outside
                    of your high-rise building. Contact us today at Eagle View
                    Security and talk to us about your high-rise security needs.
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
