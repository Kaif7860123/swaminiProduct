import React, { useState } from 'react'
import CommonNetwork from '../CommonNetwork'
import { downlinememberth } from '../../../Data/UserTable/downline/downline';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { userdataActions } from '../../../../Redux/Slices';
const DownlineMember = () => {
    const [downlinemember, setdownlinemember] = useState([]);
    const dispatch  = useDispatch()
   const [fromdate,setfromdate]=useState(null);
    const [todate,settodate]=useState(null);
    
    const [poss,setposs]=useState(null)
  
    const handlefilter = async() => {
      const userid = localStorage.getItem("uid");
      if(!poss){
        Swal.fire({
          icon: "warning",
          title: "Wrong Position",
          text: "Position is required",
        });
        return null;
      }
      const from = new Date(fromdate);
      const to = new Date(todate);
      const dayDiff = (to - from) / (1000 * 60 * 60 * 24); // Calculate difference in days
    
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3); //calculate 3 months only acceptable
      
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
      dispatch(userdataActions.setloader(true))
      const res = await fetch(
        "http://localhost:3000/api/v1/users/getdownlinemember",
        {
          method: "POST",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify({ userid: userid,fromdate:fromdate,todate:todate,position:poss }),
        }
      );
      const data = await res.json();
      console.log(data);
      dispatch(userdataActions.setloader(false))
      setdownlinemember(data.data);
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
     <CommonNetwork poss={poss} setposs={setposs}   setfromdate={setfromdate} settodate={settodate} bool={false} tddata={downlinemember??[]} handlefilter={handlefilter} gap="20px" dis="grid" temp="repeat(2,1fr)" child="Position:" thdata={downlinememberth} note="Note : This Report shows records of previous 3 months only, please use filters to view report." name2="Downline Member" name1="My Network" title="Downline Members"/>
      
    </>
  )
}

export default DownlineMember
