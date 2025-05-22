import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import leader1 from '../../assets/home/leader1.jpeg'
import leader2 from '../../assets/home/leader2.jpeg'
import leader3 from '../../assets/home/leader3.jpg'
import leader4 from '../../assets/home/leader4.png'
import leader5 from '../../assets/home/leader5.jpeg'
import leader6 from '../../assets/home/leader6.jpeg'
import leader7 from '../../assets/home/leader7.jpeg'
import leader8 from '../../assets/home/leader8.jpeg'
import styles from './index.module.css'
import { IoIosAdd } from 'react-icons/io';
const HomeLeaderSlider = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <>
     <Carousel
       swipeable={true}
       showDots={false}
       responsive={responsive}
       infinite={true}
       autoPlay={true}
       keyBoardControl={false}
       transitionDuration={1000}
         containerClass="carousel-container"
         removeArrowOnDeviceType={["tablet", "mobile"]}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px"
     >
         <img className={styles.leaderpics}  src={leader1} alt="leaderspic" />
         <img className={styles.leaderpics}  src={leader2} alt="leaderspic" />
         <img className={styles.leaderpics}  src={leader3} alt="leaderspic" />
         <img className={styles.leaderpics}  src={leader4} alt="leaderspic" />
         <img className={styles.leaderpics}  src={leader5} alt="leaderspic" />
         <img className={styles.leaderpics}  src={leader6} alt="leaderspic" />
         <img className={styles.leaderpics}  src={leader7} alt="leaderspic" />
         <img className={styles.leaderpics}  src={leader8} alt="leaderspic" />
       
     </Carousel>;
      
    </>
  )
}

export default HomeLeaderSlider
