import React from "react";
import styles from "./index.module.css";
import BreadCrumb from "../../components/breadCrumb";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

import ContactCart from "./Contactcart";
import GoogleComp from "../Googlemap";
import SubmitBTn from "../../widgets/Subhmitbtn";
import Container from "../../container";
const Contact = () => {
  return (
    <>
    <Container>
      <BreadCrumb h1="Contact" link="Contact" para=".Contact" />
      <div className={styles.contactcontainer}>
        <div className={styles.contactcartcontainer}>
          <ContactCart
            location="Our Location"
            paragraph="Swamini
        Kadage Building, Near Post Office, Jaisingpur, Tal Shirol. Dist Kolhapur."
            icon={<FaLocationDot size={40} color="white" />}
          />
          <ContactCart
            location="Our Email Address"
            paragraph="swaminionline2018@gmail.com"
            para="info@swamini.in"
            icon={<MdOutlineEmail size={40} color="white" />}
          />
          <ContactCart
            location="Contact Phone Number"
            paragraph="+9552665266"
            icon={<MdCall size={40} color="white" />}
          />
        </div>
      </div>
      <div className={styles.contactformandmapcontainer}>
        <div className={styles.mapcontainer}>
          <GoogleComp/>
        </div>
        <div className={styles.contactformcontainer}>
          <div className={styles.inputs}>
          <input type="text" placeholder="First Name*" />
          <input type="text" placeholder="Last Name*" />
          </div>
            <input type="text" placeholder="Email*" />
            <input type="text" placeholder="Phone*" />
            <textarea cols={10} rows={6} placeholder="Enter Message"></textarea>
            <div className={styles.btncont}>
              <SubmitBTn name="Send Message"/>
            </div>
        </div>
      </div>
      </Container>
    </>
  );
};

export default Contact;
