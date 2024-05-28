import { z } from "zod"

export const contactFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email has to be filled." })
    .email("This is not a valid email."),
  message: z
    .string()
    .min(1, { message: "Message has to be filled." })
    .refine((value) => value.trim(), {
      message: "Message cannot be an empty field.",
    }),
})
