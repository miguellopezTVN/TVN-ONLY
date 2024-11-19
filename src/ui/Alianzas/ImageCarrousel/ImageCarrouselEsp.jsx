"use client";
import { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarrousel.css";
import { Box } from "@mui/material";
import Image from "next/image";

const ImageCarouselEsp = ({ data2 }) => {
  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    adaptiveHeight: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  if (!Array.isArray(data2)) {
    return <p>No data available</p>;
  }

  return (
    <>
      {data2.length > 4 ? (
        <div aria-label="Company logos gallery" style={{ width: "100%" }}>
          <Slider {...settings}>
            {data2.map((item, index) => (
              <div key={index}>
                <Image
                  height={30}
                  width={60}
                  src={item.imageUrl}
                  alt={item.alt}
                  className="carousel-image"
                  style={{ width: 160, height: 63, objectFit: "contain" }}
                />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <Box
          aria-label="Company logos gallery static"
          sx={{ width: "100%", display: "flex", overflowX: "auto" }}
        >
          {data2.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <Image
                height={30}
                width={60}
                src={item.imageUrl}
                alt={item.alt}
                className="carousel-image"
                style={{ width: 160, height: 63, objectFit: "contain" }}
              />
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default memo(ImageCarouselEsp);
