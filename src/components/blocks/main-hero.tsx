import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Flex, Box, Heading, Button, ButtonGroup, Icon } from "@chakra-ui/react"
import { GoChevronRight } from "react-icons/go"
import { Wave } from "../../elements/Wave"

interface IMainHero {
  headline: string
  primaryBtn: string
  secondaryBtn: string
  heroImg: any
}

export const MainHero = ({ headline, primaryBtn, secondaryBtn, heroImg }: IMainHero) => (
  <Box
    height="100%"
    w="100%"
    bgGradient="linear(to-tl, primary.900, primary.800)"
    pos="relative"
    pb={[`10rem`, null, null, `6rem`]}
  >
    <Box maxWidth="1440px" m="0 auto" p="0 1rem">
      <Flex direction={[`column-reverse`, null, null, `row`]} spacing="2rem" pt="calc(72px)" alignItems="center">
        <Box w={[`100%`, null, null, `calc(99.9% * 1 / 0.8)`]} position="relative">
          {/* 1 column */}
          <Flex alignItems="flex-start" alignContent="baseline">
            {/* flex item */}
            <Icon as={GoChevronRight} height={[6, 8, 12]} width={[6, 8, 12]} color="secondary.600" mt="2" />
            {/* flex item */}
            <Flex flexDirection="column" display="flex" alignItems="flex-start" flex="1 1 0" minWidth="0">
              <Heading as="h1" variant="h1" color="white" lineHeight="125%" margin="0 !important">
                {headline}
              </Heading>
              <ButtonGroup pt="6" flexWrap="wrap">
                <Link to="/projects" style={{ margin: 0 }}>
                  <Button variant="hero" mb={[2, 0]}>
                    {primaryBtn}
                  </Button>
                </Link>
                <Link to="/about" style={{ margin: 0 }}>
                  <Button variant="heroOutline" ml={[`0 !important`, `1rem !important`]}>
                    {secondaryBtn}
                  </Button>
                </Link>
              </ButtonGroup>
            </Flex>
          </Flex>
        </Box>
        {/* Hero Image */}
        <Box w="calc(99.9% * 1 / 1)" height={[`auto`, null, null, `45rem`]}>
          <Box w={[`100%`, null, null, `45rem`]} m="0 auto" pos={[`static`, null, null, `absolute`]}>
            <GatsbyImage image={heroImg.localFile.childImageSharp.gatsbyImageData} alt={heroImg.alt} />
          </Box>
        </Box>
      </Flex>
    </Box>
    <Wave />
  </Box>
)
