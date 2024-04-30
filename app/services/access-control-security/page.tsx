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
          <HeadingText text="ACCESS CONTROL SERVICES" slideDirection="right" />

          <div className="grid md:grid-cols-2">
            <div className="hidden md:flex items-center justify-center">
              <Image
                src="/secc.jpg"
                alt=""
                width={300}
                height={300}
                className="object-cover"
              />
            </div>{" "}
            <div className="flex mx-10 md:hidden items-center justify-center">
              <Image
                src="/secc.jpg"
                alt=""
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <Card className="rounded-md mx-10 shadow-lg text-center justify-center">
              <CardDescription className=" md:text-lg p-10">
                Electronic devices placed at entryways of buildings and
                designated hallways that require fingerprint readings,
                passcodes, or RFID chip cards for doors to open are called
                access control systems. It&nbsp;s one of the most secure,
                hands-free ways you can provide complete protection for your
                business and employees.
              </CardDescription>
            </Card>
          </div>
          <section className=" bg-transparent lg:m-32" id="features">
            <div className="grid gap-7 md:grid-cols-2 items-center">
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-[350px]">
                <CardTitle className="p-4 text-xl">
                  Give Everyone a Better Sense of Safety
                </CardTitle>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  The rise in workplace violence over the years leaves many
                  employees and employers concerned. Installing and using an
                  access control security system is one sure way to bring
                  everyone peace of mind. You know that everyone accessing the
                  area is rightfully where they need to be. You can use it to
                  secure the entire building or simply limit access to areas
                  with sensitive information.
                </CardDescription>
              </Card>
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-[350px]">
                <CardTitle className="p-4 text-xl">
                  Control Who Has Access and When
                </CardTitle>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  One of the best features of access control systems is the
                  ability to control who can access it and when. You can limit
                  access by hours, days, or terminate access for employees that
                  are terminated. Feel more in control of the security of your
                  business and the protection of your employees and assets.
                </CardDescription>
              </Card>
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-[350px]">
                <CardTitle className="p-4 text-xl">
                  User Friendly Security Systems
                </CardTitle>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  Access control security systems are easy to use for everyone
                  at your business location. It can be set up to use RFID chip
                  technology, passcodes, or biometric access. No matter which
                  method of security you choose, it&nbsp;ll be a great
                  investment to offer the ultimate in protection.
                </CardDescription>
              </Card>{" "}
              <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-[350px]">
                <CardTitle className="p-4 text-xl">
                  Reliable Access Control Systems
                </CardTitle>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  Our security specialists at Eagle View Security will install
                  an access control system that&nbsp;s reliable and durable. You
                  can count on years of use and dependable service. We&nbsp;ll
                  make sure your system stays in top working condition. We are
                  only a phone call away if any problems arise. Contact us at
                  Eagle View Security and begin planning an access control
                  system for your business today.
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
