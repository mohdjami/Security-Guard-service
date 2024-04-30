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
          <HeadingText text="FIRE WATCH SECURITY" slideDirection="right" />
          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/fire.webp"
              alt=""
              width={600}
              height={600}
              className="object-cover"
            />
          </div>{" "}
          <div className="flex mx-10 md:hidden items-center justify-center">
            <Image
              src="/fire.webp"
              alt=""
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <section className=" bg-transparent lg:m-32" id="features">
            <div className="grid gap-7 md:grid-cols-1 items-center">
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-auto">
                <CardTitle className="p-4 text-xl">
                  Emergency Security Solutions
                </CardTitle>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  Things do happen unexpectedly. Emergencies are part of
                  everyday problem solving for a business or property manager.
                  From alarms going off or gate trespassing to a disgruntled
                  employee, vandalism or fire watch. Eagle View Security will be
                  there when these circumstances occur. Eagle View Security
                  guards are trained and equipped to respond urgently, providing
                  a reliable security presence to solve problems calmly and
                  safely. We provide coverage 24 hours a day, 7 days week.
                  Specifically to Fire Watch, our staff implement the following:
                  Floor By Floor Time Sheets Knowledge of all Fire Devices such
                  as Flow Devices, Smoke Detectors, Heat Detectors, Sprinklers,
                  Red Pull Stations, Valves etc. Communication with the Fire
                  Department along with other emergency services Fire Panel
                  Trained Having knowledge of how a fire panel works along with
                  how its associated fire devices communicate with the fire
                  panel makes our security the number 1 choice for fire watch.
                  Being knowledgeable of your environment and truly
                  understanding our purpose of fire watch coverage allows our
                  staff to know what to look out for. Its not just about looking
                  out for fire, but also acting as a preventative measure
                  similar to how fire devices work.
                </CardDescription>
              </Card>
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-auto">
                <CardTitle className="p-4 text-xl">
                  Emergency Security Benefits
                </CardTitle>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  Emergencies of any kind require a prompt response. Just the
                  word ‘emergency’ can be anxiety inducing and stressful. Eagle
                  View Security trains precisely for emergencies of all kinds.
                  The goal for all our security guards is to think quickly, be
                  resourceful and provide a trustworthy authoritative presence
                  that leads to crisis resolution. Here are a few reasons to
                  work with us: Public safety assistance and tactics Emergency
                  Fire Watch, prevention and protection Collaborate and adhere
                  to Fire Safety Plan Medical response procedures Surveillance,
                  monitoring, and documentation Crowd control Crisis management
                </CardDescription>
              </Card>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <Image
                src="/fire-d.png"
                alt=""
                width={600}
                height={600}
                className="object-cover"
              />
            </div>{" "}
            <div className="flex mx-10 md:hidden items-center justify-center">
              <Image
                src="/fire-d.png"
                alt=""
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default page;
