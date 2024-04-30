import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import React from "react";
import { BsFire, BsLayoutTextWindowReverse } from "react-icons/bs";
import { RxActivityLog } from "react-icons/rx";
import { TbDeviceAnalytics } from "react-icons/tb";
import Image from "next/image";
import HeadingAnimation from "@/components/motion-text";
const page = () => {
  return (
    <>
      {" "}
      <HeadingAnimation
        text="Hiring Eagle View Security"
        description="Our Benefits"
        title="And the benefits for your small business"
      />
      <section className=" md:m-16 mt-10">
        {" "}
        <div className="grid  mb-5 justify-center text-center text-4xl sm:grid-cols-1">
          {" "}
          <Card className="flex flex-grow flex-col justify-between gap-4 md:h-auto m-4 md:m-16 text-left dark:bg-secondary">
            <CardDescription className="p-10 lg:text-xl text-gray-900 text-sm">
              All businesses, big or small, have to face the reality that
              unlawful activities, such as theft, assault, and vandalism can
              take place on their premises. Certain businesses, such as banks,
              gas stations, and retail stores are more vulnerable to invasion
              and are commonly targeted by thieves more so than other types of
              businesses. That is why successful businesses of all sectors
              invest in safeguarding their enterprise by hiring a security
              company. The watchful eye of a security guard not only deters
              anyone who may be thinking of committing theft, the security guard
              is also a valuable liaison between your customers and staff; they
              help facilitate entry and traffic inside your business and assist
              your employees. Listed below are some of the many reasons why
              successful businesses choose to hire a security company.
            </CardDescription>
          </Card>
        </div>
        <div className="container grid grid-cols-1 gap-3 justify-center text-center text-4xl lg:grid-cols-2">
          {" "}
          <div className="pt-4 ml-5">
            <Image
              src="/mall-security.jpg"
              alt=""
              width={700}
              height={700}
              className="object-cover"
            />
          </div>
          <Card className="flex flex-grow flex-col justify-between gap-2 p-5 lg:p-10 text-left dark:bg-secondary">
            <CardTitle>Peace of Mind</CardTitle>
            <CardDescription className=" lg:text-base">
              The watchful eye and presence of a security guard at your business
              is shown to be the best deterrent to crime. Having security
              personnel at your entrance or circulating the floor helps to
              provide peace of mind to the business owner, customers, and
              employees. For businesses in high-risk industries and locations,
              having a security guard on site allows your employees to be more
              productive and stay focused on their work as they are not wasting
              time on security issues. Hiring a security company for high-risk
              businesses can also increase employee retention as they feel safe
              at work. Customers appreciate seeing a security guard at your
              business , it helps them realize that the business cares about
              their well-being and is willing to take steps to ensure their
              safety. This can be crucial for businesses located in busy or
              high-crime areas or ones that sell high priced products. Security
              guards also greet your customers and make them feel welcome in
              your store.
            </CardDescription>
          </Card>{" "}
          <Card className="flex flex-grow flex-col justify-between gap-4 p-10 lg:p-20 text-left dark:bg-secondary">
            <CardTitle>Crime Prevention</CardTitle>
            <CardDescription className=" lg:text-base">
              Simply having a security guard stationed and present at your
              business is a powerful deterrent to crime. Thieves will often
              target companies without security and leave those with a uniformed
              security guard present alone. Professional security companies
              train their guards to look for suspicious activity so they can
              react quickly and keep everyone safe. An interEagle View Security
              guard is shown to be a much more powerful deterrent to crime and
              theft than a passive security camera.
            </CardDescription>
          </Card>{" "}
          <div className="">
            <Image
              src="/crime.jpg"
              alt="Crime prevention"
              width={650}
              height={700}
              className="object-cover"
            />
          </div>{" "}
          <div className="items-left">
            <Image
              src="/security-guard-event-crowd-control.jpg"
              alt="Security  Guard Event - Crowd Control"
              width={650}
              height={700}
              className="object-cover"
            />
          </div>{" "}
          <Card className="flex flex-grow flex-col justify-between gap-4 p-10 lg:p-20 text-left dark:bg-secondary">
            <CardTitle>Dealing with Crime</CardTitle>
            <CardDescription className=" lg:text-base">
              Security companies train their guards in not only crime
              prevention, but how to manage a situation in which unlawful acts
              are committed. However, the level and stringency of training
              varies between companies. Some guards may simply take down
              information and contact the police, while others may detain
              suspects until the police arrive. Many security companies also
              offer armed, and unarmed guards, and it is up to the business to
              decide what type of security is best for them, and how a crime
              should be handled.
            </CardDescription>
          </Card>{" "}
          <Card className="flex flex-grow flex-col justify-between gap-4 p-10 lg:p-20 text-left dark:bg-secondary">
            <CardTitle>Monitoring</CardTitle>
            <CardDescription className=" lg:text-base">
              Security companies offer many different types of services. Certain
              services may better suit a particular type of business than
              others. While security guards typically spend a lot of time
              performing active patrol on a property, they are also often
              employed to monitor video cameras, check the credentials of
              visitors and facilitate access control, or watch for shoplifters.
              Having Eagle View Security on hand to take care of these
              monitoring tasks takes a huge burden off the business owner or
              manager and allows them to stay focused on running and managing
              their business.
            </CardDescription>
          </Card>{" "}
          <div className="">
            <Image
              src="/monitor.jpg"
              alt=""
              width={650}
              height={700}
              className="object-cover"
            />
          </div>
        </div>
        <div className=" bg-gray-900 md:m-8 mt-10 h-auto">
          <Card className="flex flex-grow flex-col justify-between gap-4 m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-auto">
            {" "}
            <CardTitle className="text-center pt-5">
              {" "}
              <HeadingAnimation
                description="TO SUM UP"
                title="We are here to ptotect your business"
              />
            </CardTitle>
            <CardDescription className="mb-10 text-center text-xl  text-gray-300 px-10">
              Hiring Eagle View Security to take care of day to day security
              tasks and deal with any crime is a good idea for any business.
              Knowing that a trained security guard is on premises gives peace
              of mind to all employees, customers, and you, the business owner.
              In most cases, the cost of hiring a security company is far
              outweighed by the sense of security that it gives everyone
              involved with the company.
            </CardDescription>
          </Card>
        </div>
      </section>{" "}
      <HeadingAnimation
        description="Questions to Ask"
        title="other factors to consider"
      />
      <section className=" md:m-16 mt-10">
        <div className="grid  mb-10 justify-center text-center text-4xl sm:grid-cols-1">
          <Card className="flex flex-grow flex-col justify-between gap-4 m-8 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-auto">
            <CardDescription className=" md:text-lg text-sm text-gray-900 text p-10">
              Whether you are hosting a large conference, trade show or you are
              having a wedding, event security is essential to ensure everything
              runs smoothly. Before you consider hiring event security, you
              should be aware of what scope of security services to request. You
              should also consider how many guards you will need according to
              the number of attendees you will host. Security companies require
              dates and time the event will take place, number of attendees, as
              well as any special services you require. For example, do you
              require armed or unarmed security guards? Will you need guards to
              stay after hours or overnight or just during event hours? Do you
              require security guard dogs? Will you require parking control?
              With this information on hand, you can begin to contact local
              security companies and decide which one best suits your needs.
              However, there are some other things that you may need to
              consider.
            </CardDescription>
          </Card>
        </div>

        <div className="container grid grid-cols-1 gap-3 justify-center text-center text-4xl lg:grid-cols-2">
          {" "}
          <Card className="flex flex-grow flex-col space-y-10 p-10 lg:p-20 text-left border-opacity-0 border-0 bg-transparent dark:bg-secondary">
            <CardTitle className="bg-gray-900 p-4 rounded-lg text-white shadow-sm">
              Does My Event Need a Security Company?
            </CardTitle>
            <CardDescription className=" md:text-base text-sm text-gray-600 text p-4">
              {" "}
              Many event hosts may not feel that security is necessary or
              important. However, event security is essential as a small slip-up
              can lead to bad publicity, lawsuits, and fines. Regardless of
              whether it is a large public event or a small gathering, hiring a
              security company can help to ensure that the event runs smoothly.
              When organizing an event, ask yourself some important questions to
              determine whether hiring a security company is necessary or not.
            </CardDescription>
          </Card>{" "}
          <Card className="flex flex-grow flex-col space-y-10 p-10 lg:p-20 text-left border-opacity-0 border-0 bg-transparent dark:bg-secondary">
            <CardTitle className="bg-gray-900 p-4 rounded-lg text-white shadow-sm">
              What Could Possibly Go Wrong?
            </CardTitle>
            <CardDescription className=" md:text-base text-sm text-gray-600 text p-4">
              {" "}
              There are many situations at an event that are potential security
              issues. These typically include things like underage drinking,
              fights and weapons, excessive alcohol consumption, fires,
              vandalism, rioting, looting, and medical emergencies. While it is
              easy to think that these issues will not happen at an event you
              are organizing, think again. It is better to be well prepared in
              case something awful should happen.
            </CardDescription>
          </Card>{" "}
          <Card className="flex flex-grow flex-col  gap-4 p-10 lg:p-20 text-left border-opacity-0 border-0 bg-transparent dark:bg-secondary">
            <CardTitle className="bg-gray-900 p-4 rounded-lg text-white shadow-sm">
              What Will I Need From Security Guards?
            </CardTitle>
            <CardDescription className=" md:text-base text-sm text-gray-600 text p-4">
              {" "}
              A good security company will be able to follow directions on what
              services you need. An EXCELLENT security company will not only
              accommodate your needs, but be able to forecast potential safety
              concerns for your event that you may not have thought of based on
              their expertise and extensive experience. Once a list of potential
              security risks has been identified, it is time to start thinking
              about what else event security guards will be required to do. Many
              security companies train their guards to be able to multitask,
              including monitoring entry and exit of attendees throughout the
              premises, keeping a watchful eye on security cameras, patrolling
              event locations, facilitate parking control, checking handbags,
              interacting with event employees and the general public, and
              handling any issues that may arise. Allow yourself to envision how
              the event will take place. Discuss this vision with the security
              company you have decided to hire. A customer driven security
              company will consider your vision and outline their
              recommendations for what services you need. Describe any special
              procedures you need the guards to follow. This will help ensure
              that you hire a security company that tailors services to your
              needs.
            </CardDescription>
          </Card>{" "}
          <Card className="flex flex-grow flex-col space-y-10 p-10 lg:p-20 text-left border-opacity-0 border-0 bg-transparent dark:bg-secondary">
            <CardTitle className="bg-gray-900 p-4 rounded-lg text-white shadow-sm">
              How Much Coverage Will I Need?
            </CardTitle>
            <CardDescription className=" md:text-base text-sm text-gray-600 text p-4">
              {" "}
              The final question you should ask is yourself is how much coverage
              your event will need. This will help you determine exactly how
              many guards you will need on hand at all times. When making this
              decision, make sure to factor in every possible consideration to
              ensure that you have adequate security for your event.
            </CardDescription>
          </Card>{" "}
        </div>
      </section>
    </>
  );
};

export default page;
