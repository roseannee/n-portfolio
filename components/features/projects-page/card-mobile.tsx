import Image from "next/image"

import { CardProps } from "./card-desktop"

export function CardMobile({ imageUrl, ...props }: CardProps) {
  return (
    <div className="relative block h-60 min-w-full overflow-hidden rounded-lg bg-transparent md:h-96 lg:hidden">
      <div className="relative h-full">
        <div className="absolute inset-0 z-10 block h-full bg-background/40" />

        <div className="relative h-full bg-background">
          <Image
            src={imageUrl}
            alt="Portfolio Collection"
            width={1000}
            height={1000}
            priority
            className="h-full object-cover"
          />
        </div>

        <div className="absolute bottom-4 left-4 z-40 text-foreground">
          {props.children}
        </div>
      </div>
    </div>
  )
}
