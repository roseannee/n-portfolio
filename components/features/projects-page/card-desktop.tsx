import { useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, m, Variants } from "framer-motion"

type DIRECTION = "top" | "bottom" | "left" | "right"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string
}

export function CardDesktop({ imageUrl, ...props }: CardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [direction, setDirection] = useState<DIRECTION>("left")

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return

    const direction = getDirection(event, ref.current)
    switch (direction) {
      case 0:
        setDirection("top")
        break
      case 1:
        setDirection("right")
        break
      case 2:
        setDirection("bottom")
        break
      case 3:
        setDirection("left")
        break
      default:
        setDirection("left")
        break
    }
  }

  const getDirection = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect()
    const x = event.clientX - left - (w / 2) * (w > h ? h / w : 1)
    const y = event.clientY - top - (h / 2) * (h > w ? w / h : 1)
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
    return d
  }

  return (
    <m.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className="group/card relative hidden h-60 min-w-full overflow-hidden rounded-lg bg-transparent md:h-96 lg:block"
    >
      <AnimatePresence mode="wait">
        <m.div
          initial="initial"
          whileHover={direction}
          exit="exit"
          className="relative h-full"
        >
          <m.div className="absolute inset-0 z-10 hidden h-full bg-background/40 transition duration-500 group-hover/card:block" />

          <m.div
            variants={variants}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="relative h-full bg-background"
          >
            <Image
              src={imageUrl}
              alt="Portfolio Collection"
              width={1000}
              height={1000}
              priority
              className="h-full scale-[1.15] object-cover"
            />
          </m.div>

          <m.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="absolute bottom-4 left-4 z-40 text-foreground"
          >
            {props.children}
          </m.div>
        </m.div>
      </AnimatePresence>
    </m.div>
  )
}

const variants: Variants = {
  initial: {
    x: 0,
  },
  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
}

const textVariants: Variants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -20,
    opacity: 1,
  },
  bottom: {
    y: 2,
    opacity: 1,
  },
  left: {
    x: -2,
    opacity: 1,
  },
  right: {
    x: 20,
    opacity: 1,
  },
}
