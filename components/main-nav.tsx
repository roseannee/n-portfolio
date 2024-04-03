import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"

import { AvatarLogo } from "./avatar-logo"
import { NavList } from "./nav-list"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <AvatarLogo />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>

      <NavList items={items} />
    </div>
  )
}
