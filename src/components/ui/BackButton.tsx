'use client'

import { IconButton } from '@chakra-ui/react'
import { FaChevronLeft } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <IconButton
      aria-label="Go back"
      icon={<FaChevronLeft />}
      position="fixed"
      top={4}
      left={4}
      size="lg"
      variant="ghost"
      color="gray.600"
      _hover={{
        transform: 'translateX(-2px)',
        color: 'gray.800',
      }}
      onClick={() => router.back()}
      transition="all 0.2s"
      zIndex={10}
    />
  )
}