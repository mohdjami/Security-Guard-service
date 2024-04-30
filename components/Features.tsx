import { BsFire, BsLayoutTextWindowReverse } from "react-icons/bs";
import { TbDeviceAnalytics } from "react-icons/tb";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Cctv, ConstructionIcon, LassoSelect } from "lucide-react";
import { MdLocalPolice, MdSecurity } from "react-icons/md";

function Cards() {
  return (
    <>
      <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left bg-gray-900 dark:bg-secondary">
        <CardTitle className="grid text-white font-bold hover:text-red-600">
          <Link
            href="/services/loss-prevention"
            className="grid gap-4 text-left  text-l lg:text-lg "
          >
            {" "}
            <LassoSelect className="text-4xl h-10 w-10" /> Loss Prevention
          </Link>{" "}
        </CardTitle>
        <CardDescription>
          Safeguard yout business and reduce loss by preventing unnecessary
          shoplifting and theft.
        </CardDescription>
      </Card>
      <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left bg-gray-900 dark:bg-secondary">
        <CardTitle className="grid text-white font-bold hover:text-red-600">
          <Link
            href="/services/construction-sitesecurity"
            className="grid gap-4 text-left  text-l lg:text-lg "
          >
            {" "}
            <BsFire className="text-4xl h-10 w-10" /> Concierge Security
            Services
          </Link>{" "}
        </CardTitle>
        <CardDescription>
          Hire Concierge experts who are trained to provide security and
          customer service. They will conduct regular site visits, monitor your
          property, and ensure the safety of your employees and customers.
        </CardDescription>
      </Card>
      <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left bg-gray-900 dark:bg-secondary">
        <CardTitle className="grid text-white font-bold hover:text-red-600">
          <Link
            href="/services/commercial-high-rise-security"
            className="grid gap-4 text-left  text-l lg:text-lg "
          >
            {" "}
            <MdSecurity className="text-4xl h-10 w-10  " /> Commercial High-Rise
            Security
          </Link>{" "}
        </CardTitle>
        <CardDescription>
          Eagle View Security provides high-rise security services to ensure the
          safety of your residents and property. Our security guards are trained
          to handle emergencies and provide excellent customer service.
        </CardDescription>
      </Card>
      <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left bg-gray-900 dark:bg-secondary">
        <CardTitle className="grid text-white font-bold hover:text-red-600">
          <Link
            href="/services/mobile-control"
            className="grid gap-4 text-left  text-l lg:text-lg "
          >
            {" "}
            <MdLocalPolice className="text-4xl h-10 w-10 " />
            Mobile Patrol
          </Link>{" "}
        </CardTitle>
        <CardDescription>
          Comprehensive mobile vehichle patrols are available to monitor your
          property and respond to any security threats.
        </CardDescription>
      </Card>
      <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left bg-gray-900 dark:bg-secondary">
        <CardTitle className="grid text-white font-bold hover:text-red-600">
          <Link
            href="/services/construction-site-security"
            className="grid gap-4 text-left  text-l lg:text-lg "
          >
            {" "}
            <ConstructionIcon className="text-4xl h-10 w-10 " />
            Construction Site Security
          </Link>{" "}
        </CardTitle>
        <CardDescription>
          Count on professional guards to make sure nothing happens to yout
          expensive equipments during off hours
        </CardDescription>
      </Card>
      <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left bg-gray-900 dark:bg-secondary">
        <CardTitle className="grid text-white font-bold hover:text-red-600">
          <Link
            href="/services/cctv-security-camera-installation"
            className="grid  text-left  text-l lg:text-lg "
          >
            {" "}
            <Cctv className="text-4xl h-10 w-10 " /> CCTV Security Camera
            Installation
          </Link>{" "}
        </CardTitle>
        <CardDescription>
          Eagle View Security has the expertise to install security cameras in
          your home or at site.
        </CardDescription>
      </Card>
      <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left bg-gray-900 dark:bg-secondary">
        <CardTitle className="grid text-white font-bold hover:text-red-600">
          <Link
            href="/services/access-control-security"
            className="grid  text-left  text-l lg:text-lg "
          >
            {" "}
            <TbDeviceAnalytics className="text-4xl h-10 w-10 " /> Access Control
            Security
          </Link>{" "}
        </CardTitle>
        <CardDescription>
          Provides hands-free access to ensure complete protection for your
          business and employees
        </CardDescription>
      </Card>
      <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left bg-gray-900 dark:bg-secondary">
        <CardTitle className="grid text-white font-bold hover:text-red-600">
          <Link
            href="/private-investigation-and-serveillance-servies"
            className="grid gap-4 text-left  text-l lg:text-lg "
          >
            {" "}
            <Cctv className="text-4xl h-10 w-10" />
            Private Investigation & Surveillance Services
          </Link>
        </CardTitle>
        <CardDescription>
          Private investigators, professional, discrete, and licensed to legallu
          obtain the highest quality of evidence.
        </CardDescription>
      </Card>
    </>
  );
}

export default function FeatureCards() {
  return (
    <section className="bg-white" id="features">
      <div className="container space-y-8 py-12 text-center lg:py-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Cards />
        </div>
      </div>
    </section>
  );
}
