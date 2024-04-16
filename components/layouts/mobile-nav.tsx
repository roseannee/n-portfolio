import { mobileNavAtom } from "@/atoms/mobile-nav"
import { useAtom } from "jotai"

import { MainNavProps } from "@/types/nav"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Icons } from "../shared/icons"
import { Button } from "../ui/button"
import { NavList } from "./nav-list"

export function MobileNav({ items }: MainNavProps) {
  const [{ open }, setOpen] = useAtom(mobileNavAtom)

  return (
    <Sheet open={open} onOpenChange={(open) => setOpen({ open })}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Icons.menu />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col space-y-2">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription className="text-balance">
            Select the page you want to move to
          </SheetDescription>
        </SheetHeader>

        <NavList items={items} variant="mobile" />
      </SheetContent>
    </Sheet>
  )
}
