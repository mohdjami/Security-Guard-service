import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  text: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  text,
}) => (
  <div>
    <h1>From, {firstName}!</h1>
    <p>{text}</p>
  </div>
);
