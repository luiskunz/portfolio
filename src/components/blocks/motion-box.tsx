import * as React from "react"
import { Box, BoxProps, usePrefersReducedMotion } from "@chakra-ui/react"
import { transforms } from "../../constants/motion"

const MotionBox = ({ children, ...rest }: BoxProps) => {
  const shouldReduceMotion = usePrefersReducedMotion()

  return (
    <Box
      boxShadow="lg"
      transition={transforms.beforeHover.transition}
      transform={transforms.beforeHover.transform}
      _hover={
        shouldReduceMotion ? {} : { transform: transforms.onHover.transform, boxShadow: transforms.onHover.boxShadow }
      }
      {...rest}
    >
      {children}
    </Box>
  )
}

export { MotionBox }
