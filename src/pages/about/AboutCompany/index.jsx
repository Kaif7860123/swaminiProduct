import React from "react";
import styles from "./index.module.css";
import BreadCrumb from "../../../components/breadCrumb";
import Swamini from "../../../components/breadCrumb/aboutSwamini";
import moringa from "../../../assets/about/moringa.png";
import farming from "../../../assets/about/farming.jpg";
const AboutCompany = () => {
  return (
    <>
      <div className={styles.aboutCont}>
      <BreadCrumb h1="Opportunity" link="Home"para=".Awards & Rewards" />

        <div className={styles.aboutBody}>
          <Swamini welcome="WELCOME TO SWAMINI" about="About Swamini" text1="We have been actively engaged in MLM and various businesses for
                      the last two decades, gaining vast experience from 2001 to 2024.
                      As successful entrepreneurs, we have met countless people and
                      established business relationships. We have conducted in-depth
                      studies on efficient industry and manpower building in both
                      private and cooperative sectors, as well as developed excellent
                      expertise in production and marketing chains." text2=" We have successfully driven our personal and business growth
                      through financial planning. To promote environmentally friendly
                      sustainable farming, we have studied the adverse effects of
                      chemical farming and continuously contributed to the use and
                      promotion of organic farming." moringa={moringa} farming={farming} width="470px"/>
           
          <p className={styles.text}>
            Our dream is to elevate the youth of emerging India to new heights.
            To achieve this goal, more than 900,000 entrepreneurs are
            dedicatedly working with us. Our aim is to inspire the youth through
            our experience and knowledge and lead them on the path to success.
          </p>

          <p className={styles.text}>
            We invite youth, women, and students to join us and step towards a
            brighter future. By working with us, they can not only gain
            professional skills and financial stability but also contribute to
            bringing about positive change in society. We believe that by
            working together, we can build a strong and prosperous India
          </p>
          <p className={styles.swamini}>History of Swamini</p>
          <p className={styles.text}>
            We at Swamini take pride in achieving new heights of success with
            our unique inspiration and enthusiasm. Under the leadership of Sunil
            Khot sir, our team has established a recognizable presence in the
            competitive market and surpassed the standards of excellence. As
            part of our mission, we are committed to propelling individuals
            towards financial independence and success through Swamini.
          </p>
          <p className={styles.text}>
            Our inspiration and energy drive Swamini towards constant
            excellence. Our enthusiasm provides us with the strength to overcome
            every challenge and instills positivity and confidence in our
            interactions. We are dedicated and capable in our work, always
            striving to serve our customers consistently.
          </p>
          <p className={styles.text}>
            Since our establishment in 2017, we have adhered to the values of
            reliability, quality, and responsiveness. We proudly affirm that our
            company has remained resilient in managing its operations and
            maintained the trust of our customers through outstanding
            performance.
          </p>
          <p className={styles.text}>
            By joining Swamini, you are inspired to a successful and prosperous
            future. Thank you.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
