import React from "react";
import styles from "./index.module.css";
import Pagination from "../../../shared/paginationheaders";
import { IoPrintSharp } from "react-icons/io5";
import { LuFileX } from "react-icons/lu";
import SubmitBTn from "../../../widgets/Subhmitbtn";
import Tables from "../../Tables";
import { useDispatch, useSelector } from "react-redux";
import { userdataActions } from "../../../../Redux/Slices";
const CommonNetwork = ({
  title,
  selecttype,
  note,
  allchildren,
  epin,
  fs,
  dailypayout,
  name1,
  th7,
  th8,
  th9,
  th10,
  child,
  th1,
  th2,
  th3,
  th4,
  status,
  th5,
  th6,
  gap,
  dis,
  temp,
  name2,
  thdata,
  tddata,
  handlefilter,
  setfromdate,
  settodate,
  setposs,
  poss,
  bool
}) => {
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
  const dispatch = useDispatch()
  return (
    <>
      <div className={styles.directmembercontainet}>
        <Pagination name1={name1} name2={name2} />
        <div className={styles.direcmembercart}>
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
          <div className={styles.bottomcontent}>
            {note && <p>{note}</p>}

            <div className={styles.datecontainer}>
              {dailypayout ? (
                <div>
                  <label>PayOut Cycle:</label>
                  <div className={styles.dailypaout}>
                    <select>
                      <option value="0">--All--</option>
                      <option value="99">
                        99 - 16 Oct 2024 12:00AM To 16 Oct 2024 11:59AM
                      </option>
                      <option value="98">
                        98 - 15 Oct 2024 12:00PM To 15 Oct 2024 11:59PM
                      </option>
                      <option value="97">
                        97 - 15 Oct 2024 12:00AM To 15 Oct 2024 11:59AM
                      </option>
                      <option value="96">
                        96 - 14 Oct 2024 12:00PM To 14 Oct 2024 11:59PM
                      </option>
                      <option value="95">
                        95 - 14 Oct 2024 12:00AM To 14 Oct 2024 11:59AM
                      </option>
                      <option value="94">
                        94 - 13 Oct 2024 12:00PM To 13 Oct 2024 11:59PM
                      </option>
                      <option value="93">
                        93 - 13 Oct 2024 12:00AM To 13 Oct 2024 11:59AM
                      </option>
                      <option value="92">
                        92 - 12 Oct 2024 12:00PM To 12 Oct 2024 11:59PM
                      </option>
                      <option value="91">
                        91 - 12 Oct 2024 12:00AM To 12 Oct 2024 11:59AM
                      </option>
                      <option value="90">
                        90 - 11 Oct 2024 12:00PM To 11 Oct 2024 11:59PM
                      </option>
                      <option value="9">
                        9 - 01 Sep 2024 12:00AM To 01 Sep 2024 11:59AM
                      </option>
                      <option value="89">
                        89 - 11 Oct 2024 12:00AM To 11 Oct 2024 11:59AM
                      </option>
                      <option value="88">
                        88 - 10 Oct 2024 12:00PM To 10 Oct 2024 11:59PM
                      </option>
                      <option value="87">
                        87 - 10 Oct 2024 12:00AM To 10 Oct 2024 11:59AM
                      </option>
                      <option value="86">
                        86 - 09 Oct 2024 12:00PM To 09 Oct 2024 11:59PM
                      </option>
                      <option value="85">
                        85 - 09 Oct 2024 12:00AM To 09 Oct 2024 11:59AM
                      </option>
                      <option value="84">
                        84 - 08 Oct 2024 12:00PM To 08 Oct 2024 11:59PM
                      </option>
                      <option value="83">
                        83 - 08 Oct 2024 12:00AM To 08 Oct 2024 11:59AM
                      </option>
                      <option value="82">
                        82 - 07 Oct 2024 12:00PM To 07 Oct 2024 11:59PM
                      </option>
                      <option value="81">
                        81 - 07 Oct 2024 12:00AM To 07 Oct 2024 11:59AM
                      </option>
                      <option value="80">
                        80 - 06 Oct 2024 12:00PM To 06 Oct 2024 11:59PM
                      </option>
                      <option value="8">
                        8 - 31 Aug 2024 12:00PM To 31 Aug 2024 11:59PM
                      </option>
                      <option value="79">
                        79 - 06 Oct 2024 12:00AM To 06 Oct 2024 11:59AM
                      </option>
                      <option value="78">
                        78 - 05 Oct 2024 12:00PM To 05 Oct 2024 11:59PM
                      </option>
                      <option value="77">
                        77 - 05 Oct 2024 12:00AM To 05 Oct 2024 11:59AM
                      </option>
                      <option value="76">
                        76 - 04 Oct 2024 12:00PM To 04 Oct 2024 11:59PM
                      </option>
                      <option value="75">
                        75 - 04 Oct 2024 12:00AM To 04 Oct 2024 11:59AM
                      </option>
                      <option value="74">
                        74 - 03 Oct 2024 12:00PM To 03 Oct 2024 11:59PM
                      </option>
                      <option value="73">
                        73 - 03 Oct 2024 12:00AM To 03 Oct 2024 11:59AM
                      </option>
                      <option value="72">
                        72 - 02 Oct 2024 12:00PM To 02 Oct 2024 11:59PM
                      </option>
                      <option value="71">
                        71 - 02 Oct 2024 12:00AM To 02 Oct 2024 11:59AM
                      </option>
                      <option value="70">
                        70 - 01 Oct 2024 12:00PM To 01 Oct 2024 11:59PM
                      </option>
                      <option value="7">
                        7 - 31 Aug 2024 12:00AM To 31 Aug 2024 11:59AM
                      </option>
                      <option value="69">
                        69 - 01 Oct 2024 12:00AM To 01 Oct 2024 11:59AM
                      </option>
                      <option value="68">
                        68 - 30 Sep 2024 12:00PM To 30 Sep 2024 11:59PM
                      </option>
                      <option value="67">
                        67 - 30 Sep 2024 12:00AM To 30 Sep 2024 11:59AM
                      </option>
                      <option value="66">
                        66 - 29 Sep 2024 12:00PM To 29 Sep 2024 11:59PM
                      </option>
                      <option value="65">
                        65 - 29 Sep 2024 12:00AM To 29 Sep 2024 11:59AM
                      </option>
                      <option value="64">
                        64 - 28 Sep 2024 12:00PM To 28 Sep 2024 11:59PM
                      </option>
                      <option value="63">
                        63 - 28 Sep 2024 12:00AM To 28 Sep 2024 11:59AM
                      </option>
                      <option value="62">
                        62 - 27 Sep 2024 12:00PM To 27 Sep 2024 11:59PM
                      </option>
                      <option value="61">
                        61 - 27 Sep 2024 12:00AM To 27 Sep 2024 11:59AM
                      </option>
                      <option value="60">
                        60 - 26 Sep 2024 12:00PM To 26 Sep 2024 11:59PM
                      </option>
                      <option value="6">
                        6 - 30 Aug 2024 12:00PM To 30 Aug 2024 11:59PM
                      </option>
                      <option value="59">
                        59 - 26 Sep 2024 12:00AM To 26 Sep 2024 11:59AM
                      </option>
                      <option value="58">
                        58 - 25 Sep 2024 12:00PM To 25 Sep 2024 11:59PM
                      </option>
                      <option value="57">
                        57 - 25 Sep 2024 12:00AM To 25 Sep 2024 11:59AM
                      </option>
                      <option value="56">
                        56 - 24 Sep 2024 12:00PM To 24 Sep 2024 11:59PM
                      </option>
                      <option value="55">
                        55 - 24 Sep 2024 12:00AM To 24 Sep 2024 11:59AM
                      </option>
                      <option value="54">
                        54 - 23 Sep 2024 12:00PM To 23 Sep 2024 11:59PM
                      </option>
                      <option value="53">
                        53 - 23 Sep 2024 12:00AM To 23 Sep 2024 11:59AM
                      </option>
                      <option value="52">
                        52 - 22 Sep 2024 12:00PM To 22 Sep 2024 11:59PM
                      </option>
                      <option value="51">
                        51 - 22 Sep 2024 12:00AM To 22 Sep 2024 11:59AM
                      </option>
                      <option value="50">
                        50 - 21 Sep 2024 12:00PM To 21 Sep 2024 11:59PM
                      </option>
                      <option value="5">
                        5 - 30 Aug 2024 12:00AM To 30 Aug 2024 11:59AM
                      </option>
                      <option value="49">
                        49 - 21 Sep 2024 12:00AM To 21 Sep 2024 11:59AM
                      </option>
                      <option value="48">
                        48 - 20 Sep 2024 12:00PM To 20 Sep 2024 11:59PM
                      </option>
                      <option value="47">
                        47 - 20 Sep 2024 12:00AM To 20 Sep 2024 11:59AM
                      </option>
                      <option value="46">
                        46 - 19 Sep 2024 12:00PM To 19 Sep 2024 11:59PM
                      </option>
                      <option value="45">
                        45 - 19 Sep 2024 12:00AM To 19 Sep 2024 11:59AM
                      </option>
                      <option value="44">
                        44 - 18 Sep 2024 12:00PM To 18 Sep 2024 11:59PM
                      </option>
                      <option value="43">
                        43 - 18 Sep 2024 12:00AM To 18 Sep 2024 11:59AM
                      </option>
                      <option value="42">
                        42 - 17 Sep 2024 12:00PM To 17 Sep 2024 11:59PM
                      </option>
                      <option value="41">
                        41 - 17 Sep 2024 12:00AM To 17 Sep 2024 11:59AM
                      </option>
                      <option value="40">
                        40 - 16 Sep 2024 12:00PM To 16 Sep 2024 11:59PM
                      </option>
                      <option value="4">
                        4 - 29 Aug 2024 12:00PM To 29 Aug 2024 11:59PM
                      </option>
                      <option value="39">
                        39 - 16 Sep 2024 12:00AM To 16 Sep 2024 11:59AM
                      </option>
                      <option value="38">
                        38 - 15 Sep 2024 12:00PM To 15 Sep 2024 11:59PM
                      </option>
                      <option value="37">
                        37 - 15 Sep 2024 12:00AM To 15 Sep 2024 11:59AM
                      </option>
                      <option value="363">
                        363 - 25 Feb 2025 12:00AM To 25 Feb 2025 11:59AM
                      </option>
                      <option value="362">
                        362 - 24 Feb 2025 12:00PM To 24 Feb 2025 11:59PM
                      </option>
                      <option value="361">
                        361 - 24 Feb 2025 12:00AM To 24 Feb 2025 11:59AM
                      </option>
                      <option value="360">
                        360 - 23 Feb 2025 12:00PM To 23 Feb 2025 11:59PM
                      </option>
                      <option value="36">
                        36 - 14 Sep 2024 12:00PM To 14 Sep 2024 11:59PM
                      </option>
                      <option value="359">
                        359 - 23 Feb 2025 12:00AM To 23 Feb 2025 11:59AM
                      </option>
                      <option value="358">
                        358 - 22 Feb 2025 12:00PM To 22 Feb 2025 11:59PM
                      </option>
                      <option value="357">
                        357 - 22 Feb 2025 12:00AM To 22 Feb 2025 11:59AM
                      </option>
                      <option value="356">
                        356 - 21 Feb 2025 12:00PM To 21 Feb 2025 11:59PM
                      </option>
                      <option value="355">
                        355 - 21 Feb 2025 12:00AM To 21 Feb 2025 11:59AM
                      </option>
                      <option value="354">
                        354 - 20 Feb 2025 12:00PM To 20 Feb 2025 11:59PM
                      </option>
                      <option value="353">
                        353 - 20 Feb 2025 12:00AM To 20 Feb 2025 11:59AM
                      </option>
                      <option value="352">
                        352 - 19 Feb 2025 12:00PM To 19 Feb 2025 11:59PM
                      </option>
                      <option value="351">
                        351 - 19 Feb 2025 12:00AM To 19 Feb 2025 11:59AM
                      </option>
                      <option value="350">
                        350 - 18 Feb 2025 12:00PM To 18 Feb 2025 11:59PM
                      </option>
                      <option value="35">
                        35 - 14 Sep 2024 12:00AM To 14 Sep 2024 11:59AM
                      </option>
                      <option value="349">
                        349 - 18 Feb 2025 12:00AM To 18 Feb 2025 11:59AM
                      </option>
                      <option value="348">
                        348 - 17 Feb 2025 12:00PM To 17 Feb 2025 11:59PM
                      </option>
                      <option value="347">
                        347 - 17 Feb 2025 12:00AM To 17 Feb 2025 11:59AM
                      </option>
                      <option value="346">
                        346 - 16 Feb 2025 12:00PM To 16 Feb 2025 11:59PM
                      </option>
                      <option value="345">
                        345 - 16 Feb 2025 12:00AM To 16 Feb 2025 11:59AM
                      </option>
                      <option value="344">
                        344 - 15 Feb 2025 12:00PM To 15 Feb 2025 11:59PM
                      </option>
                      <option value="343">
                        343 - 15 Feb 2025 12:00AM To 15 Feb 2025 11:59AM
                      </option>
                      <option value="342">
                        342 - 14 Feb 2025 12:00PM To 14 Feb 2025 11:59PM
                      </option>
                      <option value="341">
                        341 - 14 Feb 2025 12:00AM To 14 Feb 2025 11:59AM
                      </option>
                      <option value="340">
                        340 - 13 Feb 2025 12:00PM To 13 Feb 2025 11:59PM
                      </option>
                      <option value="34">
                        34 - 13 Sep 2024 12:00PM To 13 Sep 2024 11:59PM
                      </option>
                      <option value="339">
                        339 - 13 Feb 2025 12:00AM To 13 Feb 2025 11:59AM
                      </option>
                      <option value="338">
                        338 - 12 Feb 2025 12:00PM To 12 Feb 2025 11:59PM
                      </option>
                      <option value="337">
                        337 - 12 Feb 2025 12:00AM To 12 Feb 2025 11:59AM
                      </option>
                      <option value="336">
                        336 - 11 Feb 2025 12:00PM To 11 Feb 2025 11:59PM
                      </option>
                      <option value="335">
                        335 - 11 Feb 2025 12:00AM To 11 Feb 2025 11:59AM
                      </option>
                      <option value="334">
                        334 - 10 Feb 2025 12:00PM To 10 Feb 2025 11:59PM
                      </option>
                      <option value="333">
                        333 - 10 Feb 2025 12:00AM To 10 Feb 2025 11:59AM
                      </option>
                      <option value="332">
                        332 - 09 Feb 2025 12:00PM To 09 Feb 2025 11:59PM
                      </option>
                      <option value="331">
                        331 - 09 Feb 2025 12:00AM To 09 Feb 2025 11:59AM
                      </option>
                      <option value="330">
                        330 - 08 Feb 2025 12:00PM To 08 Feb 2025 11:59PM
                      </option>
                      <option value="33">
                        33 - 13 Sep 2024 12:00AM To 13 Sep 2024 11:59AM
                      </option>
                      <option value="329">
                        329 - 08 Feb 2025 12:00AM To 08 Feb 2025 11:59AM
                      </option>
                      <option value="328">
                        328 - 07 Feb 2025 12:00PM To 07 Feb 2025 11:59PM
                      </option>
                      <option value="327">
                        327 - 07 Feb 2025 12:00AM To 07 Feb 2025 11:59AM
                      </option>
                      <option value="326">
                        326 - 06 Feb 2025 12:00PM To 06 Feb 2025 11:59PM
                      </option>
                      <option value="325">
                        325 - 06 Feb 2025 12:00AM To 06 Feb 2025 11:59AM
                      </option>
                      <option value="324">
                        324 - 05 Feb 2025 12:00PM To 05 Feb 2025 11:59PM
                      </option>
                      <option value="323">
                        323 - 05 Feb 2025 12:00AM To 05 Feb 2025 11:59AM
                      </option>
                      <option value="322">
                        322 - 04 Feb 2025 12:00PM To 04 Feb 2025 11:59PM
                      </option>
                      <option value="321">
                        321 - 04 Feb 2025 12:00AM To 04 Feb 2025 11:59AM
                      </option>
                      <option value="320">
                        320 - 03 Feb 2025 12:00PM To 03 Feb 2025 11:59PM
                      </option>
                      <option value="32">
                        32 - 12 Sep 2024 12:00PM To 12 Sep 2024 11:59PM
                      </option>
                      <option value="319">
                        319 - 03 Feb 2025 12:00AM To 03 Feb 2025 11:59AM
                      </option>
                      <option value="318">
                        318 - 02 Feb 2025 12:00PM To 02 Feb 2025 11:59PM
                      </option>
                      <option value="317">
                        317 - 02 Feb 2025 12:00AM To 02 Feb 2025 11:59AM
                      </option>
                      <option value="316">
                        316 - 01 Feb 2025 12:00PM To 01 Feb 2025 11:59PM
                      </option>
                      <option value="315">
                        315 - 01 Feb 2025 12:00AM To 01 Feb 2025 11:59AM
                      </option>
                      <option value="314">
                        314 - 31 Jan 2025 12:00PM To 31 Jan 2025 11:59PM
                      </option>
                      <option value="313">
                        313 - 31 Jan 2025 12:00AM To 31 Jan 2025 11:59AM
                      </option>
                      <option value="312">
                        312 - 30 Jan 2025 12:00PM To 30 Jan 2025 11:59PM
                      </option>
                      <option value="311">
                        311 - 30 Jan 2025 12:00AM To 30 Jan 2025 11:59AM
                      </option>
                      <option value="310">
                        310 - 29 Jan 2025 12:00PM To 29 Jan 2025 11:59PM
                      </option>
                      <option value="31">
                        31 - 12 Sep 2024 12:00AM To 12 Sep 2024 11:59AM
                      </option>
                      <option value="309">
                        309 - 29 Jan 2025 12:00AM To 29 Jan 2025 11:59AM
                      </option>
                      <option value="308">
                        308 - 28 Jan 2025 12:00PM To 28 Jan 2025 11:59PM
                      </option>
                      <option value="307">
                        307 - 28 Jan 2025 12:00AM To 28 Jan 2025 11:59AM
                      </option>
                      <option value="306">
                        306 - 27 Jan 2025 12:00PM To 27 Jan 2025 11:59PM
                      </option>
                      <option value="305">
                        305 - 27 Jan 2025 12:00AM To 27 Jan 2025 11:59AM
                      </option>
                      <option value="304">
                        304 - 26 Jan 2025 12:00PM To 26 Jan 2025 11:59PM
                      </option>
                      <option value="303">
                        303 - 26 Jan 2025 12:00AM To 26 Jan 2025 11:59AM
                      </option>
                      <option value="302">
                        302 - 25 Jan 2025 12:00PM To 25 Jan 2025 11:59PM
                      </option>
                      <option value="301">
                        301 - 25 Jan 2025 12:00AM To 25 Jan 2025 11:59AM
                      </option>
                      <option value="300">
                        300 - 24 Jan 2025 12:00PM To 24 Jan 2025 11:59PM
                      </option>
                      <option value="30">
                        30 - 11 Sep 2024 12:00PM To 11 Sep 2024 11:59PM
                      </option>
                      <option value="3">
                        3 - 29 Aug 2024 12:00AM To 29 Aug 2024 11:59AM
                      </option>
                      <option value="299">
                        299 - 24 Jan 2025 12:00AM To 24 Jan 2025 11:59AM
                      </option>
                      <option value="298">
                        298 - 23 Jan 2025 12:00PM To 23 Jan 2025 11:59PM
                      </option>
                      <option value="297">
                        297 - 23 Jan 2025 12:00AM To 23 Jan 2025 11:59AM
                      </option>
                      <option value="296">
                        296 - 22 Jan 2025 12:00PM To 22 Jan 2025 11:59PM
                      </option>
                      <option value="295">
                        295 - 22 Jan 2025 12:00AM To 22 Jan 2025 11:59AM
                      </option>
                      <option value="294">
                        294 - 21 Jan 2025 12:00PM To 21 Jan 2025 11:59PM
                      </option>
                      <option value="293">
                        293 - 21 Jan 2025 12:00AM To 21 Jan 2025 11:59AM
                      </option>
                      <option value="292">
                        292 - 20 Jan 2025 12:00PM To 20 Jan 2025 11:59PM
                      </option>
                      <option value="291">
                        291 - 20 Jan 2025 12:00AM To 20 Jan 2025 11:59AM
                      </option>
                      <option value="290">
                        290 - 19 Jan 2025 12:00PM To 19 Jan 2025 11:59PM
                      </option>
                      <option value="29">
                        29 - 11 Sep 2024 12:00AM To 11 Sep 2024 11:59AM
                      </option>
                      <option value="289">
                        289 - 19 Jan 2025 12:00AM To 19 Jan 2025 11:59AM
                      </option>
                      <option value="288">
                        288 - 18 Jan 2025 12:00PM To 18 Jan 2025 11:59PM
                      </option>
                      <option value="287">
                        287 - 18 Jan 2025 12:00AM To 18 Jan 2025 11:59AM
                      </option>
                      <option value="286">
                        286 - 17 Jan 2025 12:00PM To 17 Jan 2025 11:59PM
                      </option>
                      <option value="285">
                        285 - 17 Jan 2025 12:00AM To 17 Jan 2025 11:59AM
                      </option>
                      <option value="284">
                        284 - 16 Jan 2025 12:00PM To 16 Jan 2025 11:59PM
                      </option>
                      <option value="283">
                        283 - 16 Jan 2025 12:00AM To 16 Jan 2025 11:59AM
                      </option>
                      <option value="282">
                        282 - 15 Jan 2025 12:00PM To 15 Jan 2025 11:59PM
                      </option>
                      <option value="281">
                        281 - 15 Jan 2025 12:00AM To 15 Jan 2025 11:59AM
                      </option>
                      <option value="280">
                        280 - 14 Jan 2025 12:00PM To 14 Jan 2025 11:59PM
                      </option>
                      <option value="28">
                        28 - 10 Sep 2024 12:00PM To 10 Sep 2024 11:59PM
                      </option>
                      <option value="279">
                        279 - 14 Jan 2025 12:00AM To 14 Jan 2025 11:59AM
                      </option>
                      <option value="278">
                        278 - 13 Jan 2025 12:00PM To 13 Jan 2025 11:59PM
                      </option>
                      <option value="277">
                        277 - 13 Jan 2025 12:00AM To 13 Jan 2025 11:59AM
                      </option>
                      <option value="276">
                        276 - 12 Jan 2025 12:00PM To 12 Jan 2025 11:59PM
                      </option>
                      <option value="275">
                        275 - 12 Jan 2025 12:00AM To 12 Jan 2025 11:59AM
                      </option>
                      <option value="274">
                        274 - 11 Jan 2025 12:00PM To 11 Jan 2025 11:59PM
                      </option>
                      <option value="273">
                        273 - 11 Jan 2025 12:00AM To 11 Jan 2025 11:59AM
                      </option>
                      <option value="272">
                        272 - 10 Jan 2025 12:00PM To 10 Jan 2025 11:59PM
                      </option>
                      <option value="271">
                        271 - 10 Jan 2025 12:00AM To 10 Jan 2025 11:59AM
                      </option>
                      <option value="270">
                        270 - 09 Jan 2025 12:00PM To 09 Jan 2025 11:59PM
                      </option>
                      <option value="27">
                        27 - 10 Sep 2024 12:00AM To 10 Sep 2024 11:59AM
                      </option>
                      <option value="269">
                        269 - 09 Jan 2025 12:00AM To 09 Jan 2025 11:59AM
                      </option>
                      <option value="268">
                        268 - 08 Jan 2025 12:00PM To 08 Jan 2025 11:59PM
                      </option>
                      <option value="267">
                        267 - 08 Jan 2025 12:00AM To 08 Jan 2025 11:59AM
                      </option>
                      <option value="266">
                        266 - 07 Jan 2025 12:00PM To 07 Jan 2025 11:59PM
                      </option>
                      <option value="265">
                        265 - 07 Jan 2025 12:00AM To 07 Jan 2025 11:59AM
                      </option>
                      <option value="264">
                        264 - 06 Jan 2025 12:00PM To 06 Jan 2025 11:59PM
                      </option>
                      <option value="263">
                        263 - 06 Jan 2025 12:00AM To 06 Jan 2025 11:59AM
                      </option>
                      <option value="262">
                        262 - 05 Jan 2025 12:00PM To 05 Jan 2025 11:59PM
                      </option>
                      <option value="261">
                        261 - 05 Jan 2025 12:00AM To 05 Jan 2025 11:59AM
                      </option>
                      <option value="260">
                        260 - 04 Jan 2025 12:00PM To 04 Jan 2025 11:59PM
                      </option>
                      <option value="26">
                        26 - 09 Sep 2024 12:00PM To 09 Sep 2024 11:59PM
                      </option>
                      <option value="259">
                        259 - 04 Jan 2025 12:00AM To 04 Jan 2025 11:59AM
                      </option>
                      <option value="258">
                        258 - 03 Jan 2025 12:00PM To 03 Jan 2025 11:59PM
                      </option>
                      <option value="257">
                        257 - 03 Jan 2025 12:00AM To 03 Jan 2025 11:59AM
                      </option>
                      <option value="256">
                        256 - 02 Jan 2025 12:00PM To 02 Jan 2025 11:59PM
                      </option>
                      <option value="255">
                        255 - 02 Jan 2025 12:00AM To 02 Jan 2025 11:59AM
                      </option>
                      <option value="254">
                        254 - 01 Jan 2025 12:00PM To 01 Jan 2025 11:59PM
                      </option>
                      <option value="253">
                        253 - 01 Jan 2025 12:00AM To 01 Jan 2025 11:59AM
                      </option>
                      <option value="252">
                        252 - 31 Dec 2024 12:00PM To 31 Dec 2024 11:59PM
                      </option>
                      <option value="251">
                        251 - 31 Dec 2024 12:00AM To 31 Dec 2024 11:59AM
                      </option>
                      <option value="250">
                        250 - 30 Dec 2024 12:00PM To 30 Dec 2024 11:59PM
                      </option>
                      <option value="25">
                        25 - 09 Sep 2024 12:00AM To 09 Sep 2024 11:59AM
                      </option>
                      <option value="249">
                        249 - 30 Dec 2024 12:00AM To 30 Dec 2024 11:59AM
                      </option>
                      <option value="248">
                        248 - 29 Dec 2024 12:00PM To 29 Dec 2024 11:59PM
                      </option>
                      <option value="247">
                        247 - 29 Dec 2024 12:00AM To 29 Dec 2024 11:59AM
                      </option>
                      <option value="246">
                        246 - 28 Dec 2024 12:00PM To 28 Dec 2024 11:59PM
                      </option>
                      <option value="245">
                        245 - 28 Dec 2024 12:00AM To 28 Dec 2024 11:59AM
                      </option>
                      <option value="244">
                        244 - 27 Dec 2024 12:00PM To 27 Dec 2024 11:59PM
                      </option>
                      <option value="243">
                        243 - 27 Dec 2024 12:00AM To 27 Dec 2024 11:59AM
                      </option>
                      <option value="242">
                        242 - 26 Dec 2024 12:00PM To 26 Dec 2024 11:59PM
                      </option>
                      <option value="241">
                        241 - 26 Dec 2024 12:00AM To 26 Dec 2024 11:59AM
                      </option>
                      <option value="240">
                        240 - 25 Dec 2024 12:00PM To 25 Dec 2024 11:59PM
                      </option>
                      <option value="24">
                        24 - 08 Sep 2024 12:00PM To 08 Sep 2024 11:59PM
                      </option>
                      <option value="239">
                        239 - 25 Dec 2024 12:00AM To 25 Dec 2024 11:59AM
                      </option>
                      <option value="238">
                        238 - 24 Dec 2024 12:00PM To 24 Dec 2024 11:59PM
                      </option>
                      <option value="237">
                        237 - 24 Dec 2024 12:00AM To 24 Dec 2024 11:59AM
                      </option>
                      <option value="236">
                        236 - 23 Dec 2024 12:00PM To 23 Dec 2024 11:59PM
                      </option>
                      <option value="235">
                        235 - 23 Dec 2024 12:00AM To 23 Dec 2024 11:59AM
                      </option>
                      <option value="234">
                        234 - 22 Dec 2024 12:00PM To 22 Dec 2024 11:59PM
                      </option>
                      <option value="233">
                        233 - 22 Dec 2024 12:00AM To 22 Dec 2024 11:59AM
                      </option>
                      <option value="232">
                        232 - 21 Dec 2024 12:00PM To 21 Dec 2024 11:59PM
                      </option>
                      <option value="231">
                        231 - 21 Dec 2024 12:00AM To 21 Dec 2024 11:59AM
                      </option>
                      <option value="230">
                        230 - 20 Dec 2024 12:00PM To 20 Dec 2024 11:59PM
                      </option>
                      <option value="23">
                        23 - 08 Sep 2024 12:00AM To 08 Sep 2024 11:59AM
                      </option>
                      <option value="229">
                        229 - 20 Dec 2024 12:00AM To 20 Dec 2024 11:59AM
                      </option>
                      <option value="228">
                        228 - 19 Dec 2024 12:00PM To 19 Dec 2024 11:59PM
                      </option>
                      <option value="227">
                        227 - 19 Dec 2024 12:00AM To 19 Dec 2024 11:59AM
                      </option>
                      <option value="226">
                        226 - 18 Dec 2024 12:00PM To 18 Dec 2024 11:59PM
                      </option>
                      <option value="225">
                        225 - 18 Dec 2024 12:00AM To 18 Dec 2024 11:59AM
                      </option>
                      <option value="224">
                        224 - 17 Dec 2024 12:00PM To 17 Dec 2024 11:59PM
                      </option>
                      <option value="223">
                        223 - 17 Dec 2024 12:00AM To 17 Dec 2024 11:59AM
                      </option>
                      <option value="222">
                        222 - 16 Dec 2024 12:00PM To 16 Dec 2024 11:59PM
                      </option>
                      <option value="221">
                        221 - 16 Dec 2024 12:00AM To 16 Dec 2024 11:59AM
                      </option>
                      <option value="220">
                        220 - 15 Dec 2024 12:00PM To 15 Dec 2024 11:59PM
                      </option>
                      <option value="22">
                        22 - 07 Sep 2024 12:00PM To 07 Sep 2024 11:59PM
                      </option>
                      <option value="219">
                        219 - 15 Dec 2024 12:00AM To 15 Dec 2024 11:59AM
                      </option>
                      <option value="218">
                        218 - 14 Dec 2024 12:00PM To 14 Dec 2024 11:59PM
                      </option>
                      <option value="217">
                        217 - 14 Dec 2024 12:00AM To 14 Dec 2024 11:59AM
                      </option>
                      <option value="216">
                        216 - 13 Dec 2024 12:00PM To 13 Dec 2024 11:59PM
                      </option>
                      <option value="215">
                        215 - 13 Dec 2024 12:00AM To 13 Dec 2024 11:59AM
                      </option>
                      <option value="214">
                        214 - 12 Dec 2024 12:00PM To 12 Dec 2024 11:59PM
                      </option>
                      <option value="213">
                        213 - 12 Dec 2024 12:00AM To 12 Dec 2024 11:59AM
                      </option>
                      <option value="212">
                        212 - 11 Dec 2024 12:00PM To 11 Dec 2024 11:59PM
                      </option>
                      <option value="211">
                        211 - 11 Dec 2024 12:00AM To 11 Dec 2024 11:59AM
                      </option>
                      <option value="210">
                        210 - 10 Dec 2024 12:00PM To 10 Dec 2024 11:59PM
                      </option>
                      <option value="21">
                        21 - 07 Sep 2024 12:00AM To 07 Sep 2024 11:59AM
                      </option>
                      <option value="209">
                        209 - 10 Dec 2024 12:00AM To 10 Dec 2024 11:59AM
                      </option>
                      <option value="208">
                        208 - 09 Dec 2024 12:00PM To 09 Dec 2024 11:59PM
                      </option>
                      <option value="207">
                        207 - 09 Dec 2024 12:00AM To 09 Dec 2024 11:59AM
                      </option>
                      <option value="206">
                        206 - 08 Dec 2024 12:00PM To 08 Dec 2024 11:59PM
                      </option>
                      <option value="205">
                        205 - 08 Dec 2024 12:00AM To 08 Dec 2024 11:59AM
                      </option>
                      <option value="204">
                        204 - 07 Dec 2024 12:00PM To 07 Dec 2024 11:59PM
                      </option>
                      <option value="203">
                        203 - 07 Dec 2024 12:00AM To 07 Dec 2024 11:59AM
                      </option>
                      <option value="202">
                        202 - 06 Dec 2024 12:00PM To 06 Dec 2024 11:59PM
                      </option>
                      <option value="201">
                        201 - 06 Dec 2024 12:00AM To 06 Dec 2024 11:59AM
                      </option>
                      <option value="200">
                        200 - 05 Dec 2024 12:00PM To 05 Dec 2024 11:59PM
                      </option>
                      <option value="20">
                        20 - 06 Sep 2024 12:00PM To 06 Sep 2024 11:59PM
                      </option>
                      <option value="2">
                        2 - 28 Aug 2024 12:00PM To 28 Aug 2024 11:59PM
                      </option>
                      <option value="199">
                        199 - 05 Dec 2024 12:00AM To 05 Dec 2024 11:59AM
                      </option>
                      <option value="198">
                        198 - 04 Dec 2024 12:00PM To 04 Dec 2024 11:59PM
                      </option>
                      <option value="197">
                        197 - 04 Dec 2024 12:00AM To 04 Dec 2024 11:59AM
                      </option>
                      <option value="196">
                        196 - 03 Dec 2024 12:00PM To 03 Dec 2024 11:59PM
                      </option>
                      <option value="195">
                        195 - 03 Dec 2024 12:00AM To 03 Dec 2024 11:59AM
                      </option>
                      <option value="194">
                        194 - 02 Dec 2024 12:00PM To 02 Dec 2024 11:59PM
                      </option>
                      <option value="193">
                        193 - 02 Dec 2024 12:00AM To 02 Dec 2024 11:59AM
                      </option>
                      <option value="192">
                        192 - 01 Dec 2024 12:00PM To 01 Dec 2024 11:59PM
                      </option>
                      <option value="191">
                        191 - 01 Dec 2024 12:00AM To 01 Dec 2024 11:59AM
                      </option>
                      <option value="190">
                        190 - 30 Nov 2024 12:00PM To 30 Nov 2024 11:59PM
                      </option>
                      <option value="19">
                        19 - 06 Sep 2024 12:00AM To 06 Sep 2024 11:59AM
                      </option>
                      <option value="189">
                        189 - 30 Nov 2024 12:00AM To 30 Nov 2024 11:59AM
                      </option>
                      <option value="188">
                        188 - 29 Nov 2024 12:00PM To 29 Nov 2024 11:59PM
                      </option>
                      <option value="187">
                        187 - 29 Nov 2024 12:00AM To 29 Nov 2024 11:59AM
                      </option>
                      <option value="186">
                        186 - 28 Nov 2024 12:00PM To 28 Nov 2024 11:59PM
                      </option>
                      <option value="185">
                        185 - 28 Nov 2024 12:00AM To 28 Nov 2024 11:59AM
                      </option>
                      <option value="184">
                        184 - 27 Nov 2024 12:00PM To 27 Nov 2024 11:59PM
                      </option>
                      <option value="183">
                        183 - 27 Nov 2024 12:00AM To 27 Nov 2024 11:59AM
                      </option>
                      <option value="182">
                        182 - 26 Nov 2024 12:00PM To 26 Nov 2024 11:59PM
                      </option>
                      <option value="181">
                        181 - 26 Nov 2024 12:00AM To 26 Nov 2024 11:59AM
                      </option>
                      <option value="180">
                        180 - 25 Nov 2024 12:00PM To 25 Nov 2024 11:59PM
                      </option>
                      <option value="18">
                        18 - 05 Sep 2024 12:00PM To 05 Sep 2024 11:59PM
                      </option>
                      <option value="179">
                        179 - 25 Nov 2024 12:00AM To 25 Nov 2024 11:59AM
                      </option>
                      <option value="178">
                        178 - 24 Nov 2024 12:00PM To 24 Nov 2024 11:59PM
                      </option>
                      <option value="177">
                        177 - 24 Nov 2024 12:00AM To 24 Nov 2024 11:59AM
                      </option>
                      <option value="176">
                        176 - 23 Nov 2024 12:00PM To 23 Nov 2024 11:59PM
                      </option>
                      <option value="175">
                        175 - 23 Nov 2024 12:00AM To 23 Nov 2024 11:59AM
                      </option>
                      <option value="174">
                        174 - 22 Nov 2024 12:00PM To 22 Nov 2024 11:59PM
                      </option>
                      <option value="173">
                        173 - 22 Nov 2024 12:00AM To 22 Nov 2024 11:59AM
                      </option>
                      <option value="172">
                        172 - 21 Nov 2024 12:00PM To 21 Nov 2024 11:59PM
                      </option>
                      <option value="171">
                        171 - 21 Nov 2024 12:00AM To 21 Nov 2024 11:59AM
                      </option>
                      <option value="170">
                        170 - 20 Nov 2024 12:00PM To 20 Nov 2024 11:59PM
                      </option>
                      <option value="17">
                        17 - 05 Sep 2024 12:00AM To 05 Sep 2024 11:59AM
                      </option>
                      <option value="169">
                        169 - 20 Nov 2024 12:00AM To 20 Nov 2024 11:59AM
                      </option>
                      <option value="168">
                        168 - 19 Nov 2024 12:00PM To 19 Nov 2024 11:59PM
                      </option>
                      <option value="167">
                        167 - 19 Nov 2024 12:00AM To 19 Nov 2024 11:59AM
                      </option>
                      <option value="166">
                        166 - 18 Nov 2024 12:00PM To 18 Nov 2024 11:59PM
                      </option>
                      <option value="165">
                        165 - 18 Nov 2024 12:00AM To 18 Nov 2024 11:59AM
                      </option>
                      <option value="164">
                        164 - 17 Nov 2024 12:00PM To 17 Nov 2024 11:59PM
                      </option>
                      <option value="163">
                        163 - 17 Nov 2024 12:00AM To 17 Nov 2024 11:59AM
                      </option>
                      <option value="162">
                        162 - 16 Nov 2024 12:00PM To 16 Nov 2024 11:59PM
                      </option>
                      <option value="161">
                        161 - 16 Nov 2024 12:00AM To 16 Nov 2024 11:59AM
                      </option>
                      <option value="160">
                        160 - 15 Nov 2024 12:00PM To 15 Nov 2024 11:59PM
                      </option>
                      <option value="16">
                        16 - 04 Sep 2024 12:00PM To 04 Sep 2024 11:59PM
                      </option>
                      <option value="159">
                        159 - 15 Nov 2024 12:00AM To 15 Nov 2024 11:59AM
                      </option>
                      <option value="158">
                        158 - 14 Nov 2024 12:00PM To 14 Nov 2024 11:59PM
                      </option>
                      <option value="157">
                        157 - 14 Nov 2024 12:00AM To 14 Nov 2024 11:59AM
                      </option>
                      <option value="156">
                        156 - 13 Nov 2024 12:00PM To 13 Nov 2024 11:59PM
                      </option>
                      <option value="155">
                        155 - 13 Nov 2024 12:00AM To 13 Nov 2024 11:59AM
                      </option>
                      <option value="154">
                        154 - 12 Nov 2024 12:00PM To 12 Nov 2024 11:59PM
                      </option>
                      <option value="153">
                        153 - 12 Nov 2024 12:00AM To 12 Nov 2024 11:59AM
                      </option>
                      <option value="152">
                        152 - 11 Nov 2024 12:00PM To 11 Nov 2024 11:59PM
                      </option>
                      <option value="151">
                        151 - 11 Nov 2024 12:00AM To 11 Nov 2024 11:59AM
                      </option>
                      <option value="150">
                        150 - 10 Nov 2024 12:00PM To 10 Nov 2024 11:59PM
                      </option>
                      <option value="15">
                        15 - 04 Sep 2024 12:00AM To 04 Sep 2024 11:59AM
                      </option>
                      <option value="149">
                        149 - 10 Nov 2024 12:00AM To 10 Nov 2024 11:59AM
                      </option>
                      <option value="148">
                        148 - 09 Nov 2024 12:00PM To 09 Nov 2024 11:59PM
                      </option>
                      <option value="147">
                        147 - 09 Nov 2024 12:00AM To 09 Nov 2024 11:59AM
                      </option>
                      <option value="146">
                        146 - 08 Nov 2024 12:00PM To 08 Nov 2024 11:59PM
                      </option>
                      <option value="145">
                        145 - 08 Nov 2024 12:00AM To 08 Nov 2024 11:59AM
                      </option>
                      <option value="144">
                        144 - 07 Nov 2024 12:00PM To 07 Nov 2024 11:59PM
                      </option>
                      <option value="143">
                        143 - 07 Nov 2024 12:00AM To 07 Nov 2024 11:59AM
                      </option>
                      <option value="142">
                        142 - 06 Nov 2024 12:00PM To 06 Nov 2024 11:59PM
                      </option>
                      <option value="141">
                        141 - 06 Nov 2024 12:00AM To 06 Nov 2024 11:59AM
                      </option>
                      <option value="140">
                        140 - 05 Nov 2024 12:00PM To 05 Nov 2024 11:59PM
                      </option>
                      <option value="14">
                        14 - 03 Sep 2024 12:00PM To 03 Sep 2024 11:59PM
                      </option>
                      <option value="139">
                        139 - 05 Nov 2024 12:00AM To 05 Nov 2024 11:59AM
                      </option>
                      <option value="138">
                        138 - 04 Nov 2024 12:00PM To 04 Nov 2024 11:59PM
                      </option>
                      <option value="137">
                        137 - 04 Nov 2024 12:00AM To 04 Nov 2024 11:59AM
                      </option>
                      <option value="136">
                        136 - 03 Nov 2024 12:00PM To 03 Nov 2024 11:59PM
                      </option>
                      <option value="135">
                        135 - 03 Nov 2024 12:00AM To 03 Nov 2024 11:59AM
                      </option>
                      <option value="134">
                        134 - 02 Nov 2024 12:00PM To 02 Nov 2024 11:59PM
                      </option>
                      <option value="133">
                        133 - 02 Nov 2024 12:00AM To 02 Nov 2024 11:59AM
                      </option>
                      <option value="132">
                        132 - 01 Nov 2024 12:00PM To 01 Nov 2024 11:59PM
                      </option>
                      <option value="131">
                        131 - 01 Nov 2024 12:00AM To 01 Nov 2024 11:59AM
                      </option>
                      <option value="130">
                        130 - 31 Oct 2024 12:00PM To 31 Oct 2024 11:59PM
                      </option>
                      <option value="13">
                        13 - 03 Sep 2024 12:00AM To 03 Sep 2024 11:59AM
                      </option>
                      <option value="129">
                        129 - 31 Oct 2024 12:00AM To 31 Oct 2024 11:59AM
                      </option>
                      <option value="128">
                        128 - 30 Oct 2024 12:00PM To 30 Oct 2024 11:59PM
                      </option>
                      <option value="127">
                        127 - 30 Oct 2024 12:00AM To 30 Oct 2024 11:59AM
                      </option>
                      <option value="126">
                        126 - 29 Oct 2024 12:00PM To 29 Oct 2024 11:59PM
                      </option>
                      <option value="125">
                        125 - 29 Oct 2024 12:00AM To 29 Oct 2024 11:59AM
                      </option>
                      <option value="124">
                        124 - 28 Oct 2024 12:00PM To 28 Oct 2024 11:59PM
                      </option>
                      <option value="123">
                        123 - 28 Oct 2024 12:00AM To 28 Oct 2024 11:59AM
                      </option>
                      <option value="122">
                        122 - 27 Oct 2024 12:00PM To 27 Oct 2024 11:59PM
                      </option>
                      <option value="121">
                        121 - 27 Oct 2024 12:00AM To 27 Oct 2024 11:59AM
                      </option>
                      <option value="120">
                        120 - 26 Oct 2024 12:00PM To 26 Oct 2024 11:59PM
                      </option>
                      <option value="12">
                        12 - 02 Sep 2024 12:00PM To 02 Sep 2024 11:59PM
                      </option>
                      <option value="119">
                        119 - 26 Oct 2024 12:00AM To 26 Oct 2024 11:59AM
                      </option>
                      <option value="118">
                        118 - 25 Oct 2024 12:00PM To 25 Oct 2024 11:59PM
                      </option>
                      <option value="117">
                        117 - 25 Oct 2024 12:00AM To 25 Oct 2024 11:59AM
                      </option>
                      <option value="116">
                        116 - 24 Oct 2024 12:00PM To 24 Oct 2024 11:59PM
                      </option>
                      <option value="115">
                        115 - 24 Oct 2024 12:00AM To 24 Oct 2024 11:59AM
                      </option>
                      <option value="114">
                        114 - 23 Oct 2024 12:00PM To 23 Oct 2024 11:59PM
                      </option>
                      <option value="113">
                        113 - 23 Oct 2024 12:00AM To 23 Oct 2024 11:59AM
                      </option>
                      <option value="112">
                        112 - 22 Oct 2024 12:00PM To 22 Oct 2024 11:59PM
                      </option>
                      <option value="111">
                        111 - 22 Oct 2024 12:00AM To 22 Oct 2024 11:59AM
                      </option>
                      <option value="110">
                        110 - 21 Oct 2024 12:00PM To 21 Oct 2024 11:59PM
                      </option>
                      <option value="11">
                        11 - 02 Sep 2024 12:00AM To 02 Sep 2024 11:59AM
                      </option>
                      <option value="109">
                        109 - 21 Oct 2024 12:00AM To 21 Oct 2024 11:59AM
                      </option>
                      <option value="108">
                        108 - 20 Oct 2024 12:00PM To 20 Oct 2024 11:59PM
                      </option>
                      <option value="107">
                        107 - 20 Oct 2024 12:00AM To 20 Oct 2024 11:59AM
                      </option>
                      <option value="106">
                        106 - 19 Oct 2024 12:00PM To 19 Oct 2024 11:59PM
                      </option>
                      <option value="105">
                        105 - 19 Oct 2024 12:00AM To 19 Oct 2024 11:59AM
                      </option>
                      <option value="104">
                        104 - 18 Oct 2024 12:00PM To 18 Oct 2024 11:59PM
                      </option>
                      <option value="103">
                        103 - 18 Oct 2024 12:00AM To 18 Oct 2024 11:59AM
                      </option>
                      <option value="102">
                        102 - 17 Oct 2024 12:00PM To 17 Oct 2024 11:59PM
                      </option>
                      <option value="101">
                        101 - 17 Oct 2024 12:00AM To 17 Oct 2024 11:59AM
                      </option>
                      <option value="100">
                        100 - 16 Oct 2024 12:00PM To 16 Oct 2024 11:59PM
                      </option>
                      <option value="10">
                        10 - 01 Sep 2024 12:00PM To 01 Sep 2024 11:59PM
                      </option>
                      <option value="1">
                        1 - 28 Aug 2024 12:00AM To 28 Aug 2024 11:59AM
                      </option>
                    </select>
                    <div className={styles.btn}>
                      <SubmitBTn name="Filter" />
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={styles.dates}
                  style={{
                    display: dis,
                    columnGap: gap,
                    gridTemplateColumns: temp,
                  }}
                >
                  {epin ? (
                <div>{allchildren}</div>
                  ) : (
                    <>
                      {status &&
                        <div className={styles.date1}>
                          <label>Status:</label>
                          <select>
                            <option value="all">--All--</option>
                            <option value="Cutting">Paid</option>
                            <option value="Cutting">Cutting</option>
                          </select>
                        </div>
                      }
                      <div className={styles.date1}>
                        <label>From Date:</label>
                        <input onChange={(e)=>setfromdate(e.target.value)} type="date" />
                      </div>
                      <div className={styles.date1}>
                        <label>To Date:</label>
                        <input onChange={(e)=>settodate(e.target.value)} type="date" />
                      </div>
                      <div className={styles.date1}>

					  </div>
                    </>
                  )}
                </div>
              )}
              {!dailypayout && (
                <div className={styles.rightselect}>
                  {child && (
                    <div className={styles.childlabel}>
                      {" "}
                      <label>{child}</label>
                      <div className={styles.childcomp}>
                        <input checked={poss=="Left"}  type="radio" onChange={(e)=>setposs(e.target.value)} name="position" value="Left" />
                        <label>LEFT</label>
                        <input checked={poss=="Right"} onChange={(e)=>setposs(e.target.value)} type="radio" name="position" value="Right" />
                        <label>RIGHT</label>
                      </div>
                    </div>
                  )}
				  {selecttype &&
				  <div className={styles.selecttype}>
				  <label>{selecttype}</label>
				  <div className={styles.selectcomp}>
					<input type="radio" name="banktype" value="credit" />
					<label>Credit</label>
					<input type="radio" name="banktype" value="debit" />
					<label>Debit</label>
				  </div>
				</div>
				}
                  <div className={styles.btn}>
                    <SubmitBTn onclick={handlefilter} name="Filter" />
                  </div>
                  <div className={styles.select}>
                    <label>Page Size</label>
                    <select>
                      <option>20</option>
                      <option>50</option>
                      <option>100</option>
                      <option>500</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.tablecontainer}>
              {/* <table id="printable-area">
                <thead style={{ fontSize: fs }}>
                  <tr id="pritablerow">
                    <th>{th1}</th>
                    <th>{th2}</th>
                    <th>{th3}</th>
                    <th>{th4}</th>
                    {th5 && <th>{th5}</th>}
                    {th6 && <th>{th6}</th>}
                    {th7 && <th>{th7}</th>}
                    {th8 && <th>{th8}</th>}
                    {th9 && <th>{th9}</th>}
                    {th10 && <th>{th10}</th>}
                  </tr>
                </thead>
              </table> */}
              <Tables bool={bool} thdata={thdata} tddata={tddata}/>
              {dailypayout && <p className={styles.warning}>No Record Found</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonNetwork;
