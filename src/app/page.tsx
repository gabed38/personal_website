'use client'

import Link from 'next/link'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { Box, Button, Heading, Text, Stack, Container, Icon, Image} from '@chakra-ui/react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <m.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
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
          <Container maxW="container.lg" centerContent>
            <Box
              p={12}
              borderRadius="2xl"
              backdropFilter="blur(12px)"
              bg="rgba(255, 255, 255, 0.1)"
              boxShadow="dark-lg"
              mt={20}
              textAlign="center"
              border="1px solid"
              borderColor="whiteAlpha.200"
            >
              <m.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Heading 
                  mb={6} 
                  bgGradient="linear(to-r, blue.200, purple.200)"
                  bgClip="text"
                  fontSize={{ base: "3xl", md: "4xl" }}
                >
                  Hi, I'm Gabriel Darnell
                </Heading>
              </m.div>
              <m.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Image
                  src="/images/profile_pic.jpeg"
                  alt="Gabriel Darnell"
                  borderRadius="full"
                  boxSize={{ base: "150px", md: "200px" }}
                  mx="auto"
                  mb={6}
                  border="4px solid"
                  borderColor="whiteAlpha.300"
                  shadow="xl"
                />
              </m.div>
              
              <m.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Text fontSize={{ base: "lg", md: "xl" }} mb={4} color="whiteAlpha.900">
                  AI-focused Software Engineer building production-grade LLM apps
                </Text>
                <Text fontSize={{ base: "lg", md: "xl" }} mb={8} color="whiteAlpha.900">
                  Check out my background and experience below
                </Text>
              </m.div>

              <m.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Stack spacing={6}>
                  <Stack direction={{ base: 'column', md: 'row' }} spacing={6} justify="center">
                    <Link href="/resume" passHref>
                      <Button 
                        as="a" 
                        size="lg"
                        colorScheme="blue" 
                        rounded="xl" 
                        shadow="lg"
                        _hover={{ transform: 'translateY(-2px)', shadow: '2xl' }}
                        transition="all 0.2s"
                      >
                        Resume
                      </Button>
                    </Link>
                    <Link href="/projects" passHref>
                      <Button 
                        as="a" 
                        size="lg"
                        colorScheme="purple" 
                        rounded="xl" 
                        shadow="lg"
                        _hover={{ transform: 'translateY(-2px)', shadow: '2xl' }}
                        transition="all 0.2s"
                      >
                        Projects
                      </Button>
                    </Link>
                    <Link href="/contact" passHref>
                      <Button 
                        as="a" 
                        size="lg"
                        colorScheme="pink" 
                        rounded="xl" 
                        shadow="lg"
                        _hover={{ transform: 'translateY(-2px)', shadow: '2xl' }}
                        transition="all 0.2s"
                      >
                        Contact
                      </Button>
                    </Link>
                  </Stack>
                  
                  <Stack direction={{ base: 'column', md: 'row' }} spacing={6} justify="center">
                    <Link href="https://www.linkedin.com/in/gabriel-darnell-922601165/" passHref>
                      <Button 
                        as="a" 
                        size="lg"
                        colorScheme="linkedin" 
                        rounded="xl" 
                        shadow="lg"
                        leftIcon={<Icon as={FaLinkedin} boxSize={5} />}
                        _hover={{ transform: 'translateY(-2px)', shadow: '2xl' }}
                        transition="all 0.2s"
                      >
                        LinkedIn
                      </Button>
                    </Link>
                    <Link href="https://github.com/gabed38" passHref>
                      <Button 
                        as="a" 
                        size="lg"
                        colorScheme="gray" 
                        rounded="xl" 
                        shadow="lg"
                        leftIcon={<Icon as={FaGithub} boxSize={5} />}
                        _hover={{ transform: 'translateY(-2px)', shadow: '2xl' }}
                        transition="all 0.2s"
                      >
                        GitHub
                      </Button>
                    </Link>
                  </Stack>
                </Stack>
              </m.div>
            </Box>
          </Container>
        </Box>
      </m.main>
    </LazyMotion>
  )
}
