"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { mobileNavAtom } from "@/atoms/mobile-nav"
import { useAtom } from "jotai"

import { MainNavProps } from "@/types/nav"
import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui/button"

interface NavListProps extends MainNavProps {
  variant?: "header" | "mobile" | "footer"
}

const navVariant =
  "flex text-sm font-medium text-muted-foreground transition-colors"

export function NavList({ items, variant = "header" }: NavListProps) {
  const renderNav = () => {
    switch (variant) {
      case "header":
        return <HeaderNav items={items} />
      case "mobile":
        return <MobileNav items={items} />
      case "footer":
        return <FooterNav items={items} />
      default:
        return null
    }
  }

  return items.length ? (
    <nav
      className={cn(
        "flex gap-6",
        variant === "header" ? "hidden md:flex" : "flex-col"
      )}
    >
      {renderNav()}
    </nav>
  ) : null
}

function HeaderNav({ items }: MainNavProps) {
  const currentPath = usePathname()

  return items.map((item, index) => (
    <Link
      key={`header-nav-${index}`}
      href={item.href}
      className={cn(
        navVariant,
        "items-center hover:text-foreground/90",
        currentPath === item.href && "text-foreground",
        item.isHidden && "hidden"
      )}
    >
      {item.title}
    </Link>
  ))
}

function MobileNav({ items }: MainNavProps) {
  const [, setOpen] = useAtom(mobileNavAtom)

  return items.map((item, index) => (
    <Link
      key={`mobile-nav-${index}`}
      href={item.href}
      onClick={() => setOpen({ open: false })}
      className={cn(
        navVariant,
        "flex-col",
        buttonVariants({ variant: "secondary" })
      )}
    >
      {item.title}
    </Link>
  ))
}

function FooterNav({ items }: MainNavProps) {
  return items.map((item, index) => (
    <Link
      key={`footer-nav-${index}`}
      href={item.href}
      className={cn(navVariant, "flex-col")}
    >
      {item.title}
    </Link>
  ))
}
