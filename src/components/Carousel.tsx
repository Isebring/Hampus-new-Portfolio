import { Carousel } from '@mantine/carousel';
import { Container, Title } from '@mantine/core';

function MyCarousel() {
  return (
    <Container size="md">
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
            alt="A picture of me walking in the city of Prague"
            width="100%"
            height="100%"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://isebring.github.io/Hampus-Isebring-Portfolio/imgs/brothers.jpg"
            alt="A picture of me and my brother playing guitar"
            width="100%"
            height="100%"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://isebring.github.io/Hampus-Isebring-Portfolio/imgs/familjens-katter.jpg"
            alt="A picture of two cats sitting on a table"
            height="100%"
            width="100%"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://isebring.github.io/Hampus-Isebring-Portfolio/imgs/klassbol.jpg"
            alt="A picture of Klässbol, located in Värmland, Sweden. The picture shows firs, the lake Glafsfjorden and rocks"
            height="100%"
            width="100%"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://isebring.github.io/Hampus-Isebring-Portfolio/imgs/%C3%B6n-halmstad.jpg"
            alt="This is a picture of Ön in Halmstad. The picture is taken from the parking lot overlooking the lake Torvsjön"
            height="100%"
            width="100%"
          />
        </Carousel.Slide>
      </Carousel>
    </Container>
  );
}

export default MyCarousel;
