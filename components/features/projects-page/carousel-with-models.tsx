"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { urlForPath } from "@/sanity/lib/file"
import useEmblaCarousel from "embla-carousel-react"

import {
  CollectionData,
  CollectionImagesData,
  CollectionLinksData,
} from "@/lib/sanity"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Model } from "@/components/model"

import { Thumb } from "./thumb"

type CarouselWithModelsProps = {
  models: CollectionData["models"]
  images: CollectionImagesData["images"]
  links: CollectionLinksData["links"]
}

export function CarouselWithModels({
  models,
  images,
  links,
}: CarouselWithModelsProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  })

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const onThumbClick = useCallback(
    (index: number) => {
      if (!api || !thumbApi) {
        return
      }

      api.scrollTo(index)
    },
    [api, thumbApi]
  )

  return (
    <Carousel
      setApi={setApi}
      opts={{
        watchDrag: false,
        watchResize: false,
        containScroll: "trimSnaps",
      }}
      className="mx-auto w-full md:w-2/3 lg:w-1/2"
    >
      {/* FIXME height & rounded-md */}
      <CarouselContent className="h-96 *:rounded-md">
        {/* TODO check if models === null */}
        {models!.map((model, index) => (
          <CarouselItem key={`carousel-item-${index}`}>
            <Model src={urlForPath(model)} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <Link
        href={`${links[current - 1]}`}
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground md:no-underline md:hover:underline"
      >
        ArtStation Link
      </Link>

      <div className="mt-3 hidden md:block">
        <div ref={thumbRef} className="overflow-hidden">
          <div className="ml-[calc(12px_*_-1)] flex">
            {images.map(({ asset }, index) => (
              <Thumb
                key={`carouser-thumb-${index}`}
                imageSrc={asset}
                selected={index === current - 1}
                onClick={() => onThumbClick(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative ml-12 mt-10 block w-px md:hidden">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}
