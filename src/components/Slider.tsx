import { Box, Container, Image, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";

interface Slide {
  url: string;
  alt: string;
}

interface Props {
  slides: Slide[];
}

function Slider({ slides }: Props) {
  const { t } = useTranslation();
  return (
    <Container>
      <Title mt="xl" order={2} align="center">
        {t("tools")}
      </Title>
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: ".button-prev",
          nextEl: ".button-next",
        }}
        pagination={{ clickable: true }}
        speed={1000}
        slidesPerView={"auto"}
        autoplay={{ delay: 3500 }}
        centeredSlides
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="slide-inner">
            <img loading="lazy" src={slide.url} alt={slide.alt} />
          </SwiperSlide>
        ))}
        <Box className="button-prev">
          <img
            src="https://raw.githubusercontent.com/parthwebdev/react-carousels/b8cbe2ba1a7b44004200295fc977ade25f006e8c/src/components/Carousel%2002/assets/arrow-left.svg"
            alt="Left"
          />
        </Box>
        <Box className="button-next">
          <Image
            src="https://raw.githubusercontent.com/parthwebdev/react-carousels/b8cbe2ba1a7b44004200295fc977ade25f006e8c/src/components/Carousel%2002/assets/arrow-right.svg"
            alt="Right"
          />
        </Box>
      </Swiper>
    </Container>
  );
}

export default Slider;
