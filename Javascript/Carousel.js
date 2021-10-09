import { height } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../../Assets/carousel1.jpg";
import img2 from "../../../Assets/carousel2.jpg";
import img3 from "../../../Assets/carousel3.jpg";
import img4 from "../../../Assets/carousel4.jpg";
import simg1 from "../../../Assets/staticimg1.jpeg";
import simg2 from "../../../Assets/staticimg2.jpeg";
import simg3 from "../../../Assets/staticimg3.jpeg";
import simg4 from "../../../Assets/staticimg4.jpeg";
import cssclasses from "./Carousel.module.scss";
const Carusel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      // slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      
      // slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className={cssclasses.headcarousel}>
      <div className={cssclasses.stimg1}>
        <div>
          <img className={cssclasses.image1} src={simg1} />
        </div>
        <div>
          <img className={cssclasses.image2} src={simg3} />
        </div>
      </div>
      <div className={cssclasses.stimg2}>
        <div>
          <img className={cssclasses.image1} src={simg2} />
        </div>
        <div>
          <img className={cssclasses.image2} src={simg3} />
        </div>
      </div>
      <div className={cssclasses.pcarousel}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          // ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass={cssclasses.custom}
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <img src={img1} className={cssclasses.img} />
          </div>
          <div>
            <img src={img2} className={cssclasses.img} />
          </div>
          <div>
            <img src={img3} className={cssclasses.img} />
          </div>
          <div>
            <img src={img4} className={cssclasses.img} />
          </div>
        </Carousel>
      </div>
      <div className={cssclasses.stimg3}>
        <div>
          <img className={cssclasses.image1} src={simg1} />
        </div>
        <div>
          <img className={cssclasses.image2} src={simg4} />
        </div>
      </div>
      <div className={cssclasses.stimg4}>
        <div>
          <img className={cssclasses.image1} src={simg2} />
        </div>
        <div>
          <img className={cssclasses.image2} src={simg4} />
        </div>
      </div>
    </div>
  );
};

export default Carusel;
