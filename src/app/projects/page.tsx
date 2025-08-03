'use client'

import { Box, Button, Heading, Link as ChakraLink, Text, Stack, Icon, Container } from '@chakra-ui/react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'
import projectsData from '@/app/data/projects.json'
import BackButton from '@/components/ui/BackButton'

export default function Projects() {
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
                  Projects
                </Heading>
              </m.div>
              
              <Stack spacing={6}>
                {projectsData.projects.map((project, index) => (
                  <m.div
                    key={project.title}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 * (index + 2) }}
                  >
                    <Box 
                      p={6} 
                      borderWidth="1px" 
                      rounded="xl" 
                      bg="whiteAlpha.100"
                      borderColor="whiteAlpha.200"
                      _hover={{ bg: 'whiteAlpha.200' }}
                      transition="all 0.2s"
                    >
                      <Heading size="md" mb={2} color="whiteAlpha.900">
                        {project.title}
                      </Heading>
                      <Text mb={4} color="whiteAlpha.800">
                        {project.description}
                      </Text>
                      {project.type === 'download' ? (
                        <Button
                          as="a"
                          href={project.link}
                          download
                          colorScheme="blue"
                          size="sm"
                          leftIcon={<Icon as={FaDownload} />}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download {project.fileType}
                        </Button>
                      ) : (
                        <ChakraLink 
                          href={project.link} 
                          isExternal 
                          display="inline-flex"
                          alignItems="center"
                          color="blue.200"
                          _hover={{ color: 'blue.100' }}
                        >
                          View Project <Icon as={FaExternalLinkAlt} ml={2} boxSize={3} />
                        </ChakraLink>
                      )}
                    </Box>
                  </m.div>
                ))}
              </Stack>
            </Box>
          </Container>
        </Box>
      </m.main>
    </LazyMotion>
  )
}
