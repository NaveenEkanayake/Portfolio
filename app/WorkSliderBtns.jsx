"use client";
import { useSwiper } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const WorkSliderBtns = ({
  containerStyles = "absolute top-1/2 left-10 right-10 flex justify-center transform -translate-y-1/2 z-10",
  btnStyles = "bg-white p-4 rounded-full shadow-md hover:bg-accent transition mx-56",
  iconsStyles = "text-black text-2xl",
}) => {
  const swiper = useSwiper();

  const handlePrev = () => swiper.slidePrev();
  const handleNext = () => swiper.slideNext();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={handlePrev}>
        <FaArrowLeft className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={handleNext}>
        <FaArrowRight className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
