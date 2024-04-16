"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { mobileNavAtom } from "@/atoms/mobile-nav"
import clsx from "clsx"
import { useAtom } from "jotai"

import { MainNavProps } from "@/types/nav"
import { cn } from "@/lib/utils"

interface NavListProps extends MainNavProps {
  variant?: "header" | "mobile" | "footer"
}

const navVariant = clsx(
  "flex text-sm font-medium text-muted-foreground transition-colors"
)

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
        "flex gap-6 *:w-max",
        variant === "header" ? "hidden md:flex" : "flex-col",
        variant === "footer" && "justify-end md:flex-row"
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
        currentPath === item.href && "text-foreground"
      )}
    >
      {item.title}
    </Link>
  ))
}

const linkVariant = clsx(
  "text-base underline underline-offset-4 transition-all active:text-foreground/90 active:underline-offset-8 md:hover:text-foreground/90 md:hover:underline-offset-8"
)

function MobileNav({ items }: MainNavProps) {
  const [, setOpen] = useAtom(mobileNavAtom)

  return items.map((item, index) => (
    <Link
      key={`mobile-nav-${index}`}
      href={item.href}
      onClick={() => setOpen({ open: false })}
      className={cn(navVariant, linkVariant, "flex-col")}
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
      className={cn(navVariant, linkVariant)}
    >
      {item.title}
    </Link>
  ))
}
