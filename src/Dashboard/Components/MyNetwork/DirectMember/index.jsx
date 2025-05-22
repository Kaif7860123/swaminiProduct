import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import CommonNetwork from "../CommonNetwork";
import { directmemberth } from "../../../Data/UserTable/directmember/directmemberth";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const DirectMember = () => {
  const [directmember, setdirectmember] = useState([]);

 const [fromdate,setfromdate]=useState(null);
 const [todate,settodate]=useState(null)

  const handlefilter = async() => {
   
    const userid = localStorage.getItem("uid");

    let fromyear = fromdate?.slice(0, 4);
    let frommonths = fromdate?.slice(5, 7);
    let fromdate1 = fromdate?.slice(8, 10);
    let toyear = todate?.slice(0, 4);
    let tomonths = todate?.slice(5, 7);
    let todate1 = todate?.slice(8, 10);
    if (!fromdate1 || !todate1) {
      Swal.fire({
        icon: "warning",
        title: "Select Date",
        text: "Please Select both dates, from date and to date",
      });
      return null;
    }
    if (fromyear != toyear) {
      Swal.fire({
        icon: "warning",
        title: "Wrong Date",
        text: "The Difference between two Date must be 30 Days",
      });
      return null;
    }
    const from = new Date(fromdate);
    const to = new Date(todate);
    const dayDiff = (to - from) / (1000 * 60 * 60 * 24); // Calculate difference in days

    if (dayDiff > 30) {
      Swal.fire({
        icon: "warning",
        title: "Wrong Date",
        text: "The Difference between two Date must be 30 Days",
      });
      return null;
    }
    const res = await fetch(
      "http://localhost:3000/api/v1/users/getdirectmember",
      {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ userid: userid,fromdate:fromdate,todate:todate }),
      }
    );
    const data = await res.json();
    console.log(data);

    setdirectmember(data.data);
    if(data.status==200){
      Swal.fire({
        icon:"success",
        title:"Suceess",
        text:`${data.msg}`
      })
    }else{
      Swal.fire({
        icon:"error",
        title:"Wrong Details",
        text: `${data.msg}`
      })
    }
  };
  return (
    <>
      <CommonNetwork
        handlefilter={handlefilter}
        tddata={directmember}
        thdata={directmemberth}
        gap="20px"
        dis="grid"
        temp="repeat(2,1fr)"
        note="Note : Please Use Filter To View This Report."
        name2="Direct Member"
        name1="My Network"
        title="Direct Members"
        setfromdate={setfromdate}
        settodate={settodate}
      />
    </>
  );
};

export default DirectMember;
