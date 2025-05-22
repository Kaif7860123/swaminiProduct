import React from "react";
import styles from "./index.module.css";
import { LuFileX } from "react-icons/lu";
import { IoPrintSharp } from "react-icons/io5";
const AdminTitltSection = ({ title }) => {
  const handleprint = () => {
    let printContent = document.getElementById("printable-area").innerHTML;
    let originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    let printWindow = window.open();
    printWindow.document.write("<html><head><title>Print Table</title>");
    printWindow.document.write("<h1 ><center>Downline Report</center></h1>");
    printWindow.document.write(printContent);
    printWindow.document.close();
    // Replace the entire body with printable content
    printWindow.print(); // Open the print dialog
    document.body.innerHTML = originalContent; // Restore the original page content
  };
  return (
    <>
      <div className={styles.directmembertititlecontainer}>
        <div className={styles.leftdirectmember}>
          <h2>{title}</h2>
        </div>
        <div className={styles.rightdirectmember}>
          <i onClick={handleprint}>
            <IoPrintSharp size={20} color="white" />
          </i>
          <i>
            <LuFileX size={20} color="white" />
          </i>
        </div>
      </div>
    </>
  );
};

export default AdminTitltSection;
