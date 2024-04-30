import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { JSX, SVGProps } from "react";

export default function Component() {
  return (
    <div className="grid md:grid-cols-[250px_1fr] h-screen">
      <div className="hidden md:flex flex-col border-r border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="flex items-center gap-2">
            <img
              alt="Avatar"
              className="rounded-full"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width={40}
            />
            <div className="flex flex-col">
              <h4 className="font-semibold">John Doe</h4>
              <small className="text-xs leading-none text-gray-500 dark:text-gray-400">
                Security Guard
              </small>
            </div>
          </div>
          <div className="grid gap-2 mt-4">
            <Link className="flex items-center gap-2 font-medium" href="#">
              <HomeIcon className="w-4 h-4" />
              Dashboard
            </Link>
            <Link
              className="flex items-center gap-2 font-medium text-blue-600"
              href="#"
            >
              <CalendarIcon className="w-4 h-4" />
              Schedule
            </Link>
            <Link className="flex items-center gap-2 font-medium" href="#">
              <FileIcon className="w-4 h-4" />
              Reports
            </Link>
            <Link className="flex items-center gap-2 font-medium" href="#">
              <MessageSquareIcon className="w-4 h-4" />
              Messages
            </Link>
            <Link className="flex items-center gap-2 font-medium" href="#">
              <SettingsIcon className="w-4 h-4" />
              Settings
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <header className="flex items-center gap-4 px-4 md:px-6 py-4 border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
          <Button className="rounded-md md:hidden" size="icon">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <h2 className="font-semibold text-lg">Services</h2>
          <Button size="sm" variant="outline">
            <PlusIcon className="w-4 h-4 mr-2" />
            New
          </Button>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="container flex flex-col gap-4">
            <Card>
              <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 py-4 md:py-6">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">
                    Access Control and Identity Verification
                  </h3>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                    Prevent unauthorized entry to your premises and ensure
                    safety.
                  </p>
                </div>
                <div className="ml-auto grid gap-1">
                  <h4 className="text-sm font-semibold">Status</h4>
                  <Badge>Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex flex-col gap-1">
                  <small className="text-sm font-semibold">Description</small>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Our security team is trained to handle access control,
                    manage visitors, and verify the identity of employees and
                    guests entering your facility. We ensure that only
                    authorized personnel gain access to restricted areas,
                    providing a safe and secure environment for your business.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <small className="text-sm font-semibold">Features</small>
                  <ul className="list-disc list-inside grid gap-2 text-sm">
                    <li>Visitor registration and badge issuance</li>
                    <li>Access monitoring and logging</li>
                    <li>Identity verification and authentication</li>
                    <li>Integration with access control systems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 py-4 md:py-6">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">
                    Security Patrol and Surveillance
                  </h3>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                    Keep a watchful eye on your premises and respond to security
                    threats.
                  </p>
                </div>
                <div className="ml-auto grid gap-1">
                  <h4 className="text-sm font-semibold">Status</h4>
                  <Badge variant="secondary">Inactive</Badge>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex flex-col gap-1">
                  <small className="text-sm font-semibold">Description</small>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Our security patrol services provide comprehensive coverage
                    of your premises, with trained guards conducting regular
                    patrols to detect and deter unauthorized access, theft,
                    vandalism, and other security breaches. We employ advanced
                    surveillance technologies and follow predefined patrol
                    routes to ensure complete monitoring of your site.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <small className="text-sm font-semibold">Features</small>
                  <ul className="list-disc list-inside grid gap-2 text-sm">
                    <li>Mobile and foot patrols</li>
                    <li>Surveillance camera monitoring</li>
                    <li>Incident response and reporting</li>
                    <li>Customized patrol schedules</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 py-4 md:py-6">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Event Security Services</h3>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                    Ensure safety and order at your events with professional
                    security.
                  </p>
                </div>
                <div className="ml-auto grid gap-1">
                  <h4 className="text-sm font-semibold">Status</h4>
                  <Badge>Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex flex-col gap-1">
                  <small className="text-sm font-semibold">Description</small>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Our event security services are designed to provide a safe
                    and secure environment for your guests, performers, and
                    staff. We offer comprehensive security solutions for all
                    types of events, including concerts, festivals, corporate
                    functions, and private parties. Our team of experienced
                    security professionals works closely with event organizers
                    to assess security risks, develop customized security plans,
                    and implement appropriate security measures to mitigate
                    potential threats and ensure the smooth conduct of the
                    event.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <small className="text-sm font-semibold">Features</small>
                  <ul className="list-disc list-inside grid gap-2 text-sm">
                    <li>Access control and crowd management</li>
                    <li>Bag checks and metal detector screening</li>
                    <li>Perimeter security and VIP protection</li>
                    <li>Emergency response and evacuation procedures</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function CalendarIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function FileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MessageSquareIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SettingsIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
