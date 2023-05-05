import { Carousel } from '@mantine/carousel';

function MyCarousel() {
    return (
        <Carousel
          withIndicators
          height={200}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          breakpoints={[
            { maxWidth: 'md', slideSize: '50%' },
            { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
          ]}
        >
          <Carousel.Slide><img src="/imgs/hampus.png" height="100%" width="100%" /></Carousel.Slide>
          <Carousel.Slide><img src="/imgs/hampus-logo.png" height="100%" width="100%" /></Carousel.Slide>
          <Carousel.Slide><img src="/imgs/hampusimg.png" height="100%" width="100%" /></Carousel.Slide>
          {/* ...other slides */}
        </Carousel>
      );
    }

export default MyCarousel;