"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import src from "../public/logo.png"

export function AvatarLogo() {
  return (
    <Avatar>
      <AvatarImage src={src.src} />
      <AvatarFallback>N</AvatarFallback>
    </Avatar>
  )
}
