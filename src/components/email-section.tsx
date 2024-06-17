"use client";

import { cn } from "@/lib/utils";
import {
  TEmailFormValidator,
  emailFormSchema,
} from "@/lib/validators/email-form-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import GithubIcon from "../../public/github-icon.svg";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const EmailSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<TEmailFormValidator>({
    resolver: zodResolver(emailFormSchema),
  });

  const onSubmit = async (data: TEmailFormValidator) => {
    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      toast.error("Failed to submit form! There was an error in the server.");
      return;
    }

    if (responseData.errors) {
      const errors = responseData.errors;

      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.password) {
        setError("subject", {
          type: "server",
          message: errors.subject,
        });
      } else if (errors.message) {
        setError("message", {
          type: "server",
          message: errors.message,
        });
      } else {
        toast.error("Unknown error from server. Something went wrong!");
      }

      return;
    }

    if (responseData.success) {
      toast.success("Message sent!");
      reset();
    }
  };

  return (
    <section
      className="my-12 grid py-24 md:grid-cols-2 md:gap-4 xl:pb-40"
      id="contact"
    >
      <div>
        <h5 className="my-2 text-xl font-bold">Let&apos;s Connect!</h5>
        <p className="mb-4 max-w-md text-muted-foreground">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Please contact me directly at{" "}
          <a className="underline" href="mailto:joaquin.qiufu@gmail.com">
            joaquin.qiufu@gmail.com
          </a>{" "}
          or through this form. Whether you have a question or just want to say
          hi, I&apos;ll try my best to get back to you!
        </p>

        <div className="flex gap-2">
          <Link href="https://github.com/jqiufu">
            <Image
              src={GithubIcon}
              alt="Github Icon"
              className="bg-secondary-foreground dark:bg-background"
            />
          </Link>
        </div>
      </div>

      <div>
        <form
          className="mt-4 flex flex-col gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="email">Your Email</Label>
            <Input
              {...register("email")}
              type="email"
              placeholder="your_email@example.com"
              className={cn({
                "focus-visible:ring-red-500": errors.email,
              })}
            />
            {errors?.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              {...register("subject")}
              type="text"
              placeholder="Hello! Let's connect."
              className={cn({
                "focus-visible:ring-red-500": errors.subject,
              })}
            />
            {errors?.subject && (
              <p className="text-sm text-red-500">{errors.subject.message}</p>
            )}
          </div>

          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              {...register("message")}
              placeholder="Type your message here."
              className={cn("resize-none", {
                "focus-visible:ring-red-500": errors.message,
              })}
            />
            {errors?.message && (
              <p className="text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting}>
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
