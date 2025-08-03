'use client'

import { Box, Button, Heading, Link as ChakraLink, Text, Stack, Icon } from '@chakra-ui/react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'
import projectsData from '@/app/data/projects.json'
import BackButton from '@/components/ui/BackButton'

export default function Projects() {
  return (
    <LazyMotion features={domAnimation}>
      <BackButton />
      <m.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Box maxW="4xl" mx="auto" p={8}>
          <Heading mb={6}>Projects</Heading>
          <Stack spacing={6}>
            {projectsData.projects.map((project) => (
              <Box key={project.title} p={6} borderWidth="1px" rounded="xl" shadow="md">
                <Heading size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text mb={4}>{project.description}</Text>
                {project.type === 'download' ? (
                  <Button
                    as="a"
                    href={project.link}
                    download
                    colorScheme="blue"
                    size="sm"
                    leftIcon={<Icon as={FaDownload} />}
                  >
                    Download {project.fileType}
                  </Button>
                ) : (
                  <ChakraLink 
                    href={project.link} 
                    isExternal 
                    display="inline-flex"
                    alignItems="center"
                    color="blue.500"
                    _hover={{ textDecoration: 'none', color: 'blue.600' }}
                  >
                    View Project <Icon as={FaExternalLinkAlt} ml={2} boxSize={3} />
                  </ChakraLink>
                )}
              </Box>
            ))}
          </Stack>
        </Box>
      </m.main>
    </LazyMotion>
  )
}
