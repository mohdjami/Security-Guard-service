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
          <HeadingText text="IT SECURITY" slideDirection="right" />
          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/it.jpg"
              alt=""
              width={600}
              height={600}
              className="object-cover"
            />
          </div>{" "}
          <div className="flex mx-10 md:hidden items-center justify-center">
            <Image
              src="/it.jpg"
              alt=""
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <section className=" bg-transparent md:m-20" id="features">
            <Card className="flex flex-grow flex-col justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-auto">
              <CardTitle className="p-4 text-xl">
                Business Network & IT Security
              </CardTitle>
              <CardDescription className="p-4 text-sm  mb-10 ">
                Eagle View Security provides Computer Security Solutions. We
                design security information and event management (SIEM) software
                products and services for your company protection. In
                today&nbsp;s hyper-connected digital world, it&nbsp;s a given
                that all data is at risk, especially as your business begins
                growing with the number of technologies and digital workflows.
                To establish and maintain a deep level of trust with prospective
                and existing clients, you need to protect their confidential,
                sensitive data. Even high-ranking members of the Canadian and
                American Government intelligence community are vulnerable to
                hacking techniques such as phishing and social engineering.
                Moreover, your client data can be compromised by the innocent
                actions of employees who visit websites, download files, or
                click on an email link without realizing the potential dangers.
                So, it is your obligation to employ the best practices to secure
                client data and avoid landing in the news – and losing business.
              </CardDescription>
            </Card>
            <div className="grid items-center">
              <CardTitle className="p-4 text-xl">
                The 8 Security Measures Recommended By Our Specialists
              </CardTitle>{" "}
              <Card className="grid md:grid-cols-3 justify-between gap-4 p-8  m-3 justify-sta3 text-left rounded-md shadow-lg bg-transparent border-0 md:h-auto w-full">
                <CardDescription className="p-4 text-sm  mb-10 ">
                  {" "}
                  1. Verified Encryption When storing or sharing electronic
                  files and documents, make sure to apply a security protocol or
                  measure that encrypts the data both at rest and while in
                  transit. One example is key cryptography, where the sender
                  uses their “key” to encrypt a message, and the recipient uses
                  their “key” to verify the identity of the person who sent the
                  message/information and decrypt it. If your data is stored by
                  a third-party provider – such as a hosting company in the
                  cloud – make sure that company follows this best practice.{" "}
                </CardDescription>{" "}
                <CardDescription className="p-4 text-sm  mb-10 ">
                  {" "}
                  2. Information Access Control A common security measure is to
                  grant information access only on an as-needed basis. In other
                  words, every staff member in your business doesn&nbsp;t
                  require access to every document and file. Once you&nbsp;ve
                  determined who executes what responsibilities and the
                  information they need to access, you – or the vendor managing
                  your network and infrastructure – can assign appropriate
                  information access privileges.
                </CardDescription>{" "}
                <CardDescription className="p-4 text-sm  mb-10 ">
                  {" "}
                  3.Network Security The goal of network security is to prevent
                  threats from entering or spreading across your network,
                  largely by managing access to it. A variety of technologies
                  and policies are used to enable network security, including
                  firewalls, antivirus software, email security software,
                  intrusion prevention systems and more. The strongest network
                  security is based on a layered – or defense-in-depth –
                  approach that addresses every layer of the network.
                </CardDescription>{" "}
                <CardDescription className="p-4 text-sm  mb-10 ">
                  {" "}
                  4.Secure Data Storage Whether you store client information on
                  servers, portable devices, in the cloud, or somewhere else,
                  you need to make sure it&nbsp;s secure from tampering and
                  access. In addition to the layered security mentioned above,
                  common forms of protection include data encryption, access
                  control mechanisms, data-corruption protection, and physical
                  security.
                </CardDescription>{" "}
                <CardDescription className="p-4 text-sm  mb-10 ">
                  {" "}
                  5.Data Backups One threat to your client data is that you
                  simply may lose it, whether because of accidental deletion, or
                  due to a lost laptop or other issue. By regularly performing
                  data backups and copying and archiving your electronic data,
                  you will have a copy you can use in case of such losses.
                </CardDescription>{" "}
                <CardDescription className="p-4 text-sm  mb-10 ">
                  {" "}
                  6.Routine Maintenance Regularly maintaining your network and
                  all the systems connected to it can go a long way toward
                  keeping up strong security measures. The latest updates of
                  operating systems and other software often includes new code
                  to address the most recent known security threats.
                </CardDescription>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  7.Disaster Recovery In the event that your network or
                  infrastructure is brought down by either a human-induced or
                  natural event, disaster recovery makes it possible to continue
                  operating. In a nutshell, it&nbsp;s a set of plans, policies
                  and tools that make it possible for your business to resume
                  operations quickly and efficiently in such situations.
                </CardDescription>
                <CardDescription className="p-4 text-sm  mb-10 ">
                  {" "}
                  8.Staff Education You can&nbsp;t expect your staff to avoid
                  compromising activities and phishing scams and other social
                  engineering tactics if they don&nbsp;t understand the dangers.
                  Regularly educate your staff about security risks and
                  preventative measures. This can include everything from the
                  latest cybersecurity threats to best practices for Internet
                  use; sharing, storing, and disposing of client data; reporting
                  lost and stolen devices; and maintaining strong passwords.
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
