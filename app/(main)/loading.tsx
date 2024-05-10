import { Typography } from "@/components/ui/typography"
import { Icons } from "@/components/shared/icons"

export default function Loading() {
  return (
    <section className="container flex min-h-screen-with-header-and-footer flex-col items-center justify-center space-y-5">
      <Icons.loading size={60} className="animate-spin text-muted-foreground" />
      <Typography variant="h1" className="animate-pulse">
        Loading
      </Typography>
    </section>
  )
}
