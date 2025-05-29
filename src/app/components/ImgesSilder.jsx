"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const ImageSlider = ({ images }) => {
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="hidden" onClick={onClick}>
        {/* <ArrowForwardIos className="text-gray-800" /> */}
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="hidden" onClick={onClick}>
        {/* <ArrowBackIos className="text-gray-800" /> */}
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    waitForAnimate: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1300,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {[1, 2, 3, 4, 5]?.map((item, i) => (
        <Image
          src={`/past-expo-photos/${i + 1}.jpg`}
          alt="Why Attend Expo"
          width={563.58}
          height={523}
          className="w-full h-full"
        />
      ))}
    </Slider>
  );
};

export default ImageSlider;
