import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '3xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={"2px solid"}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            src={img5}
            filter={'hue-rotate(-130deg)'}
            h={['40', '400']}
          ></Image>
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo
            suscipit sunt vel adipisci aperiam, inventore a tempore nisi?
            Pariatur provident deleniti reprehenderit. Accusamus, error. Ad
            distinctio similique nam molestias maxime placeat accusamus non
            earum hic libero, praesentium repellat rem nihil modi cum magni odit
            consequatur nemo dolorem voluptatem deleniti voluptates! Nesciunt
            perspiciatis enim, eum magni qui fugit quod, quae, necessitatibus
            ullam impedit maiores. A velit maxime, ad corrupti reiciendis
            repellendus rem, sunt repudiandae soluta, minima quis quaerat
            laudantium veniam saepe magni explicabo accusamus eum aspernatur
            obcaecati. Error quod eveniet laboriosam, quas, neque, facere
            quisquam id voluptas fuga cum quam.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'}/>
      <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'}/>
      <Heading bg={'whiteAlpha.500'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'}/>
      <Heading bg={'whiteAlpha.500'} color={'black'} {...headingOptions}>
        Gaming on console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'}/>
      <Heading bg={'whiteAlpha.500'} color={'black'} {...headingOptions}>
        night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
