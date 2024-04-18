import { z } from "zod"

export const contactFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  message: z
    .string()
    .trim()
    .min(1, { message: "This field has to be filled." }),
})
