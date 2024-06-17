import { EmailTemplate } from "@/components/email-template";
import { emailFormSchema } from "@/lib/validators/email-form-validator";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || "";
const toEmail = process.env.TO_EMAIL || "";

export async function POST(req: Request, res: Response) {
  const body: unknown = await req.json();

  const result = emailFormSchema.safeParse(body);
  let zodErrors: Record<string | number, string> = {};

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  const zodErrorsObjectKeys = Object.keys(zodErrors);

  if (zodErrorsObjectKeys.length > 0) {
    return NextResponse.json({ errors: zodErrors });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: result.data!.subject,
      react: EmailTemplate({
        senderEmail: result.data!.email,
        message: result.data!.message,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ errors: error }, { status: 500 });
    }

    return NextResponse.json({ data, success: true });
  } catch (error) {
    return NextResponse.json({ errors: error }, { status: 500 });
  }
}
