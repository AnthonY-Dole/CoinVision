import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  useColorModeValue,
  
} from '@chakra-ui/react';
import logo from '@/assets/logo.png';
import { Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


export default function withAction() {

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
         
          <HStack spacing={8} alignItems={'center'}>

           <Link to="/">
              <Avatar
                size={'lg'}
                src={logo}
              />
            </Link>

            <Input variant='outline' placeholder='Search'  />
          </HStack>
          
        </Flex>
      </Box>

      
    </>
  );
}