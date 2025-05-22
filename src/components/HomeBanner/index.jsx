import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic1 from '../../assets/home/Banner1.jpg'
import pic2 from '../../assets/home/Banner2.jpg'
import pic3 from '../../assets/home/Banner3.jpg'
import pic4 from '../../assets/home/Banner4.jpg'
const HomeBannerCarosel = () => {
    
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },

    };
  return (
    <>
<Carousel
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  infinite={true}
  autoPlaySpeed={1000}
  autoPlay={true}
  keyBoardControl={false}
  transitionDuration={1000}
    containerClass="carousel-container"
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
>
    <img style={{height:"650px",width:"100%"}} src={pic1} alt="bannerpics" />
    <img style={{height:"650px",width:"100%"}} src={pic2} alt="bannerpics" />
    <img style={{height:"650px",width:"100%"}} src={pic3} alt="bannerpics" />
    <img style={{height:"650px",width:"100%"}} src={pic4} alt="bannerpics" />
  
</Carousel>;

    </>
  )
}

export default HomeBannerCarosel
