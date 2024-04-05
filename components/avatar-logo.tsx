"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import logo from "../public/logo.png"
import Typography from "./typography"

export function AvatarLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Avatar>
        <AvatarImage src={logo.src} />
        <AvatarFallback>N</AvatarFallback>
      </Avatar>

      <Typography className="font-bold">{siteConfig.name}</Typography>
    </Link>
  )
}
