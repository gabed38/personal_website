'use client'

import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast, Heading } from '@chakra-ui/react'
import { useState } from 'react'
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
      // TODO: Replace with your actual email submission logic (EmailJS, API, etc)
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
    <Box maxW="lg" mx="auto" p={8}>
      <BackButton />
      <Heading mb={6}>Contact Me</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
        </FormControl>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" />
        </FormControl>
        <FormControl id="message" mb={4} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message" />
        </FormControl>
        <Button colorScheme="green" type="submit" isLoading={loading}>
          Send Message
        </Button>
      </form>
    </Box>
  )
}
