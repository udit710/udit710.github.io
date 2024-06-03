'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { color } from 'framer-motion'

interface Props {
  children: React.ReactNode
}

const Links = ['About', 'Key Skills', 'Projects', 'Contact']

const NavLink = (props: Props) => {
  const { children } = props
  return (
    <Box
      as="a"
      fontFamily={'mono'}
      fontWeight={400}
      color={'white'}
      px={2}
      py={1}
      padding= {10}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        color: 'black',
        borderRadius: '10px',
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function navbar() {

  return (
    <>
      <Box px={3}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Spacer />
          <HStack spacing={0} alignItems={'center'}>
            <HStack as={'nav'} spacing={0} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink> 
              ))}
            </HStack>
          </HStack>
            <Spacer />
        </Flex>
        </Box>
    </>
  )
}