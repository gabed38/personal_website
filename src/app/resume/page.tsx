'use client'

import { Box, Heading, Text, Stack, Divider, Container } from '@chakra-ui/react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import resumeData from '@/data/resume.json'

export default function Resume() {
  return (
    <LazyMotion features={domAnimation}>
      <m.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Box
          minH="100vh"
          bg="gray.50"
          bgGradient="linear(to-br, gray.50, blue.50)"
          py={8}
        >
          <Container maxW="4xl">
            <Box
              bg="white"
              borderRadius="xl"
              p={8}
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.200"
            >
              <Heading 
                mb={8}
                bgGradient="linear(to-r, blue.600, purple.600)"
                bgClip="text"
                fontSize="3xl"
              >
                Resume
              </Heading>
              
              {resumeData.sections.map((section) => (
                <Box key={section.title} mb={8}>
                  <Heading 
                    size="md" 
                    mb={4}
                    color="gray.700"
                    borderBottom="2px solid"
                    borderColor="blue.100"
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
                        _hover={{ bg: 'blue.50' }}
                        transition="all 0.2s"
                      >
                        <Text 
                          fontWeight="bold"
                          color="blue.700"
                          fontSize="lg"
                        >
                          {item.title}
                        </Text>
                        <Text
                            fontStyle="italic" 
                            fontSize="sm" 
                            color="gray.600"
                            mb={2}
                            >
                            {item.subtitle}
                            {item.subtitle && item.date && " | "}
                            {item.date}
                        </Text>
                        <Text color="gray.700">
                          {item.description}
                        </Text>
                      </Box>
                    ))}
                  </Stack>
                  <Divider mt={6} borderColor="gray.200" />
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </m.main>
    </LazyMotion>
  )
}
