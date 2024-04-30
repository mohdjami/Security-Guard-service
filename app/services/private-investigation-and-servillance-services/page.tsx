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
            text="PRIVATE INVESTIGATION AND SURVEILLANCE SERVICES"
            slideDirection="right"
          />{" "}
          <div className="grid md:grid-cols-2">
            <div className="hidden md:flex items-center justify-center">
              <Image
                src="/security-guard-event-crowd-control.jpg"
                alt=""
                width={500}
                height={500}
                className="object-cover"
              />
            </div>{" "}
            <div className="flex mx-10 md:hidden items-center justify-center">
              <Image
                src="/security-guard-event-crowd-control.jpg"
                alt=""
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <Card className="rounded-md mx-10 shadow-lg text-center justify-center">
              <CardDescription className=" md:text-base p-10">
                {" "}
                Private Investigation Services are widely relevant and useful to
                protect many facets of your life, from corporate to personal.
                Discrete surveillance services assist in harassment and
                stalking, employee theft, child custody and divorce cases, elder
                abuse, medical malpractice claims, workers compensation claims,
                and motor vehicle accident claims. Our private investigators
                collaborate with lawyers and are professional, discrete, and
                licensed to legally obtain the highest quality evidence that can
                stand up in court, such as real time video footage,
                comprehensive and detailed reports, as well as critical photos .
              </CardDescription>
            </Card>
          </div>
          <section className=" bg-transparent lg:m-32" id="features">
            <div className="grid gap-7 md:grid-cols-2 items-center">
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-[350px]">
                <CardTitle className="p-4 text-xl">
                  Behavior Observation and Problem Intervention
                </CardTitle>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  Our security guards are experienced at monitoring individuals
                  and groups to watch for signs of suspicious behavior that
                  precedes threats, such as harassment of others, altercations,
                  violence towards others, theft and vandalism. Once these
                  behaviours are identified by our guards, they ensure that
                  physical removal of the offending individuals is done in a
                  discrete manner under the duty of care.
                </CardDescription>
              </Card>
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-[350px]">
                <CardTitle className="p-4 text-xl">
                  Loss Prevention and Shoplifting Deterrent
                </CardTitle>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  We understand the negative impact shoplifting has on any
                  retail establishment. Our security experts are trained to
                  monitor large and small groups for signs of potential
                  shoplifting. Safeguard your profits and reduce loss through
                  unnecessary theft. Give your managers and employees a way to
                  stop shoplifting in real-time.
                </CardDescription>
              </Card>
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-[500px]">
                <CardTitle className="p-4 text-xl">
                  Crowd Control and Social Distancing Compliance
                </CardTitle>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  Special events, holiday sales, and busy malls are all safer by
                  having security on hand to manage large crowds. We help block
                  areas to stop access or redirect foot traffic. Our security
                  guards can help with parking and securing areas to manage
                  crowds visiting your retail store. Covid-19 has also brought
                  social distancing mandates to the forefront. Our security
                  personnel can effectively monitor social distancing compliance
                  for the safety of everyone. Contact us at Eagle View Security
                  and find out more about the benefits of hiring private
                  security for your retail establishment or mall today.
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
