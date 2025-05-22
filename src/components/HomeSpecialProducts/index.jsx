import React from "react";
import styles from "./index.module.css";
import SectionTitle from "../SectionTitle";
import { specialproductdata } from "../../data/specialproduc";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { specialproductdata2 } from "../../data/specialproductdata2";
import { clientreviewdata } from "../../data/clientreviewdata";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { LuQuote } from "react-icons/lu";
const HomeSpecialProduct = ({first, bg,name,pd, slide, section }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div style={{backgroundColor:bg,padding:pd}} className={styles.homespecialproductscontainer}>
        <div className={styles.specialproducttag}>
          <span className={styles.Specialtag}>{name}</span>
        </div>
        <SectionTitle name={section} />
        {!slide ? (
          <>
            <div className={styles.specialproductimgcontainer}>
              {specialproductdata.map((it) => {
                return (
                  <div className={styles.specialpiccontainer} key={it.id}>
                    <div  className={styles.imgcontainer}>
                      <img src={it.pic} alt="specialpropic" />
                    </div>
                    <span>{it.name}</span>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <Carousel
            swipeable={true}
            showDots={false}
            responsive={first ? responsive:responsive1}
            infinite={true}
            autoPlay={true}
            keyBoardControl={false}
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
           
          >
          {first ? 
specialproductdata2.map((it) => {
  return (
    <div
      className={styles.specialpiccontainer}
      style={{marginTop:"20px"}}
      key={it.id}
    >
      <div  className={styles.imgcontainer}>
        <img width={270} src={it.pic} alt="specialpropic" />
      </div>
      <span style={{fontSize:"20px",display:"inline-block",margin:"20px 0",fontWeight:"600",color:"rgba(0,0,0,0.833)"}}>{it.name}</span>
    </div>
  );
})
          :

          clientreviewdata.map(it=>{
            return  <div key={it.id} style={{width:"350px"}} className={styles.homeclientreview}>
            <div className={styles.topreview}>
             <div className={styles.topleftreveiw}>
                 <div className={styles.starcontainer}>
                     <i><FaStar size={20} color='#e8c54a'/></i>
                     <i><FaStar size={20} color='#e8c54a'/></i>
                     <i><FaStar size={20} color='#e8c54a'/></i>
                     <i><FaStar size={20} color='#e8c54a'/></i>
                     <i><FaRegStar  size={20} color='#e8c54a'/></i>
                 </div>
                 <h2 className={styles.name}>
                     {it.name}
                 </h2>
                 <span className={styles.titele}>
                     {it.location}
                 </span>
             </div>
             <div className={styles.toprightreview}>
                 <i><LuQuote size={60} color='#80b501' /></i>
             </div>
            </div>
            <div className={styles.bottomreview}>
             <p>{it.desc}</p>
            </div>
           </div>
         })
        }  
          </Carousel>
        )}
      </div>
    </>
  );
};

export default HomeSpecialProduct;
