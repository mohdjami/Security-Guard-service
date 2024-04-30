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
          <HeadingText text="LOSS PREVENTION" slideDirection="right" />
          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/loss.jpg"
              alt=""
              width={900}
              height={900}
              className="object-cover"
            />
          </div>{" "}
          <div className="flex mx-10 md:hidden items-center justify-center">
            <Image
              src="/loss.jpg"
              alt=""
              width={900}
              height={900}
              className="object-cover"
            />
          </div>
          <Card className="md:mx-32 md:mt-10 m-10  justify-center">
            <CardDescription className="md:p-10 md:pr-3 md:pl-3 p-4 text-sm lg:text-xl mb-10 ">
              Retail shops, department stores, and malls all have specific needs
              and benefit tremendously with the addition of private security
              services. Hiring a security guard can help deter and eliminate
              many problems, including theft, altercations, and potential acts
              of violence that can emerge in crowded environments. At Eagle View
              Security, we handle all details in a way that ensures your
              property, employees, and customers are safe and that your
              customers are able to enjoy their shopping experience. Enhance
              your loss prevention strategies with the addition of our highly
              trained security guards.
            </CardDescription>
          </Card>
          <section className="bg-transparent" id="features">
            <div className="flex text-center">
              <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
                <Card className="m-10 md:mx-32 md:mt-10 text-left  justify-center">
                  <CardTitle className="p-4 text-xl">
                    Behavior Observation and Problem Intervention
                  </CardTitle>
                  <CardDescription className="p-4 md:pr-3 md:pl-3 md:text-lg mb-10">
                    Our security guards are experienced at monitoring
                    individuals and groups to watch for signs of suspicious
                    behavior that precedes threats, such as harassment of
                    others, altercations, violence towards others, theft and
                    vandalism. Once these behaviours are identified by our
                    guards, they ensure that physical removal of the offending
                    individuals is done in a discrete manner under the duty of
                    care.
                  </CardDescription>
                </Card>
                <Card className="m-10 md:mx-32 md:mt-10 text-left  justify-center">
                  {" "}
                  <CardTitle className="p-4 text-xl">
                    Loss Prevention and Shoplifting Deterrent
                  </CardTitle>
                  <CardDescription className="p-4 md:pr-3 md:pl-3 md:text-lg mb-10">
                    We understand the negative impact shoplifting has on any
                    retail establishment. Our security experts are trained to
                    monitor large and small groups for signs of potential
                    shoplifting. Safeguard your profits and reduce loss through
                    unnecessary theft. Give your managers and employees a way to
                    stop shoplifting in real-time.
                  </CardDescription>
                </Card>
                <Card className="m-10 md:mx-32 md:mt-10 text-left  justify-center">
                  {" "}
                  <CardTitle className="p-4 text-xl">
                    Crowd Control and Social Distancing Compliance
                  </CardTitle>
                  <CardDescription className="p-4 md:pr-3 md:pl-3 md:text-lg mb-10">
                    Special events, holiday sales, and busy malls are all safer
                    by having security on hand to manage large crowds. We help
                    block areas to stop access or redirect foot traffic. Our
                    security guards can help with parking and securing areas to
                    manage crowds visiting your retail store. Covid-19 has also
                    brought social distancing mandates to the forefront. Our
                    security personnel can effectively monitor social distancing
                    compliance for the safety of everyone. Contact us at Eagle
                    View Security and find out more about the benefits of hiring
                    private security for your retail establishment or mall
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
