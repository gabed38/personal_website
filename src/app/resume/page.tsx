'use client'

import { Box, Heading, Text, Stack, Divider, Container } from '@chakra-ui/react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import resumeData from '@/app/data/resume.json'
import BackButton from '@/components/ui/BackButton'

export default function Resume() {
  return (
    <LazyMotion features={domAnimation}>
      <BackButton />
      <m.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Box
          minH="100vh"
          position="relative"
          overflow="hidden"
          bgGradient="linear(to-br, blue.800, purple.900, pink.900)"
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.1) 2%, transparent 0%)",
            backgroundSize: "100px 100px",
            opacity: 0.3,
            pointerEvents: "none",
          }}
        >
          <Container maxW="4xl" centerContent>
            <Box
              p={8}
              borderRadius="2xl"
              backdropFilter="blur(12px)"
              bg="rgba(255, 255, 255, 0.1)"
              boxShadow="dark-lg"
              border="1px solid"
              borderColor="whiteAlpha.200"
              width="100%"
              mt={8}
            >
              <m.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Heading 
                  mb={8}
                  bgGradient="linear(to-r, blue.200, purple.200)"
                  bgClip="text"
                  fontSize={{ base: "3xl", md: "4xl" }}
                  textAlign="center"
                >
                  Resume
                </Heading>
              </m.div>
              
              {resumeData.sections.map((section, index) => (
                <m.div
                  key={section.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * (index + 2) }}
                >
                  <Box mb={8}>
                    <Heading 
                      size="md" 
                      mb={4}
                      color="whiteAlpha.900"
                      borderBottom="2px solid"
                      borderColor="whiteAlpha.200"
                      pb={2}
                    >
                      {section.title}
                    </Heading>
                    <Stack spacing={6}>
                      {section.items.map((item, idx) => (
                        <Box 
                          key={idx}
                          p={4}
                          borderRadius="md"
                          bg="whiteAlpha.100"
                          _hover={{ bg: 'whiteAlpha.200' }}
                          transition="all 0.2s"
                        >
                          <Text 
                            fontWeight="bold"
                            color="whiteAlpha.900"
                            fontSize="lg"
                          >
                            {item.title}
                          </Text>
                          <Text
                            fontStyle="italic" 
                            fontSize="sm" 
                            color="whiteAlpha.700"
                            mb={2}
                          >
                            {item.subtitle}
                            {item.subtitle && item.date && " | "}
                            {item.date}
                          </Text>
                          <Text color="whiteAlpha.900">
                            {item.description}
                          </Text>
                        </Box>
                      ))}
                    </Stack>
                    {index < resumeData.sections.length - 1 && (
                      <Divider mt={6} borderColor="whiteAlpha.200" />
                    )}
                  </Box>
                </m.div>
              ))}
            </Box>
          </Container>
        </Box>
      </m.main>
    </LazyMotion>
  )
}
