import * as React from "react";

interface EmailTemplateProps {
  senderEmail: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  senderEmail,
  message,
}) => (
  <div>
    <p>This is a message from the portfolio website email form.</p>
    <br />
    <p>This is the sender&apos;s email: {senderEmail}</p>
    <p>{message}</p>
  </div>
);
