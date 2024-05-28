import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

import { cn } from "@/lib/utils"

type Props = {
  selected: boolean
  imageSrc: any
  onClick: () => void
}

export function Thumb({ selected, imageSrc, onClick }: Props) {
  return (
    <div
      className={cn(
        "relative w-1/6 select-none pl-3 transition-all",
        // FIXME colors
        selected ? "brightness-100 grayscale-0" : "brightness-50 grayscale"
      )}
    >
      <div
        onClick={onClick}
        // FIXME backgroud
        className="relative flex size-20 w-full cursor-pointer items-center justify-center rounded-md bg-primary"
      >
        <Image
          src={urlForImage(imageSrc).url()}
          alt="Collection thumbnail"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
    </div>
  )
}
