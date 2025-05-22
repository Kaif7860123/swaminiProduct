import React, { useState } from "react";
import styles from "./index.module.css";
import Pagination from "../../../shared/paginationheaders";
import { useNavigate } from "react-router-dom";
import { inputData } from "../../../Data/inputData";
import Button from "../../../Components/button";
import Swal from "sweetalert2";
function EditBank() {
  const jump = useNavigate();
  const handleNavigate = () => {
    jump("/user/profile_overview");
  };

  const [bankName, setbankName] = useState("");
  const [accountNumber, setaccountNumber] = useState("");
  const [accountType, setaccountType] = useState("");
  const [ifscCode, setifscCode] = useState("");
  const [branch, setbranch] = useState("");
  const [panNumber, setpanNumber] = useState("");

  const handlesave = async () => {
    if (
      bankName == "" ||
      accountNumber == "" ||
      accountType == "" ||
      branch == "" ||
      ifscCode == "" ||
      panNumber == ""
    ) {
      Swal.fire("All fields is required");
    } else {
      const regex = /^[A-Za-z ]+$/;
      const accountregex = /^[0-9]{6,18}$/;
      if (regex.test(bankName)) {
        if (regex.test(branch)) {
          if (accountregex.test(accountNumber)) {
            const res = await fetch(
              "http://localhost:3000/api/v1/users/createbankdetails",
              {
                method: "POST",
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify({
                  bankName: bankName,
                  accountNumber: accountNumber,
                  accountType: accountType,
                  branch: branch,
                  ifscCode: ifscCode,
                  panNumber: panNumber,
                  userid: localStorage.getItem("uid"),
                }),
              }
            );
            const data = await res.json();
            console.log(data);
            if (data.msg == "Bank Details Already Save") {
              Swal.fire({
                icon: "warning",
                titleText: `Warn: : ${data.msg}`,
              });
            }
            if (data.msg == "Save Bank Details Successfully") {
              Swal.fire({
                icon: "success",
                titleText: "Details Save Successfully",
              });
            } else {
              Swal.fire({
                icon: "error",
                titleText: `Error : ${data.msg}`,
              });
            }
          } else {
            Swal.fire({
              icon: "error",
              titleText: `Please enter valid account number`,
            });
          }
        } else {
          Swal.fire({
            icon: "error",
            titleText: `Please enter valid branch name`,
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          titleText: `Please enter valid bank name`,
        });
      }
    }
  };
  return (
    <>
      <div className={styles.headerProfile}>
        <Pagination name1="Profile" name2="save Bank Details" />
        <p className={styles.backprofile} onClick={handleNavigate}>
          Return to Profile
        </p>
      </div>

      <div className={styles.personalInfoCont}>
        <p className={styles.content}>Save Bank Details</p>
        <div className={styles.pesonalInfos}>
          <div className={styles.inputCont}>
            <p>Bank Name :</p>
            <input
              type="text"
              placeholder="Enter Bank Name"
              className={styles.inputs}
              onChange={(e) => setbankName(e.target.value)}
              value={bankName}
            />
          </div>
          <div className={styles.inputCont}>
            <p>IFSC Code :</p>
            <input
              type="text"
              placeholder="AIRP0000001"
              className={styles.inputs}
              onChange={(e) => setifscCode(e.target.value)}
              value={ifscCode}
            />
          </div>
          <div className={styles.inputCont}>
            <p>Account No :</p>
            <input
              type="number"
              placeholder="Enter Bank Account Number"
              className={styles.inputs}
              onChange={(e) => setaccountNumber(e.target.value)}
              value={accountNumber}
            />
          </div>
          <div className={styles.inputCont}>
            <p>Branch :</p>
            <input
              type="text"
              placeholder="Enter Branch Name"
              className={styles.inputs}
              onChange={(e) => setbranch(e.target.value)}
              value={branch}
            />
          </div>
          <div className={styles.inputCont}>
            <p>Account Type</p>
            <select
              className={styles.inputs}
              onChange={(e) => setaccountType(e.target.value)}
            >
              <option>--select--</option>
              <option value="Saving">Saving</option>
              <option value="Current">Current</option>
            </select>
          </div>
          <div className={styles.inputCont}>
            <p>Pan Number</p>
            <input
              type="text"
              placeholder="Enter Pan Number"
              className={styles.inputs}
              onChange={(e) => setpanNumber(e.target.value)}
              value={panNumber}
            />
          </div>
        </div>
        <Button clicked={handlesave} value="Save Bank Details" />
      </div>
    </>
  );
}

export default EditBank;
