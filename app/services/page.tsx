import FeatureCards from "@/components/Features";
import HeadingText from "@/components/heading-text-services";
import { ServicesMenu } from "@/components/service-menu-navig";
import { Card } from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <>
      <section className="  md:ml-32 mt-10">
        <HeadingText
          text="Premium Security Services"
          subheading="Professional Concierge & Security Guard Services"
          slideDirection="right"
        />
        <FeatureCards />
      </section>
      <section className="bg-gray-50 md:ml-32 mt-10 h-[400px] md:h-screen">
        {" "}
        <div className="container grid gap-10 justify-center text-center text-4xl lg:grid-cols-1">
          {" "}
          <h1 className="items-center bg-gray-600 mx-4 text-lg md:text-6xl md:p-4 md:rounded font-bold text-white text-center mb-4">
            {" "}
            Working With Eagle View Security{" "}
          </h1>
          <Card className="text-sm  p-4 md:text-2xl md:p-10 md:px-32 ">
            {" "}
            Here at Eagle View Security, we Cardride ourselves with having
            long-term, positive business relationships with many happy clients
            in Ontario and surrounding areas across Ontario. Our clients know
            and trust our honesty and zeal in providing state of the art
            protection. Our highly-trained security officers are held to strict
            regulatory standards verified by our senior members of staff using
            documented quality procedures.
          </Card>
        </div>
      </section>
    </>
  );
};

export default page;
