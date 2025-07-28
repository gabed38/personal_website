'use client'

import { Box, Heading, Link as ChakraLink, Text, Stack } from '@chakra-ui/react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import projectsData from '@/data/projects.json'

export default function Projects() {
  return (
    <LazyMotion features={domAnimation}>
      <m.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Box maxW="4xl" mx="auto" p={8}>
          <Heading mb={6}>Projects</Heading>
          <Stack spacing={6}>
            {projectsData.projects.map((project) => (
              <Box key={project.title} p={4} borderWidth="1px" rounded="md" shadow="sm">
                <Heading size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text mb={2}>{project.description}</Text>
                <ChakraLink color="blue.500" href={project.link} isExternal>
                  View Project
                </ChakraLink>
              </Box>
            ))}
          </Stack>
        </Box>
      </m.main>
    </LazyMotion>
  )
}
