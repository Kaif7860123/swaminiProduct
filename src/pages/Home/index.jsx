import React from "react";
import styles from "./index.module.css";
import HomeBannerCarosel from "../../components/HomeBanner";
import HomeLeaderSlider from "../../components/HomeLeaderSlider";
import HomeAboutCompany from "../../components/HomeCompanydetails";
import HomeSpecialProduct from "../../components/HomeSpecialProducts";
import HomeOurMission from "../../components/HomeOurMission";
import HomeFeatures from "../../components/HomeFeatues";
import pic from '../../assets/home/banner.png'
const Home = () => {
  return (
    <>
      <HomeBannerCarosel/>
      <div className={styles.homeleaderslider}>
      <HomeLeaderSlider />
      </div>
      <HomeAboutCompany/>
      <HomeSpecialProduct slide={false} section="Joining Products" name="Special"/>
      <HomeOurMission/>
      <HomeFeatures/>
      <HomeSpecialProduct first={true} slide={true} section="Featured Product" name="Top Sale"/>
      <HomeSpecialProduct bg="#f0f0f0" pd="100px" first={false} slide={true} section="Client Feedback" name="Testimonials"/>
     
      <div className={styles.bannerbottompic}>
      <img src={pic} alt="banner2" />
      </div>
    </>
  );
};

export default Home;
