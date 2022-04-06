import React from "react";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const rightArrow = <ArrowForwardIosIcon/>
const leftArrow = <ArrowBackIosNewIcon/>

export default function BtnSlider({ direction, moveSlide }) {
    
    return (
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        {direction === "next" ? rightArrow : leftArrow} 
      </button>
    );
  }