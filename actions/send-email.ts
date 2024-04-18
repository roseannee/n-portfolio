"use server"

import React from "react"
import { revalidatePath } from "next/cache"
import ContactFormEmail from "@/emails/contact-form-email"
import { Resend } from "resend"

import { contactFormSchema } from "@/lib/definitions"
import { action } from "@/lib/safe-action"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendSafeEmail = action(
  contactFormSchema,
  async ({ email, message }) => {
    const result = await resend.emails.send({
      from: "n-portfolio <onboarding@resend.dev>",
      to: "roseannee.kim@gmail.com",
      reply_to: email,
      subject: "Message from contact form",
      react: React.createElement(ContactFormEmail, {
        email: email,
        message: message,
      }),
    })

    revalidatePath("/contact")

    if (result.error) {
      throw new Error(
        `FROM ACTION Failed to send email: ${result.error.message}`
      )
    }

    return {
      success: "FROM ACTION Email sent successfully!",
    }
  }
)
