import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Pagination from "../../../shared/paginationheaders";
import { useNavigate } from "react-router-dom";
import Button from "../../../Components/button";
import Swal from "sweetalert2";
import { useCookies } from "react-cookie";
function MyProfile() {
  const jump = useNavigate();
  const handleNavigate = (path) => {
    jump(`/${path}`);
  };
  const [userData, setuserData] = useState([]);
  const getuserData = async (userid) => {
    console.log(userid);
    const re = await fetch("http://localhost:3000/api/v1/users/getuser", {
      method: "get",
      headers: { "content-type": "application-json" },
    });
    const data = await re.json();
    const result = data.data.filter((item) => item.userid == userid);
    setuserData(result);
  };
  useEffect(() => {
    getuserData(localStorage.getItem("userid"));
  }, []);

  //save user details
  const [name, setname] = useState("");
  const [country, setcountry] = useState("");
  const [email, setemail] = useState("");
  const [dob, setdob] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [nominee, setnominee] = useState("");
  const [gender, setgender] = useState("");
  const [mobile, setmobile] = useState("");
  const [pan, setpan] = useState("");
  const [pincode, setpincode] = useState("");
  const [district, setdistrict] = useState("");
  const [streat, setstreat] = useState("");
  const [nomineerelation, setnomineerelation] = useState("");

  const [readcookie,createcookie,removecookie]=useCookies("")
  const handlesave = async() => {
    if(name=="" || email=="" || dob=="" || gender=="" || mobile=="" || pan=="" || pincode=="" || streat=="" || district=="" || state=="" || country=="" || nominee=="" || nomineerelation==""){
      Swal.fire("All Fields is required")
    }else{
      const regex = /^[A-Za-z ]+$/;
      const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const mobileregex = /^(\+91[\s-]?|91[\s-]?|0)?[6-9]\d{9}$/;
      const pincoderegex = /^[1-9][0-9]{5}$/;
      if(emailregex.test(email)){
        if(mobileregex.test(mobile)){
          if(pincoderegex.test(pincode)){

            if(regex.test(name) && regex.test(nominee)){
              const res = await fetch("http://localhost:3000/api/v1/users/createuserdetails",{
                method:"POST",
                headers:{"Content-Type":"Application/json"},
                body:JSON.stringify({
                  userid:localStorage.getItem("uid"),
                  name:name,
                  email:email,
                  dob:dob,
                  gender:gender,
                  mobile:mobile,
                  pan:pan,
                  pincode:pincode,
                  streat:streat,
                  city:city,
                  district:district,
                  state:state,
                  country:country,
                  nominee:nominee,
                  nomineerelation:nomineerelation,
      
                })
              })
              const data = await res.json();
              console.log(data)
              if(data.msg=="User Details Already Save"){
                Swal.fire({
                  icon:"warning",
                  titleText:`Warn: : ${data.msg}`
                }) 
              }
              if(data.msg=="Save User Details Successfully"){
                Swal.fire({
                  icon:"success",
                  titleText:"Details Save Successfully"
                })
              }else{
                Swal.fire({
                  icon:"error",
                  titleText:`Error : ${data.msg}`
                })
              }
      
            }else{
              Swal.fire("Please enter correct name and nominee name")
            }

          }else{
            Swal.fire({
              icon:"error",
              titleText:`Please enter correct pin code`
            })
          }

        }else{
          Swal.fire({
            icon:"error",
            titleText:`Please enter correct mobile number`
          })
        }

      }else{
        Swal.fire({
          icon:"error",
          titleText:`Please enter correct email`
        })
      }
    }
  };

  return (
    <>
      <div className={styles.headerProfile}>
        <Pagination name1="Profile Management" name2="Edit Profile" />
        <p
          className={styles.backprofile}
          onClick={() => handleNavigate("user/profile_overview")}
        >
          Return to Profile
        </p>
      </div>
      <div className={styles.placementCont}>
        <p className={styles.content}>PLACEMENT & SPONSER DETAIL</p>
        <div className={styles.placementDetails}>
          {userData.map((item) => {
            return (
              <>
                <div className={styles.detail1}>
                  <p>Member ID : {item.userid}</p>
                  <p>Sponsor ID : {item.under_userid}</p>
                  <p>Placement ID : {item.under_userid}</p>
                </div>
                <div className={styles.detail1}>
                  <p>Joining Date : {item.joiningDate.slice(0, 10)}</p>
                  <p>Sponsor Name :{item.sponsarName}</p>
                  <p>Placement Name : {item.sponsarName}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className={styles.personalInfoCont}>
        <p className={styles.content}>EDIT PERSONAL INFORMATION</p>
        <div className={styles.pesonalInfos}>
          <div className={styles.inputCont}>
            <p>
              <span>* </span> Name
            </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter your name"
              className={styles.inputs}
            />
          </div>

          <div className={styles.inputCont}>
            <p>
              <span> </span> Gender
            </p>
            <div className={styles.inputs}>
              <input
                type="radio"
                value="male"
                onChange={(e) => setgender(e.target.value)}
                name="name"
              />{" "}
              Male &nbsp;
              <input
                type="radio"
                value="female"
                onChange={(e) => setgender(e.target.value)}
                name="name"
              />{" "}
              female
            </div>
          </div>
          <div className={styles.inputCont}>
            <p>
              <span>*</span> Country
            </p>

            <select
              className={styles.inputs}
              onChange={(e) => setcountry(e.target.value)}
            >
              <option>--select--</option>
              <option value="India">India</option>
              <option value="Japan">Japan</option>
              <option value="China">China</option>
              <option value="America">America</option>
            </select>
          </div>
          <div className={styles.inputCont}>
            <p>
              <span>* </span> Mobile No
            </p>
            <input
              type="number"
              value={mobile}
              onChange={(e) => setmobile(e.target.value)}
              placeholder="+91 9876543210"
              className={styles.inputs}
            />
          </div>
          <div className={styles.inputCont}>
            <p>
              <span> </span> Email Id
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter Email Id"
              className={styles.inputs}
            />
          </div>
          <div className={styles.inputCont}>
            <p>
              <span> * </span> PAN No
            </p>
            <input
              type="text"
              value={pan}
              onChange={(e) => setpan(e.target.value)}
              placeholder="BBWPY2736D"
              className={styles.inputs}
            />
          </div>
          <div className={styles.inputCont}>
            <p>
              <span> * </span> Date of Birth
            </p>
            <input
              type="date"
              value={dob}
              onChange={(e) => setdob(e.target.value)}
              className={styles.inputs}
            />
          </div>
          <div className={styles.inputCont}>
            <p>
              <span> * </span>Pin Code
            </p>
            <input
              type="number"
              value={pincode}
              onChange={(e) => setpincode(e.target.value)}
              placeholder="Enter Pin Code"
              className={styles.inputs}
            />
          </div>
          <div className={styles.inputCont}>
            <p>
              <span>*</span> State
            </p>

            <select
              onChange={(e) => setstate(e.target.value)}
              className={styles.inputs}
            >
              <option>--select--</option>
              <option value="Utter Pradesh">Utter Pradesh</option>
              <option value="Delhi">Delhi</option>
              <option value="Bihar">Bihar</option>
            </select>
          </div>
          <div className={styles.inputCont}>
            <p>
              <span></span> District
            </p>

            <select
              onChange={(e) => setdistrict(e.target.value)}
              className={styles.inputs}
            >
              <option>--select--</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Sitapur">Sitapur</option>
            </select>
          </div>
          <div className={styles.inputCont}>
            <p>
              <span></span> City
            </p>

            <select
              onChange={(e) => setcity(e.target.value)}
              className={styles.inputs}
            >
              <option>--select--</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Sitapur">Sitapur</option>
            </select>
          </div>
          <div className={styles.inputCont}>
            <p>
              <span> </span> Street/Landmark/Building (Address Block) :
            </p>
            <input
              type="text"
              value={streat}
              onChange={(e) => setstreat(e.target.value)}
              placeholder="Enter Street/Landmark/Building (Address Block) "
              className={styles.inputs}
            />
          </div>
          <div className={styles.inputCont}>
            <p>
              <span> </span>Nominee Name :
            </p>
            <input
              type="text"
              value={nominee}
              onChange={(e) => setnominee(e.target.value)}
              placeholder="Nominee Name "
              className={styles.inputs}
            />
          </div>
          <div className={styles.inputCont}>
            <p>
              <span></span> Nominee Relation
            </p>

            <select
              onChange={(e) => setnomineerelation(e.target.value)}
              className={styles.inputs}
            >
              <option>--select--</option>
              <option value="father">father</option>
              <option value="son">son</option>
            </select>
          </div>
        </div>
        <Button clicked={handlesave} value="Save Profile" />
      </div>
    </>
  );
}

export default MyProfile;
