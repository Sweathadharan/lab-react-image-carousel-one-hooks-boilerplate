import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const[currentIndex,setCurrentIndex]=useState(0);
    const handlePrev=()=>{
        let newImage=currentIndex-1;
        if(newImage<0)
            {
                newImage=images.length-1;
            }
            setCurrentIndex(newImage);

    };
    const handlenext=()=>{
        let newImage = currentIndex+1;
        if(newImage>=images.length)
            {
                newImage=0;
            }
            setCurrentIndex(newImage);
    }

    return(
     <>
     <div className="courasel">
         <div className="image-container">
                <img src={images[currentIndex].img} alt={`carousel-${currentIndex}`} />
            <div className="caption">
                 <h2>{images[currentIndex].title}</h2>
                  <p>{images[currentIndex].subtitle}</p>
            </div>       
        </div>  
        <div className="arrow-buttons">
                    <button className="nav-button left" onClick={handlePrev}>
                    <ArrowBackIosIcon/>
                    </button>
                    <button className="nav-button right" onClick={handlenext}>
                    <ArrowForwardIosIcon/>
                    </button>
        </div>
    </div>
    </>
    )
}

export default Carousel;
