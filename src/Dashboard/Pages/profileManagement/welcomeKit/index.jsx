import React, { useEffect, useRef, useState } from "react";
import Pagination from "../../../shared/paginationheaders";
import Button from "../../../Components/button";
import styles from "./index.module.css";
import begining from "../../../assets/welcomeKit/beginingstar.jpg";
import user from "../../../assets/dashboard/user.png";
import html2canvas from "html2canvas";
import jsPDF, {} from 'jspdf'
function WelcomeKit() {
  const[userData,setuserData]=useState([])
      const getuserData=async(userid)=>{
        console.log(userid)
        const re=await fetch("http://localhost:3000/api/v1/users/getuser",{
          method:"get",
          headers:{"content-type":"application-json"},
          
        }) 
        const data=await re.json()
        const result=data.data.filter((item)=>item.userid==userid)
        console.log(result)
        setuserData(result)
      }
      useEffect(()=>{
        getuserData(localStorage.getItem("uid"))
      },[])


      const certificateRef = useRef(null);
      const idcardref = useRef(null)
      const visitingref = useRef(null)

      const handlecertificate = ()=>{
       

       if (certificateRef.current) {
        html2canvas(certificateRef.current).then((canvas) => {
          const image = canvas.toDataURL("https://res.cloudinary.com/ranjeetkumar/image/upload/v1742356335/certificate_xzeqkm.png");
          const pdf = new jsPDF("landscape", "mm", "a4"); // Landscape mode
          pdf.addImage(image, "auto", 10, 10, 280, 200); // Adjust size
          pdf.save("certificate.pdf");
        });
      }

      }

      const handleidcard =()=>{
        if(idcardref.current){
          html2canvas(idcardref.current).then((canvas)=>{
            const image = canvas.toDataURL("https://res.cloudinary.com/ranjeetkumar/image/upload/v1742357394/cardimg_gvfr3p.avif");
            const pdf = new jsPDF("landscape","mm","a3");
            pdf.addImage(image,"auto",10,10,170,210)
            pdf.save("idcard.pdf")
          })
        }
      }

      const handlevisitingcard =()=>{
        if(visitingref.current){
          html2canvas(visitingref.current).then((canvas)=>{
            const image = canvas.toDataURL("https://res.cloudinary.com/ranjeetkumar/image/upload/v1742357394/cardimg_gvfr3p.avif");
            const pdf = new jsPDF("landscape","mm","a3");
            pdf.addImage(image,"auto",10,10,170,220);
            pdf.save("visiting.pdf")
          })
        }
      }
  return (
    <>
      <Pagination name1="Welcome Kit" />
      <h2 className={styles.heading}>Certificate</h2>
      <Button clicked={handlecertificate} value="Download" content="left" />
      <div className={styles.certificateImgCont} >
        {
          userData.map((item,i)=>{
            return<><div key={i} className={styles.certificateIMg} ref={certificateRef} >
          <div className={styles.logoImg}>
            <img src={begining} className={styles.begining} />
          </div>
          <div className={styles.contents}>
            <p className={styles.membership}>Certificate of Membership</p>
            <p className={styles.presented}>Presented to</p>
            <h1 className={styles.name}>{item.name}</h1>
            <p className={styles.text}>
              For the Honourable Membership of the Swamini.
            </p>
            <p className={styles.text}>
              Your cordial Association is welcome in the Business Family Wish
              you Bright
            </p>
            <p className={styles.text}>Future of Growth</p>
          </div>
          <div className={styles.personalDetails}>
            <div>
              <p>Name : {item.name}</p>
              <p>Member ID :{item.userid}</p>
              <p>Date :{item.joiningDate.slice(0,10)}</p>
            </div>
            <div>
              <p>Address : {item.address}
              </p>
              <p>Website : https://swamini.in/</p>
              <p>Email : {item.email}</p>
            </div>
          </div>
        </div></>
            
          })
        }
       
      </div>
      <div className={styles.cardCont}>
        {
          userData.map((item,i)=>{
            return<><h2 className={styles.heading} key={i}>ID Card</h2>
        <Button value="Download" clicked={handleidcard} content="left" />
        <div className={styles.card}>
          <div className={styles.cardImg} ref={idcardref}>
            <div className={styles.logoImg2}>
              <img src={begining} className={styles.begining} />
            </div>
            <div className={styles.userImg}>
              <img src={user} className={styles.user} />
            </div>
            <div className={styles.content}>
              <p>Member - {item.userid}</p>
              <p> Name - {item.name}</p>
              <p> Mobile No. - {item.mobile} </p>
              <p> _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </p>
              <p> Authorized Signature </p>
              <p> Visit Us - https://swamini.in/ </p>
            </div>
          </div>
        </div>
</>
            
          })
        }
        </div>
        
      <div className={styles.cardCont}>
        {
          userData.map((item,i)=>{
            return<><h2 className={styles.heading} key={i} >Visit Card</h2>
        <Button clicked={handlevisitingcard} value="Download" content="left" />
        <div className={styles.card}>
          <div className={styles.cardImg} ref={visitingref}>
            <div
              className={styles.logoImg2}
              style={{ justifyContent: "right" }}
            >
              <img src={begining} className={styles.begining} />
            </div>
            <div className={styles.userSection}>
              <div className={styles.userImg2}>
                <img src={user} className={styles.user} />
              </div>
              <div className={styles.userDetailText}>
                <p className={styles.member}>{item.userid}</p>
                <p>{item.mobile}</p>
              </div>
            </div>
            <div className={styles.contentSection}>
              <p className={styles.userName}>Name - {item.name}</p>
              <p className={styles.email}>Email -{item.email}</p>
              <p className={styles.link}>Visit Us - https://swamini.in/</p>
              </div>
             
          </div>
        </div>
              </>
            
          })
        }
       
      </div>
    </>
  );
}

export default WelcomeKit;
