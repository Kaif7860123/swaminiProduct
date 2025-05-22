import React, { useState } from "react";
import CommonNetwork from "../CommonNetwork";
import { golddownlinememberth } from "../../../Data/UserTable/golddownline/golddownlinethdata";
import Swal from "sweetalert2";
import { userdataActions } from "../../../../Redux/Slices";
import { useDispatch } from "react-redux";
const GoldDownlineMember = () => {
  const dispatch = useDispatch()
  const [golddownline,setgolddownline]=useState([])
  const [fromdate, setfromdate] = useState(null);
  const [todate, settodate] = useState(null);
  const [poss, setposs] = useState(null);

  const handlegolddownline = async () => {
    const userid = localStorage.getItem("uid");
    if (!poss || !fromdate || !todate) {
      Swal.fire({
        icon: "warning",
        title: "Wrong Fields",
        text: "Position, From Date and To date is required",
      });
      return null;
    }
    const from = new Date(fromdate);
    const to = new Date(todate);
    const dayDiff = (to - from) / (1000 * 60 * 60 * 24); // Calculate difference in days

    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

    if (from < threeMonthsAgo) {
      Swal.fire({
        icon: "warning",
        title: "Wrong Months",
        text: "From Date must be within the last 3 months",
      });
      return null;
    }
    if (dayDiff > 30) {
      Swal.fire({
        icon: "warning",
        title: "Wrong Date",
        text: "The Difference between two Date must be 30 Days",
      });
      return null;
    }
    dispatch(userdataActions.setloader(true));
    const res = await fetch(
      "http://localhost:3000/api/v1/users/getgolddownlinemember",
      {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({
          userid: userid,
          fromdate: fromdate,
          todate: todate,
          position: poss,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    dispatch(userdataActions.setloader(false));
    setgolddownline(data.data);
    if (data.status == 200) {
      Swal.fire({
        icon: "success",
        title: "Suceess",
        text: `${data.msg}`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Wrong Details",
        text: `${data.msg}`,
      });
    }
  };
  return (
    <>
      <CommonNetwork
        poss={poss}
        setposs={setposs}
        setfromdate={setfromdate}
        settodate={settodate}
        handlefilter={handlegolddownline}
        tddata={[]}
        thdata={golddownlinememberth}
        gap="20px"
        dis="grid"
        temp="repeat(2,1fr)"
        child="Position:"
        th5={false}
        th6={false}
        th4="Date"
        th3="Name"
        th2="Member Id"
        th1="Sr.No."
        note="Note : This Report shows records of previous 3 months only, please use filters to view report."
        name2="Gold Downline Members"
        name1="My Network"
        title="Downline Members"
      />
    </>
  );
};

export default GoldDownlineMember;
