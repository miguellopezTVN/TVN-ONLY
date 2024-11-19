"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "./styles.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import Image from "next/image";

const CoordinacionesClient = ({ slides }) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "68%", md: "90%" },
        height: "auto",
        marginBottom: "48px",
      }}
    >
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        spaceBetween={10}
        loop
        slidesPerView={3}
        coverflowEffect={{
          slideShadows: true,
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Tooltip
              sx={{ display: { xs: "none", md: "flex" } }}
              followCursor
              title={`Saber más de ${slide.label}`}
              arrow
              placement="top"
            >
              <Link href={slide.link}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.25%",
                  }}
                >
                  {/* COMENTARIO PARA SUBIR CAMBIOS dadaddasda subir 3*/}{" "}
                  {/* 16:9 Aspect Ratio */}
                  <Image
                    src={slide.src}
                    className="shadow-effect"
                    alt={slide.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Link>
            </Tooltip>

            <Typography sx={{ fontWeight: 600 }} className="slideText">
              {slide.label}
            </Typography>

            <Button
              onClick={() => router.push(slide.link)}
              sx={{
                position: "absolute",
                top: "-58px",
                display: { xs: "flex", md: "none" },
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Saber más
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CoordinacionesClient;
