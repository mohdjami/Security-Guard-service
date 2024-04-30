import * as React from "react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselProps {
  className: string;
  classNameCarousel: string;
}

export const Carousel2: React.FC<CarouselProps> = ({
  className,
  classNameCarousel,
}) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className={`items-center  ${classNameCarousel}`}
    >
      <CarouselContent>
        <CarouselItem className={`${className} `}>
          <div className="p-1">
            <Card className="h-[350px]">
              <CardDescription className="grid aspect-square items-center justify-center p-6">
                I might simply want to state what a magnificent administration
                you gave us and your security watches went well beyond their
                obligations to ensure our works was protected and secure. I
                might exceedingly prescribe your organization to my companions.
              </CardDescription>
              <CardFooter>Larry</CardFooter>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className={`md:basis-1 lg:basis-1/2, ${className} `}>
          <div className="p-1">
            <Card className="h-[350px]">
              <CardDescription className="grid aspect-square items-center justify-center p-6">
                Best Security Organization in the Peel Region, Professional
                Supervisors/staff along with Professional fleet, have had their
                services for multiple events, would highly recommend their
                services! Five Elements Guards are well trained and
                professional. I have hired one guard to escort my private
                vehicle. Great Service!! Wish you all the best{" "}
              </CardDescription>
              <CardFooter>Ravneet!!</CardFooter>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className={`md:basis-1 lg:basis-1/2, ${className} `}>
          <div className="p-1">
            <Card className="h-[350px]">
              <CardDescription className="grid aspect-square items-center justify-center p-6">
                I have hired them over multiple occasions and have not had any
                issues or complaints. They provide an excellent service and we
                were at ease because of the frequent updates. Thank you!
              </CardDescription>{" "}
              <CardFooter>Amanjit K</CardFooter>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className={`md:basis-1 lg:basis-1/2, ${className} `}>
          <div className="p-1">
            <Card className="h-[350px]">
              <CardDescription className="grid  aspect-square items-center justify-center p-6 text-sm text-gray-600">
                Appreciate your service! Danielle Best Security Organization in
                the Peel Region, Professional Supervisors/staff provide
                excellent service at any kind of event , have had their services
                for multiple events, would highly recommend their services.
              </CardDescription>
              <CardFooter>Sukhi S</CardFooter>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className={`md:basis-1 lg:basis-1/2, ${className} `}>
          <div className="p-1">
            <Card className="h-[350px]">
              <CardDescription className="grid aspect-square items-center justify-center p-6">
                You grasped the significance security had on the occasion
                overall. Most of the gatekeepers on location were extremely
                proficient and accommodating all through the whole span of the
                occasion and you met these exclusive requirements.
              </CardDescription>
              <CardFooter>Daniel</CardFooter>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className=" text-white bg-gray-800" />
      <CarouselNext className="text-white bg-gray-800" />
    </Carousel>
  );
};
