import { z } from "zod";

export const emailFormSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(1, { message: "Subject is required." }),
  message: z.string().min(1, { message: "Message is required." }),
});

export type TEmailFormValidator = z.infer<typeof emailFormSchema>;
