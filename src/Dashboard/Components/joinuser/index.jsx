import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import InputBox from "../inputBox";
import SelectOption from "../selectOption";
import AdminTitltSection from "../AdminTitleSection";
import Button from "../button";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
const JoinUser = () => {
  const [pin, setpin] = useState("");
  const [underUserId, setunderuserid] = useState("");
  const [createuser, setcreateuser] = useState([]);
  const [name, setname] = useState("");
  const [userid, setuserid] = useState("");
  const [data, setdata] = useState([
    { userid: "", sponsarName: "", under_userid: "" },
  ]);
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");
  const [joiningDate, setjoiningdate] = useState("");
  const [side, setside] = useState("");
  const [userData, setuserData] = useState([]);
  let [matchedSponsorName, setmatchedSponsorName] = useState("");
  const [readcookie, createcookie, removecookie] = useCookies();

  const [decryptUserData, setdecryptuserData] = useState([]);
  const [check, setcheck] = useState(false);
  const[msg,setmsg]=useState("")
  const userviewpindata = useSelector(state=>state.userdata.userviewpindata);

  const usergetdata = async (id) => {
    const res = await fetch("http://localhost:3000/api/v1/users/getuserdata", {
      method: "Post",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ userid: id }),
    });
    const data = await res.json();
    setdecryptuserData([data]);

  };

  const createUser = async () => {
    let randomUserId = "BGS" + Math.floor(Math.random() * 1000000 + 1);
    const randomPass = "P" + Math.floor(Math.random() * 10000 + 1) + "B";
    const randomTransactionPass=Math.floor(Math.random()*1000000+1)
    createcookie("random", randomUserId);
    const res = await fetch("http://localhost:3000/api/v1/users/createuser", {
      method: "post",
      headers: { "content-type": "application/json" },

      body: JSON.stringify({
        pin: pin,
        userid: randomUserId,
        under_userid: underUserId,
        email: email,
        name: name,
        password: randomPass,
        mobile: mobile,
        address: address,
        joiningDate: joiningDate,
        side: side,
        sponsarName: matchedSponsorName,
        transactionPassword:randomTransactionPass
      }),
    });
    const data = await res.json();
    if(data.msg=="User already exist"){
      createUser()
    }
    else if(data.msg!="Created User Successfully"){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        
      });
      alert(data.msg);
    }
    else{
      setdata([data.data]);
      console.log([data.data],"join user");
      usergetdata([data.data][0].userid);
      setcheck(true);
      setmsg(data.msg)
      alert(data.msg);

      console.log(check,msg)
      Swal.fire({
        title: "created successfully!",
        icon: "success",
        draggable: true})

    }
      setname("")
      setemail("")
      setaddress("")
        setjoiningdate("")
        setmobile("")
        setunderuserid("")
        setmatchedSponsorName("")
        
     
 
  };
  const getUser = async () => {
    console.log("get user")
    const re = await fetch("http://localhost:3000/api/v1/users/getuser", {
      method: "get",
      headers: { "content-type": "application/json" },
    });
    const data = await re.json();
    setuserData(data.data);
    console.log(data.data)
    const filterdata = data.data.filter((it) => {
      return it.userid == readcookie["random"];
    });
    setcreateuser(filterdata);
  };
  const handleSponsorId = (e) => {
    setunderuserid(e.target.value);
    const matchedSponsor = userData.filter((item) => {
      return item.userid == e.target.value;
    });
    console.log(matchedSponsor);
    if (matchedSponsor.length == 0) {
      setmatchedSponsorName("sponsor name not found");
    } else {
      setunderuserid(matchedSponsor[0].userid);
      setmatchedSponsorName(matchedSponsor[0].name);

      console.log(matchedSponsor[0].name);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className={styles.joincontainer}>
        <AdminTitltSection title="Join" />

        <div className={styles.joinUserCont}>
          <div className={styles.inputUserSection}>
            <SelectOption
              para="Pin"
              onchange={(e) => setpin(e.target.value)}
              opt1="select a pin"
              opt2="313127-Rs. 3000"
              opt3="313128-Rs. 3000"
              opt4="313129-Rs. 3000"
              opt={userviewpindata}
            />

            <InputBox
              para="Sponsor Id"
              type="text"
              onchange={(e) => handleSponsorId(e)}
              value={underUserId}
            />
            <InputBox
              para="Sponsor Name"
              type="text"
              value={matchedSponsorName}
              readonly="readonly"
              onchange={(e) => setmatchedSponsorName(e.target.value)}
            />
            <InputBox
              para="Name"
              type="text"
              value={name}
              onchange={(e) => setname(e.target.value)}
            />
            <InputBox
              para="Email"
              type="text"
              onchange={(e) => setemail(e.target.value)}
            />
            <InputBox
              para="Mobile"
              type="text"
              value={mobile}
              onchange={(e) => setmobile(e.target.value)}
            />
            <InputBox
              para="Address"
              type="text"
              value={address}
              onchange={(e) => setaddress(e.target.value)}
            />
            <InputBox
              para="Joining Date"
              type="date"
              value={joiningDate}
              onchange={(e) => setjoiningdate(e.target.value)}
            />

            <SelectOption
              para="Side"
              opt0="...select..."
              opt1="Left"
              opt2="Right" 
               
              onchange={(e) => setside(e.target.value)}
            />
            <Button value="Submit" content="left" clicked={createUser} />
          </div>

         {
          (msg=="Created User Successfully") &&<div className={styles.joinedUserSuccess}>
          <h1>Joined Successfully</h1>
          {decryptUserData.map((item,i) => {
            return (
              <>
                <div className={styles.userDetail}>
                  <h3>Sponsor Id</h3>
                  <span key={i}>{item.under_userid} </span>
                </div>
                <div className={styles.userDetail}>
                  <h3>sponsar name</h3>
                  <span key={i}>{item.sponsarName} </span>
                </div>
                <div className={styles.userDetail}>
                  <h3>user id</h3>
                  <span key={i}>{item.userid} </span>
                </div>
                <div className={styles.userDetail}>
                  <h3>Name</h3>
                  <span key={i}>{item.name} </span>
                </div>
                <div className={styles.userDetail}>
                  <h3>Password</h3>
                  <span key={i}>{item.password} </span>
                </div>
                <div className={styles.userDetail}>
                  <h3>Transaction Password</h3>
                  <span key={i}>{item.transactionPassword} </span>
                </div>
                <div className={styles.userDetail}>
                  <h3>Email</h3>
                  <span key={i}>{item.email} </span>
                </div>
                <div className={styles.userDetail}>
                  <h3>Mobile</h3>
                  <span key={i}>{item.mobile} </span>
                </div>
                <div className={styles.userDetail}>
                  <h3>Address</h3>
                  <span key={i}>{item.address} </span>
                </div>
              </>
            );
          })}
        </div>
         }
        </div>
      </div>
    </>
  );
};

export default JoinUser;









 