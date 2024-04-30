import FeatureCards from "@/components/Features";
import HeadingAnimation from "@/components/motion-text";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
const page = () => {
  return (
    <>
      {" "}
      <HeadingAnimation description="Our Careers" />
      <section className=" md:m-16 mt-10">
        {" "}
        <div className="grid mb-5 justify-center text-center text-4xl sm:grid-cols-1">
          <div className="flex flex-grow flex-col justify-between gap-0 md:h-auto m-4 md:m-16 text-left dark:bg-secondary">
            <CardDescription className="px-10 lg:text-xl text-gray-600 text-sm">
              If you are interested in a career in the security field, Eagle
              View Security is taking applications. At Eagle View Security, we
              will train you in all security fields and help you obtain the
              appropriate licenses and accreditation. There are many benefits to
              working for our company. We offer, flexible hours, complete
              training, competitive wages, motivational staff and trainers,
              opportunities for advancement, and a comprehensive benefits
              package.
            </CardDescription>
            <CardDescription className="px-10 py-6 lg:text-xl text-gray-600 text-sm">
              We pride ourselves in offering the best security services
              available. We require all of our staff members to be of the
              highest caliber. It is our job to train you to be the best in
              security and your job as our employees to be honest, motivated,
              and reliable. Qualified candidates will be offered the opportunity
              for an exciting career. Security is more than just an ordinary
              job. We offer competitive pay and flexible working hours as well
              as incentives and bonuses.
            </CardDescription>
            <CardDescription className="px-10 py-6 lg:text-xl text-gray-600 text-sm">
              If you have any questions about our company and would like to move
              forward with your security career here at Eagle View Security,
              then call and set up an appointment at our many facilities in the
              Lake Ontario area.
            </CardDescription>
          </div>
        </div>
        <section className=" md:m-16 mt-10">
          <div className="container grid grid-cols-1 gap-10 justify-center text-center text-4xl lg:grid-cols-2">
            {" "}
            <Card className="flex flex-grow flex-col justify-between gap-4 p-10 text-center dark:bg-secondary">
              <CardTitle>Operations Officer</CardTitle>
              <CardDescription className="p-10 text-xl">
                Mississauga / Full Time{" "}
                <p className="text-center text-red-300">Apply</p>
              </CardDescription>
            </Card>{" "}
            <Card className="flex flex-grow flex-col justify-between gap-4 p-10 text-center dark:bg-secondary">
              <CardTitle>Parking Lot Supervisor</CardTitle>
              <CardDescription className="p-10 text-xl">
                Mississauga / Full Time{" "}
                <p className="text-center text-red-300">Apply</p>
              </CardDescription>
            </Card>{" "}
            <Card className="flex flex-grow flex-col justify-between gap-4 p-10 text-center dark:bg-secondary">
              <CardTitle>Electronics Engineer</CardTitle>
              <CardDescription className="p-10 text-xl">
                Mississauga / Full Time{" "}
                <p className="text-center text-red-300">Apply</p>
              </CardDescription>
            </Card>{" "}
            <Card className="flex flex-grow flex-col justify-between gap-4 p-10 text-center dark:bg-secondary">
              <CardTitle>Security Guard</CardTitle>
              <CardDescription className="p-10 text-xl">
                Mississauga / Full Time{" "}
                <p className="text-center text-red-300">Apply</p>
              </CardDescription>
            </Card>{" "}
          </div>
        </section>
      </section>
    </>
  );
};

export default page;
