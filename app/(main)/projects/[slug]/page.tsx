import { getCollectionData } from "@/lib/data"
import { Typography } from "@/components/ui/typography"
import { CarouselWithModels } from "@/components/features/projects-page/carousel-with-models"

export default async function PortfolioCollectionPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const { title, models, images, links } = await getCollectionData(slug)

  return (
    <section className="container flex min-h-screen-with-header flex-col space-y-10 py-6 md:py-10">
      <Typography variant="h1">{title}</Typography>

      {models?.length ? (
        <CarouselWithModels models={models} images={images} links={links} />
      ) : (
        <Typography
          variant="muted"
          className="flex flex-1 items-center justify-center italic"
        >
          No models in this collection...
        </Typography>
      )}
    </section>
  )
}
