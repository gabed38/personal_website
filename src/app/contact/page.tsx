'use client'

import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast, Heading, Container } from '@chakra-ui/react'
import { useState } from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import BackButton from '@/components/ui/BackButton'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: Replace with your actual email submission logic
      await new Promise((res) => setTimeout(res, 1000))

      toast({
        title: 'Message sent.',
        description: "I'll get back to you soon!",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      toast({
        title: 'Error sending message.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <LazyMotion features={domAnimation}>
      <BackButton />
      <m.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Box
          minH="100vh"
          position="relative"
          overflow="hidden"
          bgGradient="linear(to-br, blue.800, purple.900, pink.900)"
          py={8}
        >
          <Container maxW="container.md" centerContent>
            <Box
              p={8}
              borderRadius="2xl"
              backdropFilter="blur(12px)"
              bg="rgba(255, 255, 255, 0.1)"
              boxShadow="dark-lg"
              border="1px solid"
              borderColor="whiteAlpha.200"
              width="100%"
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
                  textAlign="center"
                >
                  Contact Me
                </Heading>
              </m.div>

              <m.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <form onSubmit={handleSubmit}>
                  <FormControl id="name" mb={4} isRequired>
                    <FormLabel color="whiteAlpha.900">Name</FormLabel>
                    <Input 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Your name"
                      bg="whiteAlpha.200"
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                      color="white"
                      _placeholder={{ color: 'whiteAlpha.500' }}
                    />
                  </FormControl>
                  <FormControl id="email" mb={4} isRequired>
                    <FormLabel color="whiteAlpha.900">Email</FormLabel>
                    <Input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="Your email"
                      bg="whiteAlpha.200"
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                      color="white"
                      _placeholder={{ color: 'whiteAlpha.500' }}
                    />
                  </FormControl>
                  <FormControl id="message" mb={4} isRequired>
                    <FormLabel color="whiteAlpha.900">Message</FormLabel>
                    <Textarea 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      placeholder="Your message"
                      bg="whiteAlpha.200"
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                      color="white"
                      _placeholder={{ color: 'whiteAlpha.500' }}
                      minH="150px"
                    />
                  </FormControl>
                  <Button 
                    colorScheme="blue" 
                    type="submit" 
                    isLoading={loading}
                    size="lg"
                    width="full"
                    mt={4}
                    rounded="xl"
                    shadow="lg"
                    _hover={{ transform: 'translateY(-2px)', shadow: '2xl' }}
                    transition="all 0.2s"
                  >
                    Send Message
                  </Button>
                </form>
              </m.div>
            </Box>
          </Container>
        </Box>
      </m.main>
    </LazyMotion>
  )
}
