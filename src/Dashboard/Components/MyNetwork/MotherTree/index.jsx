import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Networktitle from "../networktitle";
import TreeSymbol from "./treeSymbol";
import pic from "../../../assets/image1.jpg";
import SubmitBTn from "../../../widgets/Subhmitbtn";
import greenJoin from "../../../assets/green-join.png";
import parent from "../../../assets/yellow.png";
import Title from "../networktitle/Title";
import Pagination from "../../../shared/paginationheaders";
import JoinUser from "../../joinuser";
import { useNavigate } from "react-router-dom";
const MotherTree = () => {
  
  const [userid, setuserid] = useState("");
  const [rootUser, setRootUser] = useState([]);
  const [rootSubData, setRootSubData] = useState([]);
  const [rootSubData1, setRootSubData1] = useState([]);
  const [subChildData1, setSubChildData1] = useState([]);
  const [subChildData2, setSubChildData2] = useState([]);
  const [subChildData3, setSubChildData3] = useState([]);
  const [subChildData4, setSubChildData4] = useState([]);
  const [uid, setuid] = useState();
const[range1,setrange1]=useState("")
const[range2,setrange2]=useState("")
const[roothour1,setroothour1]=useState("")
const[roothour2,setroothour2]=useState("")
const[subhour1,setsubhour1]=useState("")
const[subhour2,setsubhour2]=useState("")
const[subhour3,setsubhour3]=useState("")
const[subhour4,setsubhour4]=useState("")
 let rootHour1,rootHour2,subHour1,subHour2,subHour3,subHour4;
  useEffect(() => {
    const loggedId = localStorage.getItem("loggedUserId");
    filterUser(loggedId);

  }, []);
  const filterUser = async (userid) => {
  
    const rootUser = await fetch(
      "http://localhost:3000/api/v1/users/getRootUser",
      {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ userid }),
      }
    );
    const rootData = await rootUser.json();
    setRootUser([rootData]);
    // if(rootData){

    // }
    const res = await fetch("http://localhost:3000/api/v1/users/motherTree", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ userid }),

    });

    const data = await res.json();
    // setRootSubData(data.userData)

    setRootSubData(data.userData[0]);
    setRootSubData1(data.userData[1]);

    console.log(data.userData[0], "rootsubdata");
     rootHour1=data.userData[0].createdAt.slice(11,13)
    console.log("roothouer1",rootHour1)
    // setroothour1(rootHour1)
    let rootHour2=data.userData[1].createdAt.slice(11,13)
    console.log("roothouer2",rootHour2)
    // setroothour2(rootHour2)
    // if(isAfternoonToMidnight(rootHour1)){
    //   console.log("again called")
    //   if(isAfternoonToMidnight(rootHour2)){
    //     console.log("second time called")
    //     setrange2("Afternoon to Midnight range")
    //     console.log("kaif",roothour1,roothour2)
    //     if(range1==range2){
    //       console.log("pair matched")
    //     }
    //   }
    //   else{
    //   console.log("pair not matched")
  
    //   }
    // }
    // else{
    //   console.log("pair not matched")
    // }
    // console.log("object rootHour1",rootHour1)
    // console.log("object rootHour2",rootHour2)
    
    const childUserId1 = data?.userData[0]?.userid;
    getChildUserData1(childUserId1);

    console.log(data.userData[1], "rootsubdata1");
    const childUserId2 = data?.userData[1]?.userid;
    getChildUserData2(childUserId2);
    // updateTime()
  rangeCheck()
  };
  const getChildUserData1 = async (userid) => {
    const res = await fetch("http://localhost:3000/api/v1/users/motherTree", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ userid }),
    });
    const data = await res.json();
    setSubChildData1(data.userData[0]);
    setSubChildData2(data.userData[1]);
    console.log("subchild1 data", data.userData[0]);
    console.log("subchild2 data", data.userData[1]);
    // let subHour1=data.userData[0].createdAt.slice(11,13)
    // setsubhour1(subhour1)
    // let subHour2=data.userData[1].createdAt.slice(11,13)
    // setsubhour2(subhour2)
    // console.log("object subHour1",subHour1)
    // console.log("object subHour3",subhour3)
    // if(isAfternoonToMidnight(subHour1)){
    //   if(isAfternoonToMidnight(subhour3)){
    //     setrange2("Afternoon to Midnight range")
    //     console.log("kaif")
    //     if(range1==range2){
    //       console.log("pair matched")
    //     }
    //   }
    //   else{
    //   console.log("pair not matched")

    //   }
    // }
    // else{
    //   console.log("pair not matched")
    // }
    console.log("child1 data", data);
  };
  const getChildUserData2 = async (userid) => {
    const res = await fetch("http://localhost:3000/api/v1/users/motherTree", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ userid }),
    });
    const data = await res.json();
    setSubChildData3(data.userData[0]);
    setSubChildData4(data.userData[1]);
    console.log("subchild3 data.createdAt", data.userData[0]);
    // let subHour3=data.userData[0].createdAt.slice(11,13)
    // setsubhour3(subHour3)
    // let subHour4=data.userData[1].createdAt.slice(11,13)
    // setsubhour4(subHour4)
    // console.log("object subHour22",subhour2)
    // console.log("object subHour4",subHour4)
    // if(isAfternoonToMidnight(subhour2)){
    //   if(isAfternoonToMidnight(subHour4)){
    //     setrange2("Afternoon to Midnight range")
    //     console.log("kaif")
    //     if(range1==range2){
    //       console.log("pair matched")
    //     }
    //   }
    //   else{
    //   console.log("pair not matched")

    //   }
    // }
    // else{
    //   console.log("pair not matched")
    // }
    
    console.log("subchild4 data", data.userData[1]);
    console.log("child 2 data", data);
    // console.log("subchild data3", subChildData3);
  };
  const navigate=useNavigate()  
  const navigateRegister=()=>{
    navigate("/user/New_Register")
  }
   const[formatedTime,setFormatedTime]=useState("")
   function isAfternoonToMidnight(hour, minute = 0) {
    console.log(hour)
    return hour >= 12 && hour <= 23; // 12 PM (Noon) to 11:59 PM
}

// Example Usage
const rangeCheck=()=>{
  let now = new Date();
  let currentHour= now.getHours();
  // const periods=hours>=12?"PM":"AM"
  //   let displayHours = hours % 12 || 12;
  let currentMinute = now.getMinutes();
  console.log("current minutes is:",currentMinute)
  // let currentHour=`${displayHours}${periods}`
  const check=isAfternoonToMidnight(currentHour)
  console.log("check is",check)
  if (check) {
    setrange1("Afternoon to Midnight range")
      console.log("The current time is in the Afternoon to Midnight range.");
  
  } else {
    setrange1("Midnight to Afternoon range")

      console.log("The current time is in the Midnight to Afternoon range.");
  }
  // checkPairMatched()
}
// const checkPairMatched=async()=>{
//  console.log("called",roothour1)
//  console.log("checked",isAfternoonToMidnight(roothour1))

//   if(isAfternoonToMidnight(roothour1)){
//     console.log("again called")
//     if(isAfternoonToMidnight(roothour2)){
//       console.log("second time called")
//       setrange2("Afternoon to Midnight range")
//       console.log("kaif",roothour1,roothour2)
//       if(range1==range2){
//         console.log("pair matched")
//       }
//     }
//     else{
//     console.log("pair not matched")

//     }
//   }
//   else{
//     console.log("pair not matched")
//   }
// }
  const updateTime=()=>{
    const now=new Date()
    const hours=now.getHours()
    const minutes=now.getMinutes()
    const seconds=now.getSeconds()
    const periods=hours>=12?"PM":"AM"
    let displayHours = hours % 12 || 12; // Convert 24-hour to 12-hour format
    let formattedTime = `${displayHours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}${periods}`;

    setFormatedTime(formattedTime)
     
  }
  setInterval(updateTime,1000)
  
  
  return (
    <>
      <Pagination name1="My Network" name2="Mother Tree" />

      <div className={styles.mothertreecontainer}>
        <Title title="Mother Tree" />
        <TreeSymbol />
        <div className={styles.memberidandsybol}>
          <div className={styles.leftcolums}>
            <div className={styles.logopics}>
              <img src={pic} alt="userpic" />
            </div>
            <span>Search Team</span>
            <ul>
              <li>{userid}</li>
            </ul>
          </div>
          <div className={styles.rightcontainer}>
            <div className={styles.rightcolums}>
              <div className={styles.inputlabel}>
                <label>Member Id:</label>
                <input
                  type="text"
                  name="memberid"
                  placeholder="Enter Member Id"
                  onChange={(e) => setuserid(e.target.value)}
                />

              </div>
              <div className={styles.filterbtn}>
                <SubmitBTn name="Filter" onclick={() => filterUser(userid)} />
              </div>
              <div style={{display:"flex", alignItems:"center", marginTop:"25px"}}>
                <div style={{backgroundColor:"red", padding:"10px"}}>
                {formatedTime}
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className={styles.mothertreecontainer2}>
          <div className={styles.hvwraper}>
            <div className={styles.hvitem}>
              <div className={styles.hvitemparent}>
                <div className={styles.person}>
                  <div className={styles.tooltip}>
                    <div className={styles.imgcontainer}>
                      <img src={parent} alt="parentpic" />
                    </div>
                  </div>
                  {rootUser.map((item, i) => {
                    return (
                      <div className={styles.parentdetails}  key={i}>
                        <span>{item?.userid}</span>
                        <span>{item?.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.hvitemchildren}>
                {/* left side */}
                {rootSubData?.side == "Left" ? (
                  <div className={styles.hvitemchild}>
                    <div className={styles.hvitem}>
                      <div className={styles.hvitem}>
                        <div className={styles.hvitemparent}>
                          <div className={styles.person}>
                            <div className={styles.tooltip}>
                              <div className={styles.imgcontainer}>
                                <img src={parent} alt="parentpic" />
                              </div>
                            </div>
                            {
                              <div className={styles.parentdetails}>
                                <span >{rootSubData?.userid}</span>
                                <span>{rootSubData?.name} </span>
                              </div>
                            }
                          </div>
                        </div>
                        {/* {
                          (subChildData3||subChildData4)&& */}
                         
                         
                        <div className={styles.hvitemchildren}>
                          {subChildData1?.side == "Left" ? (
                            <div className={styles.hvitemchild}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={parent} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData1?.userid)}>{subChildData1?.userid}</span>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData1?.userid)}>{subChildData1?.name}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : subChildData2 && subChildData1 ? (
                            <div className={styles.hvitemchild}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={parent} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      {/* <span>Open</span> */}
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData2?.userid)}>{subChildData2?.userid}</span>

                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData2?.userid)}>{subChildData2?.name}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className={styles.hvitemchild} style={{cursor:"pointer"}} onClick={navigateRegister}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={greenJoin} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      <span>Open</span>
                                      {/* <span>{subChildData2 ?.name}</span> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {subChildData2?.side == "Right" ? (
                            <div className={styles.hvitemchild}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={parent} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData2?.userid)}>{subChildData2?.userid}</span>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData2?.userid)}>{subChildData2?.name}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                           subChildData1?.side=="Right"?
                            <div className={styles.hvitemchild}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img
                                          src={parent}
                                          alt="parentpic"
                                        />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      <span>{subChildData1?.userid}</span>

                                      <span>{subChildData1?.name}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            :
                            <div className={styles.hvitemchild} style={{cursor:"pointer"}} onClick={navigateRegister}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={greenJoin} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      <span>Open</span>
                                      {/* <span>{subChildData1 ?.name}</span> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* } */}
                      </div>
                    </div>
                  </div>
                        
                ) : rootSubData1?.side != "Right" && rootSubData1 ? (
                  <div className={styles.hvitemchild}>
                    <div className={styles.hvitem}>
                      <div className={styles.hvitem}>
                        <div className={styles.hvitemparent}>
                          <div className={styles.person}>
                            <div className={styles.tooltip}>
                              <div className={styles.imgcontainer}>
                                <img src={parent} alt="parentpic" />
                              </div>
                            </div>
                            <div className={styles.parentdetails}>
                              <span>{rootSubData1?.userid}</span>
                              <span> dff</span>
                            </div>
                          </div>
                        </div>

                        {/* { (subChildData3||subChildData4)&& jii */}
                        <div className={styles.hvitemchildren}>
                          {/* {
                            subChildData3||subChildData4
                          } */}
                          {subChildData3?.side == "Left" ? (
                            <div className={styles.hvitemchild}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={parent} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData3?.userid)}>{subChildData3?.userid}</span>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData3?.userid)}>{subChildData3?.name}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : subChildData4?.side != "Right"&&subChildData4 ? (
                            <div className={styles.hvitemchild}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={parent} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData4?.userid)}>{subChildData4?.userid}</span>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData4?.userid)}>{subChildData4?.name}</span>
                                      {/* <span>Open</span> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                           :
                            (
                            <div className={styles.hvitemchild}  style={{cursor:"pointer"}} onClick={navigateRegister}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={greenJoin} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      <span>Open</span>
                                      {/* <span>{subChildData4?.userid}</span>
                                      <span>{subChildData4?.name}</span> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {subChildData4?.side == "Right" ? (
                            <div className={styles.hvitemchild}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={parent} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData4?.userid)}>{subChildData4?.userid}</span>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData4?.userid)}>{subChildData4?.name}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : subChildData3?.side != "Left"&&subChildData3 ? (
                            <div className={styles.hvitemchild}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={parent} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData3?.userid)}>{subChildData3?.userid}</span>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData3?.userid)}>{subChildData3?.name}</span>
                                      {/* <span>Open</span> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className={styles.hvitemchild}  style={{cursor:"pointer"}} onClick={navigateRegister}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={greenJoin} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      <span>Open</span>
                                      {/* <span>{subChildData3?.name}</span> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={styles.hvitemchild} style={{cursor:"pointer"}} onClick={navigateRegister}>
                    <div className={styles.hvitem}>
                      <div className={styles.hvitemparent}>
                        <div className={styles.person}>
                          <div className={styles.tooltip}>
                            <div className={styles.imgcontainer}>
                              <img src={greenJoin} alt="parentpic" />
                            </div>
                          </div>
                          <div className={styles.parentdetails}>
                            <span>Open</span>
                            {/* <span>{subChildData2?.userid}</span>
                                    <span>{subChildData2?.name}</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* right side */}
                {rootSubData1?.side == "Right" ? (
                  <div className={styles.hvitemchild}>
                    <div className={styles.hvitem}>
                      <div className={styles.hvitem}>
                        <div className={styles.hvitemparent}>
                          <div className={styles.person}>
                            <div className={styles.tooltip}>
                              <div className={styles.imgcontainer}>
                                <img src={parent} alt="parentpic" />
                              </div>
                            </div>
                            {
                              <div className={styles.parentdetails}>
                                <span>{rootSubData1?.userid}</span>
                                <span>{rootSubData1?.name} </span>
                              </div>
                            }
                          </div>
                        </div>

                        <div className={styles.hvitemchildren}>
                          {subChildData3?.side == "Left" ? (
                            <div className={styles.hvitemchild}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={parent} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData3?.userid)}>{subChildData3?.userid}</span>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData3?.userid)}>{subChildData3?.name}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : subChildData4 ? (
                            <div className={styles.hvitemchild}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  {}
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={parent} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      {/* <span>Open</span> */}
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData4?.userid)}>{subChildData4?.userid}</span>

                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData4?.userid)}>{subChildData4?.name}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className={styles.hvitemchild}  style={{cursor:"pointer"}} onClick={navigateRegister}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                               
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={greenJoin} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      <span>Open</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {subChildData4?.side == "Right" ? (
                            <div className={styles.hvitemchild}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={parent} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData4?.userid)}>{subChildData4?.userid}</span>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData4?.userid)}>{subChildData4?.name}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : subChildData3?.side!="Left"&&subChildData3 ? (
                            <div className={styles.hvitemchild}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={parent} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      {/* <span>Open</span> */}
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData3?.userid)}>{subChildData3?.userid}</span>
                                      <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData3?.userid)}>{subChildData3?.name}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className={styles.hvitemchild}  style={{cursor:"pointer"}} onClick={navigateRegister}>
                              <div className={styles.hvitem}>
                                <div className={styles.hvitemparent}>
                                  <div className={styles.person}>
                                    <div className={styles.tooltip}>
                                      <div className={styles.imgcontainer}>
                                        <img src={greenJoin} alt="parentpic" />
                                      </div>
                                    </div>
                                    <div className={styles.parentdetails}>
                                      <span>Open</span>
                                      {/* <span>{subChildData3?.userid}</span>
                                        <span>{subChildData3?.name}</span> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* //   :
                      // "bcg"
                      // }   */}
                      </div>
                    </div>
                  </div>
                ) : rootSubData?.side != "Left" && rootSubData ? (
                  <div className={styles.hvitemchild}>
                    <div className={styles.hvitem}>
                      <div className={styles.hvitem}>
                        <div className={styles.hvitemparent}>
                          <div className={styles.person}>
                            <div className={styles.tooltip}>
                              <div className={styles.imgcontainer}>
                                <img src={parent} alt="parentpic" />
                              </div>
                            </div>
                            <div className={styles.parentdetails}>
                              {/* <span>Open</span> */}

                              <span style={{cursor:"pointer"}} onClick={()=>filterUser(rootSubData?.userid)}>{rootSubData?.userid}</span>
                              <span style={{cursor:"pointer"}} onClick={()=>filterUser(rootSubData?.userid)}> khkhkk</span>
                            </div>
                          </div>
                        </div>
                        {subChildData1 || subChildData2 ? (
                          <div className={styles.hvitemchildren}>
                            {subChildData1?.side == "Left" ? (
                              <div className={styles.hvitemchild}>
                                <div className={styles.hvitem}>
                                  <div className={styles.hvitemparent}>
                                    <div className={styles.person}>
                                      <div className={styles.tooltip}>
                                        <div className={styles.imgcontainer}>
                                          <img src={parent} alt="parentpic" />
                                        </div>
                                      </div>
                                      <div className={styles.parentdetails}>
                                        <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData1?.userid)}>{subChildData1?.userid}</span>
                                        <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData1?.userid)}>{subChildData1?.name}</span>
                                        {/* <span>kaif</span> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : subChildData2?.side != "Right"&&subChildData2 ? (
                              <div className={styles.hvitemchild}>
                                <div className={styles.hvitem}>
                                  <div className={styles.hvitemparent}>
                                    <div className={styles.person}>
                                      <div className={styles.tooltip}>
                                        <div className={styles.imgcontainer}>
                                          <img src={parent} alt="parentpic" />
                                        </div>
                                      </div>
                                      <div className={styles.parentdetails}>
                                        <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData2?.userid)}>{subChildData2?.userid}</span>
                                        <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData2?.userid)}>ui</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className={styles.hvitemchild}  style={{cursor:"pointer"}} onClick={navigateRegister}>
                                <div className={styles.hvitem}>
                                  <div className={styles.hvitemparent}>
                                    <div className={styles.person}>
                                      <div className={styles.tooltip}>
                                        <div className={styles.imgcontainer}>
                                          <img
                                            src={greenJoin}
                                            alt="parentpic"
                                          />
                                        </div>
                                      </div>
                                      <div className={styles.parentdetails}>
                                        <span>Open</span>
                                        {/* <span>{subChildData2?.userid}</span>
                                    <span>{subChildData2?.name}</span> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {subChildData2?.side == "Right" ? (
                              <div className={styles.hvitemchild}>
                                <div className={styles.hvitem}>
                                  <div className={styles.hvitemparent}>
                                    <div className={styles.person}>
                                      <div className={styles.tooltip}>
                                        <div className={styles.imgcontainer}>
                                          <img src={parent} alt="parentpic" />
                                        </div>
                                      </div>
                                      <div className={styles.parentdetails}>
                                        <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData2?.userid)}>{subChildData2?.userid}</span>
                                        <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData2?.userid)}>{subChildData2?.name}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : subChildData1?.side != "Left" ? (
                              <div className={styles.hvitemchild}>
                                <div className={styles.hvitem}>
                                  <div className={styles.hvitemparent}>
                                    <div className={styles.person}>
                                      <div className={styles.tooltip}>
                                        <div className={styles.imgcontainer}>
                                          <img src={parent} alt="parentpic" />
                                        </div>
                                      </div>
                                      <div className={styles.parentdetails}>
                                        <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData1?.userid)}>{subChildData1?.userid}</span>
                                        <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData1?.userid)}>{subChildData1?.name}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className={styles.hvitemchild}  style={{cursor:"pointer"}} onClick={navigateRegister}>
                                <div className={styles.hvitem}>
                                  <div className={styles.hvitemparent}>
                                    <div className={styles.person}>
                                      <div className={styles.tooltip}>
                                        <div className={styles.imgcontainer}>
                                          <img
                                            src={greenJoin}
                                            alt="parentpic"
                                          />
                                        </div>
                                      </div>
                                      <div className={styles.parentdetails}>
                                        <span>Open</span>
                                        {/* <span>{subChildData1?.userid}</span>
                                      <span>{subChildData1?.name}</span> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ) 
                        : 
                        (
                          <div className={styles.hvitemchildren}>
                            {subChildData1?.side == "Left" ? (
                              <div className={styles.hvitemchild}>
                                <div className={styles.hvitem}>
                                  <div className={styles.hvitemparent}>
                                    <div className={styles.person}>
                                      <div className={styles.tooltip}>
                                        <div className={styles.imgcontainer}>
                                          <img src={parent} alt="parentpic" />
                                        </div>
                                      </div>
                                      <div className={styles.parentdetails}>
                                        <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData1?.userid)}>{subChildData1?.userid}</span>
                                        <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData1?.userid)}>{subChildData1?.name}</span>
                                        {/* <span>kaif</span> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : subChildData1?.side != "Right" ? (
                              <div className={styles.hvitemchild}  style={{cursor:"pointer"}} onClick={navigateRegister} >
                                <div className={styles.hvitem}>
                                  <div className={styles.hvitemparent}>
                                    <div className={styles.person}>
                                      <div className={styles.tooltip}>
                                        <div className={styles.imgcontainer}>
                                          <img
                                            src={greenJoin}
                                            alt="parentpic"
                                          />
                                        </div>
                                      </div>
                                      <div className={styles.parentdetails}>
                                        {/* <span>{subChildData2?.userid}</span>
                                    <span>{subChildData2?.name}</span> */}
                                        <span>Open</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className={styles.hvitemchild}  style={{cursor:"pointer"}} onClick={navigateRegister}>
                                <div className={styles.hvitem}>
                                  <div className={styles.hvitemparent}>
                                    <div className={styles.person}>
                                      <div className={styles.tooltip}>
                                        <div className={styles.imgcontainer}>
                                          <img
                                            src={greenJoin}
                                            alt="parentpic"
                                          />
                                        </div>
                                      </div>
                                      <div className={styles.parentdetails}>
                                        <span>Open</span>
                                        {/* <span>{subChildData2?.userid}</span>
                                  <span>{subChildData2?.name}</span> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {subChildData2?.side == "Right" ? (
                              <div className={styles.hvitemchild}>
                                <div className={styles.hvitem}>
                                  <div className={styles.hvitemparent}>
                                    <div className={styles.person}>
                                      <div className={styles.tooltip}>
                                        <div className={styles.imgcontainer}>
                                          <img src={parent} alt="parentpic" />
                                        </div>
                                      </div>
                                      <div className={styles.parentdetails}>
                                        <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData2?.userid)}>{subChildData2?.userid}</span>
                                        <span style={{cursor:"pointer"}} onClick={()=>filterUser(subChildData2?.userid)}>{subChildData2?.name}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : subChildData1?.side != "Left" ? (
                              <div className={styles.hvitemchild}  style={{cursor:"pointer"}} onClick={navigateRegister}>
                                <div className={styles.hvitem}>
                                  <div className={styles.hvitemparent}>
                                    <div className={styles.person}>
                                      <div className={styles.tooltip}>
                                        <div className={styles.imgcontainer}>
                                          <img
                                            src={greenJoin}
                                            alt="parentpic"
                                          />
                                        </div>
                                      </div>
                                      <div className={styles.parentdetails}>
                                        <span>open</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className={styles.hvitemchild}  style={{cursor:"pointer"}} onClick={navigateRegister}>
                                <div className={styles.hvitem}>
                                  <div className={styles.hvitemparent}>
                                    <div className={styles.person}>
                                      <div className={styles.tooltip}>
                                        <div className={styles.imgcontainer}>
                                          <img
                                            src={greenJoin}
                                            alt="parentpic"
                                          />
                                        </div>
                                      </div>
                                      <div className={styles.parentdetails}>
                                        <span>Open</span>
                                        {/* <span>{subChildData1?.userid}</span>
                                    <span>{subChildData1?.name}</span> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={styles.hvitemchild}  style={{cursor:"pointer"}} onClick={navigateRegister}>
                    <div className={styles.hvitem}>
                      <div className={styles.hvitemparent}>
                        <div className={styles.person}>
                          <div className={styles.tooltip}>
                            <div className={styles.imgcontainer}>
                              <img src={greenJoin} alt="parentpic" />
                            </div>
                          </div>
                          <div className={styles.parentdetails}>
                            <span> Open</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                  
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MotherTree;
