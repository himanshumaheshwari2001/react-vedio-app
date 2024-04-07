import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, VStack, HStack} from "@chakra-ui/react";
import {Link}  from 'react-router-dom';
import {BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Button pos={'fixed'} top={'4'} left={'4'} colorScheme='purple' padding={"0"} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen} zIndex={'overlay'}>
        <BiMenuAltLeft size={'20'}/>
    </Button>
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Vedio Hub</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'}>
                    <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}> 
                        <Link to={'/'}>
                            Home
                        </Link>
                    </Button>
                    <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}> 
                        <Link to={'/videos'}>
                            Vedios
                        </Link>
                    </Button>
                    <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}> 
                        <Link to={'/videos?category=free'}>
                            Free Vedios
                        </Link>
                    </Button>
                    <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}> 
                        <Link to={'/upload'}>
                            Upload
                        </Link>
                    </Button>
                </VStack>
                <HStack position={'absolute'} bottom={'10'} left={'0'} width={'full'} justifyContent={'space-evenly'}>
                    <Button onClick={onClose} colorScheme='purple'>
                        <Link to={'/login'}>
                        Login
                        </Link>
                    </Button>
                    <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                        <Link to={'/signup'}>
                        SignUp
                        </Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>

    </Drawer>
    
    </>
    
  )
}

export default Header
