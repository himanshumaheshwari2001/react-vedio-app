import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'} >
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
                    Subscribe to get updates
                </Heading>
                <HStack borderBottom={'2px solid white'} p={'2'}>
                    <Input placeholder='enter email here...' borderRadius={'none'} border={'none'} outline={'none'} focusBorderColor='none'/>
                    <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
                </VStack> 
<VStack w={'full'} borderLeft={['none' ,'1px solid white']} borderRight={['none' ,'1px solid white']}>
    
<Heading textAlign={'center'} textTransform={'uppercase'} >
Vedio Hub
</Heading>

<Text>
    All Right Reserved
</Text>
</VStack>
<VStack w={'full'}>
    <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
    <Button variant={'link'} colorScheme='White'><a href='https://github.com/himanshumaheshwari2001' >Youtube</a></Button>
    <Button variant={'link'} colorScheme='White'><a href='https://github.com/himanshumaheshwari2001' >Instagram</a></Button>
    <Button variant={'link'} colorScheme='White'><a href='https://github.com/himanshumaheshwari2001' >Drive</a></Button>
    
</VStack>

        </Stack>
        


        </Box>

  )
}

export default Footer
