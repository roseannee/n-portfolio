import { ImageCol } from "@/components/features/home-page/image-col"
import { InfoCol } from "@/components/features/home-page/info-col"

export default function IndexPage() {
  return (
    <section className="container grid min-h-screen-with-header place-items-center gap-6 py-6 md:gap-0 md:py-10 lg:grid-cols-2">
      <InfoCol />
      <ImageCol />
    </section>
  )
}
