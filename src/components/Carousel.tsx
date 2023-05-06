import { Carousel } from '@mantine/carousel';
import { Container, Title } from '@mantine/core';

function MyCarousel() {
  return (
    <Container size="lg">
      <Title align="center" mb="md" order={3}>
        Some pictures from my life
      </Title>
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
        <Carousel.Slide>
          <img
            src="https://isebring.github.io/Hampus-Isebring-Portfolio/imgs/in-prague-city.jpg"
            width="100%"
            height="100%"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://isebring.github.io/Hampus-Isebring-Portfolio/imgs/brothers.jpg"
            width="100%"
            height="100%"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://isebring.github.io/Hampus-Isebring-Portfolio/imgs/familjens-katter.jpg"
            height="100%"
            width="100%"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://isebring.github.io/Hampus-Isebring-Portfolio/imgs/klassbol.jpg"
            height="100%"
            width="100%"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://isebring.github.io/Hampus-Isebring-Portfolio/imgs/%C3%B6n-halmstad.jpg"
            height="100%"
            width="100%"
          />
        </Carousel.Slide>
      </Carousel>
    </Container>
  );
}

export default MyCarousel;
