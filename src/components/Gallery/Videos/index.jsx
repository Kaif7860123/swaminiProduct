import React from "react";
import styles from "./index.module.css";
import BreadCrumb from "../../breadCrumb";
const Video = () => {
  return (
    <>
      <BreadCrumb link="Home" h1="Videos" para=".Videos" />
      <div className={styles.youtubevideocontainer}>
        <div className={styles.videofrist}>
          <iframe
          width="300"
            height="250"
            src="https://www.youtube.com/embed/JYhM9S3KQ5I?si=3jofosIA66FT0gF_"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <span>KVS Lead the Leader’s Program</span>
        </div>
        <div className={styles.videofrist}>
          <iframe
            width="300"
            height="250"
            src="https://www.youtube.com/embed/wLX1d2ms3gA?si=BO6ZjwfeyoI1JjZT"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <span>KVS Lead the Leader’s Program</span>
        </div>
      </div>
    </>
  );
};

export default Video;
