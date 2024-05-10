import { type Variants } from "framer-motion"

export const headerVariants: Variants = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
  },
}

export const opacityVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

interface PatentVariantsConfig {
  staggerChildren?: number | undefined
  delayChildren?: number | undefined
}
type ParentVariantsType = (config?: PatentVariantsConfig) => Variants

export const parentVariants: ParentVariantsType = (config?) => {
  return {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: config?.staggerChildren ?? 0.2,
        delayChildren: config?.delayChildren ?? 0.5,
      },
    },
  }
}

export const childrenVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
    },
  },
}

export const fadeFromBottomVariants: Variants = {
  ...childrenVariants,
}
