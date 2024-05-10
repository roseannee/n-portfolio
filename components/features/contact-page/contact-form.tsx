"use client"

import { useRef } from "react"
import { sendSafeEmail } from "@/actions/send-email"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAction } from "next-safe-action/hooks"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { contactFormSchema } from "@/lib/definitions"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/shared/icons"

// TODO reset form after success
export function ContactForm() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })

  // TODO cleanup
  const { execute, status } = useAction(sendSafeEmail, {
    onSuccess(data, input) {
      console.log("HELLO FROM ONSUCCESS", data, input)

      toast({
        title: "The email has been successfully sent!",
        description:
          "Thank you for the connection ❤️ I will take a look at it and provide feedback as soon as possible!",
      })
    },

    onError(error, input) {
      console.log("OH NO FROM ONERROR", error, input)

      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "I'm so sorry, but your request could not be processed. Meanwhile you can email me directly.",
      })
    },

    onExecute(input) {
      console.log("HELLO FROM ONEXECUTE", input)

      toast({
        description: "Sending email...",
      })
    },
  })

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    execute(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={status === "executing"}
          className="!mt-8 gap-2"
        >
          {status === "executing" ? (
            <>
              Sending... <Icons.loader className="animate-spin" />
            </>
          ) : (
            <>
              Submit <Icons.send />
            </>
          )}
        </Button>
      </form>

      <Toaster />
    </Form>
  )
}